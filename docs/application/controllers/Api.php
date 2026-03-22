<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

/*
 * MindStrong Universe — JSON API Controller
 * All routes handled via: /api/<segment>
 * Session keys: admin_login, teacher_login, student_login, parent_login
 */

class Api extends CI_Controller {

    function __construct() {
        parent::__construct();
        $this->load->database();
        $this->load->library('session');
        $this->load->model('Crud_model');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }
    }

    private function json($data, $code = 200) {
        http_response_code($code);
        echo json_encode($data);
        exit;
    }

    private function requireSession($role_key) {
        if ($this->session->userdata($role_key) != 1)
            $this->json(['error' => 'Unauthorized'], 401);
    }

    // ─────────────────────────────────────────────────────────
    // AUTH
    // ─────────────────────────────────────────────────────────

    public function login() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            $this->json(['error' => 'Method not allowed'], 405);

        $email    = $this->input->post('email');
        $password = $this->input->post('password');
        if (!$email || !$password)
            $this->json(['error' => 'Email and password required'], 400);

        $credential = ['email' => $email, 'password' => sha1($password)];

        // Super Admin (own table, checked first)
        $q = $this->db->get_where('superadmin', $credential);
        if ($q->num_rows() > 0) {
            $row = $q->row();
            $this->session->set_userdata([
                'superadmin_login' => 1,
                'admin_login'      => 1,
                'superadmin_id'    => $row->superadmin_id,
                'login_user_id'    => $row->superadmin_id,
                'name'             => $row->name,
                'login_type'       => 'superadmin',
            ]);
            $this->json(['role' => 'superadmin', 'name' => $row->name, 'redirect' => 'super-admin.html']);
        }

        // Admin
        $q = $this->db->get_where('admin', $credential);
        if ($q->num_rows() > 0) {
            $row = $q->row();
            $this->session->set_userdata([
                'admin_login'   => 1,
                'admin_id'      => $row->admin_id,
                'login_user_id' => $row->admin_id,
                'name'          => $row->name,
                'login_type'    => 'admin',
            ]);
            $this->json(['role' => 'admin', 'name' => $row->name, 'redirect' => 'admin.html']);
        }

        // Teacher
        $q = $this->db->get_where('teacher', $credential);
        if ($q->num_rows() > 0) {
            $row = $q->row();
            $this->session->set_userdata([
                'teacher_login' => 1,
                'teacher_id'    => $row->teacher_id,
                'login_user_id' => $row->teacher_id,
                'name'          => $row->name,
                'login_type'    => 'teacher',
            ]);
            $this->json(['role' => 'teacher', 'name' => $row->name, 'redirect' => 'teacher.html']);
        }

        // Student
        $q = $this->db->get_where('student', $credential);
        if ($q->num_rows() > 0) {
            $row = $q->row();
            $this->session->set_userdata([
                'student_login' => 1,
                'student_id'    => $row->student_id,
                'login_user_id' => $row->student_id,
                'name'          => $row->name,
                'login_type'    => 'student',
            ]);
            $this->json(['role' => 'student', 'name' => $row->name, 'redirect' => 'dashboard.html']);
        }

        // Parent
        $q = $this->db->get_where('parent', $credential);
        if ($q->num_rows() > 0) {
            $row = $q->row();
            $this->session->set_userdata([
                'parent_login'  => 1,
                'parent_id'     => $row->parent_id,
                'login_user_id' => $row->parent_id,
                'name'          => $row->name,
                'login_type'    => 'parent',
            ]);
            $this->json(['role' => 'parent', 'name' => $row->name, 'redirect' => 'parent.html']);
        }

        $this->json(['error' => 'Invalid email or password'], 401);
    }

    public function logout() {
        $this->session->sess_destroy();
        $this->json(['success' => true]);
    }

    // ─────────────────────────────────────────────────────────
    // STUDENT
    // ─────────────────────────────────────────────────────────

    public function student_stats() {
        $this->requireSession('student_login');
        $student_id = $this->session->userdata('student_id');

        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        // Enrolled class
        $enroll = $this->db->get_where('enroll', ['student_id' => $student_id, 'year' => $running_year])->row();
        $class_id = $enroll ? $enroll->class_id : null;

        // Marks avg
        $marks = $this->db->get_where('mark', ['student_id' => $student_id, 'year' => $running_year])->result_array();
        $avg_score = 0;
        if (count($marks) > 0) {
            $total = array_sum(array_column($marks, 'mark_obtained'));
            $avg_score = round($total / count($marks), 1);
        }

        // Attendance
        $att_total  = $this->db->get_where('attendance', ['student_id' => $student_id, 'year' => $running_year])->num_rows();
        $att_present = $this->db->get_where('attendance', ['student_id' => $student_id, 'year' => $running_year, 'status' => 1])->num_rows();
        $att_rate = $att_total > 0 ? round(($att_present / $att_total) * 100, 1) : 100;

        // Courses (subjects in class)
        $course_count = $class_id ? $this->db->get_where('subject', ['class_id' => $class_id])->num_rows() : 0;

        // Unread messages
        $current_user = 'student-' . $student_id;
        $threads = $this->db->get_where('message_thread', ['reciever' => $current_user])->result_array();
        $unread = 0;
        foreach ($threads as $t) {
            $unread += $this->db->where('message_thread_code', $t['message_thread_code'])
                                ->where('sender !=', $current_user)
                                ->where('read_status', 0)
                                ->count_all_results('message');
        }

        $this->json([
            'avg_score'    => $avg_score,
            'attendance'   => $att_rate,
            'course_count' => $course_count,
            'unread_msgs'  => $unread,
            'streak'       => 7, // placeholder — no streak table in schema
            'xp'           => $avg_score * 10,
        ]);
    }

    public function student_courses() {
        $this->requireSession('student_login');
        $student_id   = $this->session->userdata('student_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');
        $enroll = $this->db->get_where('enroll', ['student_id' => $student_id, 'year' => $running_year])->row();
        if (!$enroll) $this->json([]);

        $subjects = $this->db->get_where('subject', ['class_id' => $enroll->class_id])->result_array();
        $result = [];
        foreach ($subjects as $sub) {
            $marks = $this->db->get_where('mark', [
                'student_id' => $student_id,
                'subject_id' => $sub['subject_id'],
                'year'       => $running_year
            ])->result_array();
            $avg = 0;
            if (count($marks)) {
                $avg = round(array_sum(array_column($marks, 'mark_obtained')) / count($marks), 1);
            }
            $result[] = [
                'subject_id'   => $sub['subject_id'],
                'name'         => $sub['name'],
                'code'         => $sub['subject_code'] ?? '',
                'teacher_id'   => $sub['teacher_id'] ?? null,
                'avg_score'    => $avg,
                'progress'     => min(100, (int)($avg)),
            ];
        }
        $this->json($result);
    }

    public function student_schedule() {
        $this->requireSession('student_login');
        $student_id   = $this->session->userdata('student_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');
        $enroll = $this->db->get_where('enroll', ['student_id' => $student_id, 'year' => $running_year])->row();
        if (!$enroll) $this->json([]);

        $day = strtolower(date('l')); // e.g. "monday"
        $routines = $this->db->get_where('class_routine', [
            'class_id' => $enroll->class_id,
            'day'      => $day
        ])->result_array();

        $result = [];
        foreach ($routines as $r) {
            $subject_name = '';
            if (!empty($r['subject_id'])) {
                $sub = $this->db->get_where('subject', ['subject_id' => $r['subject_id']])->row();
                $subject_name = $sub ? $sub->name : '';
            }
            $result[] = [
                'time'    => ($r['start_time'] ?? '') . ' - ' . ($r['end_time'] ?? ''),
                'subject' => $subject_name,
                'room'    => $r['room_number'] ?? '',
            ];
        }
        $this->json($result);
    }

    // ─────────────────────────────────────────────────────────
    // PARENT
    // ─────────────────────────────────────────────────────────

    public function parent_child() {
        $this->requireSession('parent_login');
        $parent_id    = $this->session->userdata('parent_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        $students = $this->db->get_where('student', ['parent_id' => $parent_id])->result_array();
        $result = [];
        foreach ($students as $s) {
            $enroll = $this->db->get_where('enroll', ['student_id' => $s['student_id'], 'year' => $running_year])->row();
            $class_name   = '';
            $section_name = '';
            if ($enroll) {
                $class = $this->db->get_where('class', ['class_id' => $enroll->class_id])->row();
                $class_name = $class ? $class->name : '';
                if (!empty($enroll->section_id)) {
                    $section = $this->db->get_where('section', ['section_id' => $enroll->section_id])->row();
                    $section_name = $section ? $section->name : '';
                }
            }
            $result[] = [
                'student_id'   => $s['student_id'],
                'name'         => $s['name'],
                'class'        => $class_name,
                'section'      => $section_name,
                'roll'         => $enroll ? $enroll->roll : '',
            ];
        }
        $this->json($result);
    }

    public function parent_grades() {
        $this->requireSession('parent_login');
        $parent_id    = $this->session->userdata('parent_id');
        $student_id   = $this->input->get('student_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        if (!$student_id) {
            $child = $this->db->get_where('student', ['parent_id' => $parent_id])->row();
            $student_id = $child ? $child->student_id : 0;
        }

        // Verify child belongs to parent
        $check = $this->db->get_where('student', ['student_id' => $student_id, 'parent_id' => $parent_id])->num_rows();
        if (!$check) $this->json(['error' => 'Forbidden'], 403);

        $enroll = $this->db->get_where('enroll', ['student_id' => $student_id, 'year' => $running_year])->row();
        if (!$enroll) $this->json([]);

        $subjects = $this->db->get_where('subject', ['class_id' => $enroll->class_id])->result_array();
        $result = [];
        foreach ($subjects as $sub) {
            $marks = $this->db->get_where('mark', [
                'student_id' => $student_id,
                'subject_id' => $sub['subject_id'],
                'year'       => $running_year
            ])->result_array();

            $last_score = count($marks) ? end($marks)['mark_obtained'] : null;
            $avg = count($marks) ? round(array_sum(array_column($marks, 'mark_obtained')) / count($marks), 1) : null;
            $total = count($marks) ? end($marks)['mark_total'] : 100;

            // Determine grade letter
            $grade_letter = 'N/A';
            if ($avg !== null) {
                $pct = ($total > 0) ? ($avg / $total * 100) : 0;
                if ($pct >= 90) $grade_letter = 'A+';
                elseif ($pct >= 80) $grade_letter = 'A';
                elseif ($pct >= 70) $grade_letter = 'B';
                elseif ($pct >= 60) $grade_letter = 'C';
                elseif ($pct >= 50) $grade_letter = 'D';
                else $grade_letter = 'F';
            }

            $teacher_name = '';
            if (!empty($sub['teacher_id'])) {
                $t = $this->db->get_where('teacher', ['teacher_id' => $sub['teacher_id']])->row();
                $teacher_name = $t ? $t->name : '';
            }

            $result[] = [
                'subject'      => $sub['name'],
                'teacher'      => $teacher_name,
                'last_score'   => $last_score,
                'mark_total'   => $total,
                'average'      => $avg,
                'grade'        => $grade_letter,
            ];
        }
        $this->json($result);
    }

    public function parent_attendance() {
        $this->requireSession('parent_login');
        $parent_id  = $this->session->userdata('parent_id');
        $student_id = $this->input->get('student_id');

        if (!$student_id) {
            $child = $this->db->get_where('student', ['parent_id' => $parent_id])->row();
            $student_id = $child ? $child->student_id : 0;
        }

        $check = $this->db->get_where('student', ['student_id' => $student_id, 'parent_id' => $parent_id])->num_rows();
        if (!$check) $this->json(['error' => 'Forbidden'], 403);

        // Last 35 days attendance
        $days_ago = strtotime('-35 days');
        $this->db->where('student_id', $student_id);
        $this->db->where('timestamp >=', $days_ago);
        $records = $this->db->get('attendance')->result_array();

        $result = [];
        foreach ($records as $r) {
            $result[] = [
                'date'   => date('Y-m-d', $r['timestamp']),
                'status' => (int)$r['status'], // 1=present, 0=absent, 2=late
            ];
        }
        $this->json($result);
    }

    public function parent_fees() {
        $this->requireSession('parent_login');
        $parent_id  = $this->session->userdata('parent_id');
        $student_id = $this->input->get('student_id');

        if (!$student_id) {
            $child = $this->db->get_where('student', ['parent_id' => $parent_id])->row();
            $student_id = $child ? $child->student_id : 0;
        }

        $check = $this->db->get_where('student', ['student_id' => $student_id, 'parent_id' => $parent_id])->num_rows();
        if (!$check) $this->json(['error' => 'Forbidden'], 403);

        $invoices = $this->db->get_where('invoice', ['student_id' => $student_id])->result_array();
        $result = [];
        foreach ($invoices as $inv) {
            $result[] = [
                'invoice_id'   => $inv['invoice_id'],
                'title'        => $inv['title'],
                'amount'       => $inv['amount'],
                'amount_paid'  => $inv['amount_paid'],
                'due'          => $inv['due'],
                'status'       => $inv['status'],
                'date'         => $inv['creation_timestamp'] ? date('Y-m-d', $inv['creation_timestamp']) : '',
            ];
        }
        $this->json($result);
    }

    public function parent_stats() {
        $this->requireSession('parent_login');
        $parent_id    = $this->session->userdata('parent_id');
        $student_id   = $this->input->get('student_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        if (!$student_id) {
            $child = $this->db->get_where('student', ['parent_id' => $parent_id])->row();
            $student_id = $child ? $child->student_id : 0;
        }

        // Attendance rate
        $att_total   = $this->db->get_where('attendance', ['student_id' => $student_id, 'year' => $running_year])->num_rows();
        $att_present = $this->db->get_where('attendance', ['student_id' => $student_id, 'year' => $running_year, 'status' => 1])->num_rows();
        $att_rate = $att_total > 0 ? round(($att_present / $att_total) * 100, 1) : 100;

        // GPA (avg mark %)
        $marks = $this->db->get_where('mark', ['student_id' => $student_id, 'year' => $running_year])->result_array();
        $gpa = 0;
        if (count($marks)) {
            $pct_sum = 0;
            foreach ($marks as $m) {
                $pct_sum += ($m['mark_total'] > 0) ? ($m['mark_obtained'] / $m['mark_total'] * 4.0) : 0;
            }
            $gpa = round($pct_sum / count($marks), 2);
        }

        // Unpaid fees
        $this->db->where('student_id', $student_id);
        $this->db->where('status !=', 'paid');
        $unpaid = $this->db->get('invoice')->num_rows();

        // Unread messages (parent-* in message_thread)
        $current_user = 'parent-' . $parent_id;
        $unread = $this->db->where('message_thread_code IN (SELECT message_thread_code FROM message_thread WHERE reciever = "' . $current_user . '")')
                           ->where('sender !=', $current_user)
                           ->where('read_status', 0)
                           ->count_all_results('message');

        $this->json([
            'gpa'          => $gpa,
            'attendance'   => $att_rate,
            'unpaid_fees'  => $unpaid,
            'unread_msgs'  => $unread,
        ]);
    }

    // ─────────────────────────────────────────────────────────
    // TEACHER
    // ─────────────────────────────────────────────────────────

    public function teacher_stats() {
        $this->requireSession('teacher_login');
        $teacher_id   = $this->session->userdata('teacher_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        // Classes taught
        $classes = $this->db->get_where('subject', ['teacher_id' => $teacher_id])->result_array();
        $class_ids = array_unique(array_column($classes, 'class_id'));

        // Students in those classes
        $student_count = 0;
        foreach ($class_ids as $cid) {
            $student_count += $this->db->get_where('enroll', ['class_id' => $cid, 'year' => $running_year])->num_rows();
        }

        // Average mark across teacher's subjects
        $subject_ids = array_column($classes, 'subject_id');
        $avg_score = 0;
        if (count($subject_ids)) {
            $this->db->where_in('subject_id', $subject_ids);
            $this->db->where('year', $running_year);
            $marks = $this->db->get('mark')->result_array();
            if (count($marks)) {
                $avg_score = round(array_sum(array_column($marks, 'mark_obtained')) / count($marks), 1);
            }
        }

        $this->json([
            'student_count' => $student_count,
            'avg_score'     => $avg_score,
            'class_count'   => count($class_ids),
            'subject_count' => count($classes),
        ]);
    }

    public function teacher_students() {
        $this->requireSession('teacher_login');
        $teacher_id   = $this->session->userdata('teacher_id');
        $class_id     = $this->input->get('class_id');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        if (!$class_id) {
            $sub = $this->db->get_where('subject', ['teacher_id' => $teacher_id])->row();
            $class_id = $sub ? $sub->class_id : 0;
        }

        $enrolls = $this->db->get_where('enroll', ['class_id' => $class_id, 'year' => $running_year])->result_array();
        $result = [];
        foreach ($enrolls as $e) {
            $s = $this->db->get_where('student', ['student_id' => $e['student_id']])->row();
            if (!$s) continue;
            $marks = $this->db->get_where('mark', ['student_id' => $e['student_id'], 'year' => $running_year])->result_array();
            $avg = count($marks) ? round(array_sum(array_column($marks, 'mark_obtained')) / count($marks), 1) : 0;
            $result[] = [
                'student_id' => $s->student_id,
                'name'       => $s->name,
                'roll'       => $e['roll'],
                'avg_score'  => $avg,
            ];
        }
        $this->json($result);
    }

    public function teacher_classes() {
        $this->requireSession('teacher_login');
        $teacher_id = $this->session->userdata('teacher_id');
        $subjects   = $this->db->get_where('subject', ['teacher_id' => $teacher_id])->result_array();
        $result = [];
        foreach ($subjects as $sub) {
            $class = $this->db->get_where('class', ['class_id' => $sub['class_id']])->row();
            $result[] = [
                'subject_id'   => $sub['subject_id'],
                'subject_name' => $sub['name'],
                'class_id'     => $sub['class_id'],
                'class_name'   => $class ? $class->name : '',
            ];
        }
        $this->json($result);
    }

    // ─────────────────────────────────────────────────────────
    // ADMIN
    // ─────────────────────────────────────────────────────────

    public function admin_stats() {
        $this->requireSession('admin_login');
        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row() ? $this->db->get_where('settings', array('type' => 'running_year'))->row()->description : date('Y');

        $total_students  = $this->db->count_all('student');
        $total_teachers  = $this->db->count_all('teacher');
        $total_parents   = $this->db->count_all('parent');
        $total_users     = $total_students + $total_teachers + $total_parents;

        // Revenue (paid invoices)
        $this->db->where('status', 'paid');
        $paid = $this->db->get('invoice')->result_array();
        $revenue = array_sum(array_column($paid, 'amount_paid'));

        // Attendance rate this year
        $att_total   = $this->db->get_where('attendance', ['year' => $running_year])->num_rows();
        $att_present = $this->db->get_where('attendance', ['year' => $running_year, 'status' => 1])->num_rows();
        $att_rate = $att_total > 0 ? round(($att_present / $att_total) * 100, 1) : 100;

        $this->json([
            'total_students' => $total_students,
            'total_teachers' => $total_teachers,
            'total_parents'  => $total_parents,
            'total_users'    => $total_users,
            'revenue'        => $revenue,
            'attendance'     => $att_rate,
        ]);
    }

    public function admin_users() {
        $this->requireSession('admin_login');
        $page  = max(1, (int)$this->input->get('page'));
        $limit = 20;
        $offset = ($page - 1) * $limit;

        $this->db->limit($limit, $offset);
        $students = $this->db->get('student')->result_array();
        $result = array_map(function($s) {
            return [
                'id'    => $s['student_id'],
                'name'  => $s['name'],
                'email' => $s['email'],
                'role'  => 'student',
            ];
        }, $students);

        $this->json([
            'users' => $result,
            'total' => $this->db->count_all('student'),
            'page'  => $page,
        ]);
    }

    public function admin_users_all() {
        $this->requireSession('admin_login');
        $users = [];
        foreach ($this->db->get('student')->result_array() as $r)
            $users[] = ['id'=>'s'.$r['student_id'],'name'=>$r['name'],'email'=>$r['email'],'phone'=>$r['phone']??'','role'=>'Student','status'=>'Active','joined'=>''];
        foreach ($this->db->get('teacher')->result_array() as $r)
            $users[] = ['id'=>'t'.$r['teacher_id'],'name'=>$r['name'],'email'=>$r['email'],'phone'=>$r['phone']??'','role'=>'Teacher','status'=>'Active','joined'=>''];
        foreach ($this->db->get('parent')->result_array() as $r)
            $users[] = ['id'=>'p'.$r['parent_id'],'name'=>$r['name'],'email'=>$r['email'],'phone'=>$r['phone']??'','role'=>'Parent','status'=>'Active','joined'=>''];
        foreach ($this->db->get('admin')->result_array() as $r)
            $users[] = ['id'=>'a'.$r['admin_id'],'name'=>$r['name'],'email'=>$r['email'],'phone'=>$r['phone']??'','role'=>'Admin','status'=>'Active','joined'=>''];
        $this->json(['users'=>$users,'total'=>count($users)]);
    }

    public function admin_create_user() {
        $this->requireSession('admin_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') $this->json(['error'=>'POST required'],405);
        $name  = trim($this->input->post('name'));
        $email = trim($this->input->post('email'));
        $pass  = $this->input->post('password');
        $role  = strtolower($this->input->post('role'));
        $phone = trim($this->input->post('phone'));
        if (!$name || !$email || !$pass || !$role) $this->json(['error'=>'All fields required'],400);
        $table_map = ['student'=>'student','teacher'=>'teacher','parent'=>'parent','admin'=>'admin'];
        $table = $table_map[$role] ?? null;
        if (!$table) $this->json(['error'=>'Invalid role'],400);
        if ($this->db->get_where($table,['email'=>$email])->num_rows()>0)
            $this->json(['error'=>'Email already exists'],409);
        $this->db->insert($table,['name'=>$name,'email'=>$email,'password'=>sha1($pass),'phone'=>$phone]);
        $this->json(['success'=>true,'name'=>$name,'role'=>$role]);
    }

    public function admin_update_user() {
        $this->requireSession('admin_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') $this->json(['error'=>'POST required'],405);
        $uid   = $this->input->post('id');       // e.g. "s5", "t3"
        $name  = trim($this->input->post('name'));
        $email = trim($this->input->post('email'));
        $role  = strtolower($this->input->post('role'));
        $status= $this->input->post('status');
        if (!$uid || !$name || !$email) $this->json(['error'=>'Missing fields'],400);
        $prefix = $uid[0]; $id = substr($uid,1);
        $tmap = ['s'=>'student','t'=>'teacher','p'=>'parent','a'=>'admin'];
        $idmap= ['s'=>'student_id','t'=>'teacher_id','p'=>'parent_id','a'=>'admin_id'];
        $table = $tmap[$prefix] ?? null;
        if (!$table) $this->json(['error'=>'Unknown user type'],400);
        $this->db->where($idmap[$prefix],$id)->update($table,['name'=>$name,'email'=>$email]);
        $this->json(['success'=>true]);
    }

    public function admin_delete_user() {
        $this->requireSession('admin_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') $this->json(['error'=>'POST required'],405);
        $uid = $this->input->post('id');
        if (!$uid) $this->json(['error'=>'Missing id'],400);
        $prefix = $uid[0]; $id = substr($uid,1);
        $tmap = ['s'=>'student','t'=>'teacher','p'=>'parent','a'=>'admin'];
        $idmap= ['s'=>'student_id','t'=>'teacher_id','p'=>'parent_id','a'=>'admin_id'];
        $table = $tmap[$prefix] ?? null;
        if (!$table) $this->json(['error'=>'Unknown user type'],400);
        $this->db->where($idmap[$prefix],$id)->delete($table);
        $this->json(['success'=>true]);
    }

    public function admin_create_student() {
        $this->requireSession('admin_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            $this->json(['error' => 'Method not allowed'], 405);

        $this->load->helper('user_validation');

        $name     = $this->input->post('name');
        $email    = $this->input->post('email');
        $password = $this->input->post('password');
        $phone    = $this->input->post('phone');

        if (!$name || !$email || !$password)
            $this->json(['error' => 'Name, email and password are required'], 400);

        if (email_validation($email) != 1)
            $this->json(['error' => 'That email is already used by another account'], 409);

        $running_year = $this->db->get_where('settings', ['type' => 'running_year'])->row();
        $year = $running_year ? $running_year->description : date('Y');

        $data = [
            'name'     => htmlspecialchars($name),
            'email'    => htmlspecialchars($email),
            'password' => sha1($password),
        ];
        if ($phone) $data['phone'] = htmlspecialchars($phone);

        $this->db->insert('student', $data);
        $student_id = $this->db->insert_id();

        // Create enrollment record so student dashboard works
        $this->db->insert('enroll', [
            'student_id'  => $student_id,
            'enroll_code' => substr(md5(rand(0, 1000000)), 0, 7),
            'year'        => $year,
            'date_added'  => strtotime(date('Y-m-d H:i:s')),
        ]);

        $this->json(['success' => true, 'student_id' => $student_id, 'name' => $name]);
    }

    public function admin_activity() {
        $this->requireSession('admin_login');
        // Return recent enrollments as activity feed
        $this->db->order_by('enroll_id', 'DESC');
        $this->db->limit(15);
        $enrolls = $this->db->get('enroll')->result_array();
        $result = [];
        foreach ($enrolls as $e) {
            $s = $this->db->get_where('student', ['student_id' => $e['student_id']])->row();
            $c = $this->db->get_where('class', ['class_id' => $e['class_id']])->row();
            $result[] = [
                'type'    => 'enrollment',
                'message' => ($s ? $s->name : 'Unknown') . ' enrolled in ' . ($c ? $c->name : 'Unknown'),
                'date'    => $e['date_added'],
            ];
        }
        $this->json($result);
    }

    // ── Course Catalog ────────────────────────────────────────────────────────

    /** Public — returns all active lessons from the catalog */
    public function catalog() {
        $catalog = $this->_course_catalog();
        // Check admin overrides (disabled lessons stored in settings)
        $override_row = $this->db->get_where('settings', ['type' => 'disabled_lessons'])->row();
        $disabled = $override_row ? json_decode($override_row->description, true) : [];
        if (!is_array($disabled)) $disabled = [];

        foreach ($catalog as &$lesson) {
            $lesson['active'] = !in_array($lesson['key'], $disabled);
        }
        $this->json($catalog);
    }

    /** Student — sync lesson progress from GitHub Pages localStorage */
    public function student_sync_progress() {
        $this->requireSession('student_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            $this->json(['error' => 'Method not allowed'], 405);

        $student_id = $this->session->userdata('student_id');
        $lessons_json = $this->input->post('lessons');
        $total_xp = (int)$this->input->post('xp');

        if (!$lessons_json)
            $this->json(['error' => 'No progress data'], 400);

        $lessons = json_decode($lessons_json, true);
        if (!is_array($lessons))
            $this->json(['error' => 'Invalid progress data'], 400);

        $this->_ensure_progress_table();

        foreach ($lessons as $key => $data) {
            $completed_at = !empty($data['completedAt']) ? (int)($data['completedAt'] / 1000) : null;
            $xp_earned    = isset($data['xpEarned']) ? (int)$data['xpEarned'] : 0;

            $existing = $this->db->get_where('lesson_progress', [
                'student_id'  => $student_id,
                'lesson_key'  => $key,
            ])->row();

            if ($existing) {
                // Only update if newly completed or higher XP
                if ($completed_at && !$existing->completed_at) {
                    $this->db->update('lesson_progress', [
                        'completed_at' => $completed_at,
                        'xp_earned'    => $xp_earned,
                        'progress_json'=> json_encode($data),
                        'updated_at'   => time(),
                    ], ['student_id' => $student_id, 'lesson_key' => $key]);
                }
            } else {
                $this->db->insert('lesson_progress', [
                    'student_id'   => $student_id,
                    'lesson_key'   => $key,
                    'completed_at' => $completed_at,
                    'xp_earned'    => $xp_earned,
                    'progress_json'=> json_encode($data),
                    'created_at'   => time(),
                    'updated_at'   => time(),
                ]);
            }
        }

        // Update total XP on student record if higher
        $s = $this->db->get_where('student', ['student_id' => $student_id])->row();
        if ($s) {
            $current_xp = isset($s->xp) ? (int)$s->xp : 0;
            if ($total_xp > $current_xp) {
                $this->db->update('student', ['xp' => $total_xp], ['student_id' => $student_id]);
            }
        }

        $this->json(['success' => true, 'synced' => count($lessons)]);
    }

    /** Student — get their lesson progress from DB */
    public function student_progress() {
        $this->requireSession('student_login');
        $student_id = $this->session->userdata('student_id');
        $this->_ensure_progress_table();

        $rows = $this->db->get_where('lesson_progress', ['student_id' => $student_id])->result_array();
        $result = [];
        foreach ($rows as $r) {
            $result[$r['lesson_key']] = [
                'key'          => $r['lesson_key'],
                'completed_at' => $r['completed_at'],
                'xp_earned'    => (int)$r['xp_earned'],
            ];
        }

        $s = $this->db->get_where('student', ['student_id' => $student_id])->row();
        $this->json([
            'lessons'   => $result,
            'total_xp'  => $s && isset($s->xp) ? (int)$s->xp : 0,
        ]);
    }

    /** Teacher — view all students' lesson progress for their classes */
    public function teacher_lesson_progress() {
        $this->requireSession('teacher_login');
        $this->_ensure_progress_table();

        $rows = $this->db->query('
            SELECT lp.student_id, s.name AS student_name, lp.lesson_key,
                   lp.completed_at, lp.xp_earned
            FROM lesson_progress lp
            JOIN student s ON s.student_id = lp.student_id
            ORDER BY s.name, lp.lesson_key
        ')->result_array();

        $this->json($rows);
    }

    /** Admin — get full catalog with active/disabled state + completion counts */
    public function admin_catalog() {
        $this->requireSession('admin_login');
        $this->_ensure_progress_table();

        $catalog = $this->_course_catalog();
        $override_row = $this->db->get_where('settings', ['type' => 'disabled_lessons'])->row();
        $disabled = $override_row ? json_decode($override_row->description, true) : [];
        if (!is_array($disabled)) $disabled = [];

        // Get completion counts per lesson
        $counts = $this->db->query('
            SELECT lesson_key, COUNT(*) AS completions
            FROM lesson_progress
            WHERE completed_at IS NOT NULL
            GROUP BY lesson_key
        ')->result_array();
        $count_map = [];
        foreach ($counts as $c) $count_map[$c['lesson_key']] = (int)$c['completions'];

        foreach ($catalog as &$lesson) {
            $lesson['active']      = !in_array($lesson['key'], $disabled);
            $lesson['completions'] = isset($count_map[$lesson['key']]) ? $count_map[$lesson['key']] : 0;
        }
        $this->json($catalog);
    }

    /** Admin — toggle lessons active/inactive */
    public function admin_catalog_save() {
        $this->requireSession('admin_login');
        if ($_SERVER['REQUEST_METHOD'] !== 'POST')
            $this->json(['error' => 'Method not allowed'], 405);

        $disabled_json = $this->input->post('disabled');
        $disabled = json_decode($disabled_json, true);
        if (!is_array($disabled)) $disabled = [];

        $existing = $this->db->get_where('settings', ['type' => 'disabled_lessons'])->row();
        if ($existing) {
            $this->db->update('settings', ['description' => json_encode($disabled)], ['type' => 'disabled_lessons']);
        } else {
            $this->db->insert('settings', ['type' => 'disabled_lessons', 'description' => json_encode($disabled)]);
        }

        $this->json(['success' => true, 'disabled_count' => count($disabled)]);
    }

    // ─────────────────────────────────────────────────────────
    // ADMIN PORTAL BRIDGE
    // GET /admin_bridge — checks session, patches admin_id, redirects to CI backend
    // ─────────────────────────────────────────────────────────
    public function admin_bridge() {
        // Override the JSON content-type set in __construct so redirect works
        header('Content-Type: text/html', true);

        if ($this->session->userdata('admin_login') != 1) {
            header('Location: ' . base_url('login.html'));
            exit;
        }
        // Ensure admin_id is set (CI admin views expect it)
        if (!$this->session->userdata('admin_id')) {
            $admin = $this->db->get('admin')->row();
            if ($admin) {
                $this->session->set_userdata('admin_id', $admin->admin_id);
            }
        }
        // Re-affirm admin_login as string '1' (same as Login::validate_login)
        $this->session->set_userdata('admin_login', '1');
        header('Location: ' . site_url('admin/student_information'));
        exit;
    }

    // ── Private helpers ───────────────────────────────────────────────────────

    /** Full lesson catalog with metadata and GitHub Pages URLs */
    private function _course_catalog() {
        $base = 'https://pgator82.github.io/mindstrong-universe-site/school/foundations/';
        return [
            // Module 1 — Number Sense
            ['key'=>'m1-l1','module'=>'module-1','lesson_num'=>1,'title'=>'Numbers Are Stories',          'subject'=>'Number Sense','url'=>$base.'module-1/lesson-1.html','color'=>'#a855f7','icon'=>'🔢'],
            ['key'=>'m1-l2','module'=>'module-1','lesson_num'=>2,'title'=>'Place Value Is a Volume Knob', 'subject'=>'Number Sense','url'=>$base.'module-1/lesson-2.html','color'=>'#a855f7','icon'=>'🎚️'],
            ['key'=>'m1-l3','module'=>'module-1','lesson_num'=>3,'title'=>'Expanded Form',                'subject'=>'Number Sense','url'=>$base.'module-1/lesson-3.html','color'=>'#a855f7','icon'=>'📐'],
            ['key'=>'m1-l4','module'=>'module-1','lesson_num'=>4,'title'=>'Compare Without Guessing',     'subject'=>'Number Sense','url'=>$base.'module-1/lesson-4.html','color'=>'#a855f7','icon'=>'⚖️'],
            ['key'=>'m1-l5','module'=>'module-1','lesson_num'=>5,'title'=>'Rounding That Makes Sense',    'subject'=>'Number Sense','url'=>$base.'module-1/lesson-5.html','color'=>'#a855f7','icon'=>'🎯'],
            ['key'=>'m1-l6','module'=>'module-1','lesson_num'=>6,'title'=>'Estimation as a Superpower',   'subject'=>'Number Sense','url'=>$base.'module-1/lesson-6.html','color'=>'#a855f7','icon'=>'⚡'],
            // Geometry
            ['key'=>'geo-angles',    'module'=>'geometry','lesson_num'=>1,'title'=>'Angles & Lines',             'subject'=>'Geometry','url'=>$base.'geometry/angles/','color'=>'#06b6d4','icon'=>'📐'],
            ['key'=>'geo-area',      'module'=>'geometry','lesson_num'=>2,'title'=>'Perimeter & Area',            'subject'=>'Geometry','url'=>$base.'geometry/area/','color'=>'#06b6d4','icon'=>'📏'],
            ['key'=>'geo-circles',   'module'=>'geometry','lesson_num'=>3,'title'=>'Circles — π Unlocked',        'subject'=>'Geometry','url'=>$base.'geometry/circles/','color'=>'#06b6d4','icon'=>'⭕'],
            ['key'=>'geo-coordinate','module'=>'geometry','lesson_num'=>4,'title'=>'The Coordinate Plane',         'subject'=>'Geometry','url'=>$base.'geometry/coordinate/','color'=>'#06b6d4','icon'=>'🗺️'],
            ['key'=>'geo-polygons',  'module'=>'geometry','lesson_num'=>5,'title'=>'Quadrilaterals & Polygons',    'subject'=>'Geometry','url'=>$base.'geometry/polygons/','color'=>'#06b6d4','icon'=>'🔷'],
            ['key'=>'geo-triangles', 'module'=>'geometry','lesson_num'=>6,'title'=>'Triangles',                    'subject'=>'Geometry','url'=>$base.'geometry/triangles/','color'=>'#06b6d4','icon'=>'🔺'],
            // Pre-Algebra
            ['key'=>'geo-equations',  'module'=>'pre-algebra','lesson_num'=>1,'title'=>'Equations',   'subject'=>'Pre-Algebra','url'=>$base.'pre-algebra/equations/','color'=>'#10b981','icon'=>'🟰'],
            ['key'=>'geo-expressions','module'=>'pre-algebra','lesson_num'=>2,'title'=>'Expressions', 'subject'=>'Pre-Algebra','url'=>$base.'pre-algebra/expressions/','color'=>'#10b981','icon'=>'✏️'],
            ['key'=>'geo-percents',   'module'=>'pre-algebra','lesson_num'=>3,'title'=>'Percents',     'subject'=>'Pre-Algebra','url'=>$base.'pre-algebra/percents/','color'=>'#10b981','icon'=>'💯'],
            ['key'=>'geo-proportions','module'=>'pre-algebra','lesson_num'=>4,'title'=>'Proportions',  'subject'=>'Pre-Algebra','url'=>$base.'pre-algebra/proportions/','color'=>'#10b981','icon'=>'⚖️'],
            // Ratio
            ['key'=>'geo-ratios','module'=>'ratio','lesson_num'=>1,'title'=>'Ratios','subject'=>'Ratios','url'=>$base.'ratio/','color'=>'#f59e0b','icon'=>'🔀'],
        ];
    }

    /** Auto-create lesson_progress table if it doesn't exist */
    private function _ensure_progress_table() {
        $this->db->query('CREATE TABLE IF NOT EXISTS lesson_progress (
            id           INT AUTO_INCREMENT PRIMARY KEY,
            student_id   INT NOT NULL,
            lesson_key   VARCHAR(64) NOT NULL,
            completed_at INT DEFAULT NULL,
            xp_earned    INT DEFAULT 0,
            progress_json TEXT,
            created_at   INT NOT NULL,
            updated_at   INT NOT NULL,
            UNIQUE KEY uq_student_lesson (student_id, lesson_key),
            KEY idx_lesson_key (lesson_key)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
    }

    // ─────────────────────────────────────────────────────────
    // ONE-TIME FOUNDATIONS IMPORT (no auth required)
    // GET /api/seed_foundations
    // ─────────────────────────────────────────────────────────
    public function seed_foundations() {
        $year = date('Y');
        $row = $this->db->get_where('settings', ['type' => 'running_year'])->row();
        if ($row) $year = $row->description;

        $catalog = [
            'Number Sense' => ['1', [
                'Numbers Are Stories','Place Value Is a Volume Knob','Expanded Form',
                'Compare Without Guessing','Rounding That Makes Sense','Estimation as a Superpower'
            ]],
            'Geometry' => ['2', [
                'Angles & Lines','Perimeter & Area','Circles — π Unlocked',
                'The Coordinate Plane','Quadrilaterals & Polygons','Triangles'
            ]],
            'Pre-Algebra' => ['3', [
                'Equations','Expressions','Percents','Proportions'
            ]],
            'Ratios' => ['4', ['Ratios']],
        ];

        $cc = 0; $cs = 0;
        foreach ($catalog as $cname => $info) {
            $existing = $this->db->get_where('class', ['name' => $cname])->row();
            if ($existing) {
                $class_id = $existing->class_id;
            } else {
                $this->db->insert('class', ['name' => $cname, 'name_numeric' => $info[0], 'teacher_id' => null]);
                $class_id = $this->db->insert_id();
                $this->db->insert('section', ['class_id' => $class_id, 'name' => 'A', 'teacher_id' => null]);
                $cc++;
            }
            foreach ($info[1] as $title) {
                if (!$this->db->get_where('subject', ['name' => $title, 'class_id' => $class_id])->row()) {
                    $this->db->insert('subject', ['name' => $title, 'class_id' => $class_id, 'teacher_id' => null, 'year' => $year]);
                    $cs++;
                }
            }
        }

        $this->json(['ok' => true, 'classes_added' => $cc, 'lessons_added' => $cs,
            'message' => "$cc courses and $cs lessons imported."]);
    }

}
<?php // cache-bust: 1774138890
