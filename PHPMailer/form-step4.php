<?php $page ='home';
	session_start();
	if(isset($_POST['next4'])){
		$_SESSION['image'] = $_POST['image'];
		header("Location: form-step5.php");
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
							<div class="inlineProgress"><p class="title">Find out in less than 30 seconds</p><p class="title">Step 4/5</p></div>
							<div class="progress hideOnSubmit">
					          <div aria-valuemax="6" aria-valuemin="1" aria-valuenow="1" class="progress-bar progress-bar-success" role="progressbar" style="width: 80%;">
					          </div>
					      </div>
							<form  method="post" action="">
								<div class="formStep">
									<h2 class="heading fontWeight600 text-center mt-lg-5">Share images of the accident</h2>
									<div class="row">
										<div class="col-lg-8 offset-lg-2 px-lg-0">
											<p class="title text-center mt-3 textGrey">Click or drag files to this area to upload(You can upload up to 10 files)</p>
										</div>
									</div>
									<div class="mt-4">
					                  	<div class="uploadInput">
					                  		<div class="innerInput text-center">
					                  			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M31 4H17.2C16.4 4 15.6 4.4 15 5C14.4 5.6 14 6.4 14 7.2V32.8C14 33.6 14.4 34.4 15 35C15.6 35.6 16.4 36 17.2 36H36.8C37.6 36 38.4 35.6 39 35C39.6 34.4 40 33.6 40 32.8V13L31 4Z" stroke="#575757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M6 15.2V40.7999C6 41.5999 6.4 42.4 7 43C7.6 43.6 8.4 44 9.2 44H28.8" stroke="#575757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M30 4V14H40" stroke="#575757" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
												<p class="title text-center textGrey mt-3">Browse Files</p>
												<input type="file" name="image">
					                  		</div>
					                  	</div>
										<div class="mt-4 d-flex justify-content-between">
											<a href="form-step3.php" class="previousBtn"><i class="fa fa-chevron-left"></i> Previous</a>
											<button type="submit" name="next4" class="btnTheme mt-4 btnShadow">Next <i class="fa fa-chevron-right"></i></button>
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