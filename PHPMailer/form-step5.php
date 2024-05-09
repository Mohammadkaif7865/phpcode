<?php $page ='home';
	session_start();
	if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $registration_number = $_POST['registration_number'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $date = $_POST['date'];
	    
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Crashfix | Home</title>
	<meta property="og:url" content="<?php echo $page_url?>">
	<meta property="og:title" content="Crashfix">
	<meta property="og:description" content="">
	<meta property="og:image" content="images/logo.png">
	<meta name="twitter:card" content="">
	<meta name="twitter:site" content="<?php echo $page_url?>">
	<meta name="twitter:title" content="Crashfix">
	<meta name="twitter:description" content="">
	<meta name="twitter:image" content="images/logo.png">
	<?php include'include/head-links.php';?>
	<style type="text/css">
		body{
			background: #F9F7F3;
		}
		.navBlock{
			display: none;
		}
		.headerContact .btnTheme{
			display: none;
		}
		.phoneContact{
			margin-right: 0px;
		}
		.header{
			padding:15px 0;
		}
	</style>
</head>
<body>
	<div class="wrapper">
		<?php include'include/header.php'?>
		<section class="bannerHome">
			<div class="containerFull">
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div id="myWizard">
							<div class="inlineProgress"><p class="title">Find out in less than 30 seconds</p><p class="title">Step 5/5</p></div>
							<div class="progress hideOnSubmit">
					          <div aria-valuemax="6" aria-valuemin="1" aria-valuenow="1" class="progress-bar progress-bar-success" role="progressbar" style="width: 100%;">
					          </div>
					      </div>
							<form  method="post" action="">
								<div class="formStep">
									<h2 class="heading fontWeight600 text-center mt-lg-5">Fill in the form to get solution:</h2>
									<div class="mt-lg-5">		
										<div class="row">			                  	
											<div class="col-lg-6">
												<div class="itemForm">
													<label for="name">Full Name</label>
													<input type="text" id="name" name="name">
												</div>
											</div>
											<div class="col-lg-6">
												<div class="itemForm">
													<label for="registration_number">Car Registration Number</label>
													<input type="text" id="registration_number" name="registration_number">
												</div>
											</div>
											<div class="col-lg-6">
												<div class="itemForm">
													<label for="email">Email Address</label>
													<input type="email" id="email" name="email">
												</div>
											</div>
											<div class="col-lg-6">
												<div class="itemForm">
													<label for="phone">Phone Number</label>
													<input type="tel" id="phone" name="phone">
												</div>
											</div>
											<div class="col-lg-6">
												<div class="itemForm">
													<label for="date">When did the accident happen?</label>
													<input type="date" id="date" name="date">
												</div>
											</div>
										</div>
										<div class="mt-4 d-flex justify-content-between">
											<a href="form-step4.php" class="previousBtn"><i class="fa fa-chevron-left"></i> Previous</a>
											<button type="submit" name="submit" class="btnTheme mt-4 btnShadow">Submit</button>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="formRating text-center">
			            	<h4 class="title fontWeight500"><img src="images/icons/star.png"> REVIEWS<span class="io">.io</span></h4>
							<div class="starRating">
								<div class="leftRating">
									<h3 class="small_heading fontWeight600">4.85<span>/5</span></h3>
								</div>
								<div class="starIcons">
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star-half-alt"></i>
								</div>
							</div>
							<div class="textReview">
								<p>Based on <strong>982</strong> reviews</p>
							</div>
			            </div>
					</div>
				</div>
			</div>
		</section>
		<footer class="footer">
			<div class="containerFull">
				<div class="footerCopyright">
					<div class="inlineFooter">
						<p>© <?php echo date('Y');?> CrashFix — Licensed Insolvency Practitioners.</p>
						<div class="footerRight">
							<ul>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
	<?php include'include/footer-links.php';?>
	<!-- <script type="text/javascript" src="js/simpleform.js"></script>
	<script type="text/javascript">
		$("#stepForm").simpleform({
			speed : 500,
			transition : 'none',
			progressBar : true,
			showProgressText : true,
			validate: false
		});
		$(function(){

		});
	</script> -->
</body>
</html>