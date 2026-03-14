<hr>
<div class="row">
    <div class="col-md-2">
        <a href="<?php echo site_url('admin/dashboard'); ?>" class="btn btn-primary btn-block">
            <?php echo get_phrase('dashboard'); ?>
        </a>
        <a href="<?php echo site_url('admin/student_add'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('add_student'); ?>
        </a>
        <a href="<?php echo site_url('admin/student_information'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('manage_students'); ?>
        </a>
        <a href="<?php echo site_url('admin/teacher'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('manage_teachers'); ?>
        </a>
        <a href="<?php echo site_url('admin/parent'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('manage_parents'); ?>
        </a>
        <a href="<?php echo site_url('admin/classes'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('manage_classes'); ?>
        </a>
        <a href="<?php echo site_url('admin/manage_attendance'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('attendance'); ?>
        </a>
        <a href="<?php echo site_url('admin/frontend_pages'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('frontend_pages'); ?>
        </a>
        <a href="<?php echo site_url('admin/noticeboard'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('noticeboard'); ?>
        </a>
        <a href="<?php echo site_url('admin/manage_profile'); ?>" class="btn btn-default btn-block">
            <?php echo get_phrase('account'); ?>
        </a>
    </div>

    <div class="col-md-10">
        <div class="row">
            <div class="col-md-8 col-xs-12">
                <div class="panel panel-primary" data-collapsed="0">
                    <div class="panel-heading">
                        <div class="panel-title">
                            <i class="fa fa-calendar"></i>
                            <?php echo get_phrase('event_schedule');?>
                        </div>
                    </div>
                    <div class="panel-body" style="padding:0px;">
                        <div class="calendar-env">
                            <div class="calendar-body">
                                <div id="notice_calendar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="tile-stats tile-red">
                    <div class="icon"><i class="fa fa-group"></i></div>
                    <?php $number_of_student_in_current_session = $this->db->get_where('enroll', array('year' => $running_year))->num_rows(); ?>
                    <div class="num" data-start="0" data-end="<?php echo $number_of_student_in_current_session; ?>" data-postfix="" data-duration="1500" data-delay="0">0</div>
                    <h3><?php echo get_phrase('student');?></h3>
                    <p>Total students</p>
                </div>

                <div class="tile-stats tile-green">
                    <div class="icon"><i class="entypo-users"></i></div>
                    <div class="num" data-start="0" data-end="<?php echo $this->db->count_all('teacher');?>" data-postfix="" data-duration="800" data-delay="0">0</div>
                    <h3><?php echo get_phrase('teacher');?></h3>
                    <p>Total teachers</p>
                </div>

                <div class="tile-stats tile-aqua">
                    <div class="icon"><i class="entypo-user"></i></div>
                    <div class="num" data-start="0" data-end="<?php echo $this->db->count_all('parent');?>" data-postfix="" data-duration="500" data-delay="0">0</div>
                    <h3><?php echo get_phrase('parent');?></h3>
                    <p>Total parents</p>
                </div>

                <div class="tile-stats tile-blue">
                    <div class="icon"><i class="entypo-chart-bar"></i></div>
                    <?php
                    $check = array('timestamp' => strtotime(date('Y-m-d')), 'status' => '1');
                    $present_today = $this->db->get_where('attendance', $check)->num_rows();
                    ?>
                    <div class="num" data-start="0" data-end="<?php echo $present_today;?>" data-postfix="" data-duration="500" data-delay="0">0</div>
                    <h3><?php echo get_phrase('attendance');?></h3>
                    <p>Total present student today</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
$(document).ready(function() {
    $('#notice_calendar').fullCalendar({
        header: {
            left: 'title',
            right: 'today prev,next'
        },
        editable: false,
        firstDay: 1,
        height: 530,
        droppable: false,
        events: [
            <?php $notices = $this->db->get('noticeboard')->result_array(); foreach($notices as $row): ?>
            {
                title: "<?php echo $row['notice_title'];?>",
                start: new Date(<?php echo date('Y',$row['create_timestamp']);?>, <?php echo date('m',$row['create_timestamp'])-1;?>, <?php echo date('d',$row['create_timestamp']);?>),
                end: new Date(<?php echo date('Y',$row['create_timestamp']);?>, <?php echo date('m',$row['create_timestamp'])-1;?>, <?php echo date('d',$row['create_timestamp']);?>)
            },
            <?php endforeach ?>
        ]
    });
});
</script>
