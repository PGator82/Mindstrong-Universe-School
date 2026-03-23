-- ============================================================
-- MindStrong Universe — Migration 001: Add Indexes
-- Run this once against the live Railway database via Adminer.
-- Safe to run: IF NOT EXISTS guards the table; index errors
-- ("Duplicate key name") can be ignored — they mean the index
-- is already there.
-- ============================================================

-- ── 1. Ensure superadmin table exists (won't overwrite if present) ──

CREATE TABLE IF NOT EXISTS `superadmin` (
  `superadmin_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` longtext COLLATE utf8_unicode_ci NOT NULL,
  `email` longtext COLLATE utf8_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`superadmin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- If your superadmin row is missing, uncomment and fill in the correct SHA1 hash:
-- INSERT IGNORE INTO `superadmin` (`superadmin_id`, `name`, `email`, `password`)
-- VALUES (1, 'MindStrong Corp', 'mindstrongcorp@gmail.com', 'YOUR_SHA1_HASH_HERE');


-- ── 2. Auth table email indexes ──

ALTER TABLE `admin`
  ADD KEY `admin_email_idx` (`email`(191));

ALTER TABLE `student`
  ADD KEY `student_email_idx` (`email`(191));

ALTER TABLE `teacher`
  ADD KEY `teacher_email_idx` (`email`(191));

ALTER TABLE `parent`
  ADD KEY `parent_email_idx` (`email`(191));

ALTER TABLE `librarian`
  ADD KEY `librarian_email_idx` (`email`(191));

ALTER TABLE `accountant`
  ADD KEY `accountant_email_idx` (`email`(191));


-- ── 3. Student relationships ──

ALTER TABLE `student`
  ADD KEY `student_parent_idx` (`parent_id`);


-- ── 4. Attendance ──

ALTER TABLE `attendance`
  ADD KEY `attendance_student_idx` (`student_id`),
  ADD KEY `attendance_class_idx` (`class_id`),
  ADD KEY `attendance_section_idx` (`section_id`);


-- ── 5. Marks / grades ──

ALTER TABLE `mark`
  ADD KEY `mark_student_idx` (`student_id`),
  ADD KEY `mark_class_idx` (`class_id`),
  ADD KEY `mark_subject_idx` (`subject_id`),
  ADD KEY `mark_exam_idx` (`exam_id`),
  ADD KEY `mark_student_exam_idx` (`student_id`, `exam_id`);


-- ── 6. Enrollment ──

ALTER TABLE `enroll`
  ADD KEY `enroll_student_idx` (`student_id`),
  ADD KEY `enroll_class_idx` (`class_id`),
  ADD KEY `enroll_section_idx` (`section_id`);


-- ── 7. Class & schedule ──

ALTER TABLE `class`
  ADD KEY `class_teacher_idx` (`teacher_id`);

ALTER TABLE `class_routine`
  ADD KEY `class_routine_class_idx` (`class_id`),
  ADD KEY `class_routine_section_idx` (`section_id`),
  ADD KEY `class_routine_subject_idx` (`subject_id`);

ALTER TABLE `section`
  ADD KEY `section_class_idx` (`class_id`),
  ADD KEY `section_teacher_idx` (`teacher_id`);

ALTER TABLE `subject`
  ADD KEY `subject_class_idx` (`class_id`),
  ADD KEY `subject_teacher_idx` (`teacher_id`);


-- ── 8. Finances ──

ALTER TABLE `invoice`
  ADD KEY `invoice_student_idx` (`student_id`);

ALTER TABLE `payment`
  ADD KEY `payment_student_idx` (`student_id`),
  ADD KEY `payment_invoice_idx` (`invoice_id`);


-- ── 9. Online exams ──

ALTER TABLE `online_exam`
  ADD KEY `online_exam_class_idx` (`class_id`),
  ADD KEY `online_exam_section_idx` (`section_id`),
  ADD KEY `online_exam_subject_idx` (`subject_id`);

ALTER TABLE `online_exam_result`
  ADD KEY `online_exam_result_student_idx` (`student_id`),
  ADD KEY `online_exam_result_exam_idx` (`online_exam_id`);

ALTER TABLE `question_bank`
  ADD KEY `question_bank_exam_idx` (`online_exam_id`);

ALTER TABLE `question_paper`
  ADD KEY `question_paper_class_idx` (`class_id`),
  ADD KEY `question_paper_exam_idx` (`exam_id`),
  ADD KEY `question_paper_teacher_idx` (`teacher_id`);


-- ── 10. Library ──

ALTER TABLE `book_request`
  ADD KEY `book_request_student_idx` (`student_id`),
  ADD KEY `book_request_book_idx` (`book_id`);


-- ── 11. Documents & syllabus ──

ALTER TABLE `document`
  ADD KEY `document_teacher_idx` (`teacher_id`),
  ADD KEY `document_subject_idx` (`subject_id`);

ALTER TABLE `academic_syllabus`
  ADD KEY `academic_syllabus_class_idx` (`class_id`),
  ADD KEY `academic_syllabus_subject_idx` (`subject_id`);


-- ── Done ──
-- Total new indexes: 35
-- "Duplicate key name" errors = index already exists, safe to ignore.
