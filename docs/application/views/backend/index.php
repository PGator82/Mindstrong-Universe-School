<?php
	if (!function_exists('mindstrong_setting_value')) {
		function mindstrong_setting_value($ci, $type, $default = '')
		{
			$query = $ci->db->get_where('settings', array('type' => $type));
			if (is_object($query)) {
				$row = $query->row();
				if ($row && isset($row->description) && $row->description !== NULL) {
					return $row->description;
				}
			}
			return $default;
		}
	}

	$system_name        = mindstrong_setting_value($this, 'system_name', 'Mindstrong Universe School');
	//$system_title       = mindstrong_setting_value($this, 'system_title', 'School Management System');
	$text_align         = mindstrong_setting_value($this, 'text_align', 'left-to-right');
	$account_type       = $this->session->userdata('login_type');
	$account_type_id	= $this->session->userdata('login_user_id');
	$skin_colour        = mindstrong_setting_value($this, 'skin_colour', '');
	$active_sms_service = mindstrong_setting_value($this, 'active_sms_service', 'disabled');
	$running_year 		= mindstrong_setting_value($this, 'running_year', date('Y').'-'.(date('Y')+1));
	?>
<!DOCTYPE html>
<html lang="en" dir="<?php if ($text_align == 'right-to-left') echo 'rtl';?>">
<head>

	<title><?php echo $page_title;?> | <?php echo $system_name;?></title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Ekattor School Manager Pro - Creativeitem" />
	<meta name="author" content="Creativeitem" />



	<?php include 'includes_top.php';?>

</head>
<body class="page-body <?php if ($skin_colour != '') echo 'skin-' . $skin_colour;?>" >
	<div class="page-container <?php if ($text_align == 'right-to-left') echo 'right-sidebar';?>
		" >
		<?php include $account_type.'/navigation.php';?>
		<div class="main-content">

			<?php include 'header.php';?>

           <h3 style="margin:20px 0px;">
           	<i class="entypo-right-circled"></i>
				<?php echo $page_title;?>
           </h3>

			<?php include $account_type.'/'.$page_name.'.php';?>

			<?php include 'footer.php';?>

		</div>

	</div>
    <?php include 'modal.php';?>
    <?php include 'includes_bottom.php';?>

</body>
</html>
