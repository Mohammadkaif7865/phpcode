<?php $page ='home';
	session_start();
	if(isset($_POST['next'])){
		$_SESSION['accident'] = $_POST['accident'];
		header("Location: form-step2.php");
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
							<div class="inlineProgress"><p class="title">Find out in less than 30 seconds</p><p class="title">Step 1/5</p></div>
							<div class="progress hideOnSubmit">
					          <div aria-valuemax="6" aria-valuemin="1" aria-valuenow="1" class="progress-bar progress-bar-success" role="progressbar" style="width: 20%;">
					          </div>
					      </div>
							<form method="post" action="">
								<div class="formStep">
									<h2 class="heading fontWeight600 text-center mt-lg-5">Whose fault was the accident?</h2>
									<div class="row">
										<div class="col-lg-8 offset-lg-2 px-lg-0">
											<p class="title text-center mt-3 textGrey">Select an option below</p>
										</div>
									</div>
									<div class="mt-4">
										<div class="checkBox">
											<ul>
												<li>
													<input type="radio" checked name="accident" id="my_fault" value="My Fault">
													<label for="my_fault">
														<p class="fontWeight500">My Fault</p>
													</label>
												</li>
												<li>
													<input type="radio" name="accident" id="somebody_else" value="Somebody Else">
													<label for="somebody_else">
														<p class="fontWeight500">Somebody Else</p>
													</label>
												</li>
												<li>
													<input type="radio" value="50/50" name="accident" id="half">
													<label for="half">
														<p class="fontWeight500">50/50</p>
													</label>
												</li>
												<li>
													<input type="radio" name="accident" id="not_sure" value="Not Sure">
													<label for="not_sure">
														<p class="fontWeight500">Not Sure</p>
													</label>
												</li>
											</ul>
										</div>
										<div class="mt-4 text-center">
											<button type="submit" name="next" class="btnTheme mt-4 btnShadow">Next <i class="fa fa-chevron-right"></i></button>
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