<header class="header">
	<div class="containerFull">
		<div class="inlineHeader">
			<div class="d-flex align-items-center">
				<button class="btnMenu me-3 d-none d-lg-block"><i class="fa fa-bars"></i></button>
				<div class="leftLogo me-lg-5">
					<a href="index.php">
						<img src="images/logo.png" class="mobileDefault">
						<img src="images/logo.webp" class="mobileSticky">
					</a>
				</div>
			</div>
			<div class="premierPartner d-none d-lg-block">
			    <div class="topPremier">
			        <p>Premier Partner</p>
			    </div>
			    <div class="bodyPremier">
			        <picture>
			            <source srcset="images/google-logo-new.webp" type="image/webp"/>
			            <img src="images/google-logo-new.png" alt="Preimier Partner"/>
			        </picture>
			    </div>
			</div>
			<div class="d-flex align-items-center">
			<a href="tel:+91 8850 525860" class="headerPhone d-none d-lg-block me-3"><i class="fa fa-phone-alt"></i> +91 8850 525860</a>
			<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal" class="headerBtn d-none d-lg-block">Request a Quote <span><i class="fa fa-arrow-right"></i></span></a>
			<a href="mailto:contact@sibinfotech.com" class="headerPhone d-block d-lg-none me-3"><i class="fa fa-envelope"></i></a>
			<button class="btnMenu d-block d-lg-none"><i class="fa fa-bars"></i></button>
		</div>
	</div>
	<div class="mobileMenu">
		<div class="d-flex justify-content-end">
			<button class="btnClose"><i class="fa fa-times"></i></button>
		</div>
		<ul>
			<li><a href="#about">About Us</a></li>
			<li><a href="#services">Services</a></li>
			<li><a href="#reviews">Customer Reviews</a></li>
			<li><a href="#contact">Contact Us</a></li>
		</ul>
		<a href="tel:+91 8850 525860" class="headerPhone mt-3"><i class="fa fa-phone-alt"></i> +91 8850 525860</a>
		<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal" class="headerBtn mt-3">Schedule a meeting now <span><i class="fa fa-arrow-right"></i></span></a>
		<div class="socialHeader2">
			<p class="title fontHeading fontWeight500">Follow Us</p>
			<ul>
				<li data-bs-toggle="tooltip" data-bs-placement="top" title="Facebook"><a target="_blank" href="https://www.facebook.com/sibinfotech/"><i class="fab fa-facebook-f"></i></a></li>
				<li data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><a target="_blank" href="https://twitter.com/sibinfotech"><i class="fab fa-twitter"></i></a></li>
				<li data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"><a target="_blank" href="https://www.linkedin.com/company/sib-infotech"><i class="fab fa-linkedin-in"></i></a></li>
				<li data-bs-toggle="tooltip" data-bs-placement="top" title="Youtube"><a target="_blank" href="https://www.youtube.com/user/sibinfotech"><i class="fab fa-youtube"></i></a></li>
			</ul>
		</div>
		<div class="row">
		    <div class="col-8">
		      <div class="premierPartner mt-3">
            	    <div class="topPremier">
            	        <p>Premier Partner</p>
            	    </div>
            	    <div class="bodyPremier">
            	        <picture>
            	            <source srcset="images/google-logo-new.webp" type="image/webp"/>
            	            <img src="images/google-logo-new.png" alt="Preimier Partner"/>
            	        </picture>
            	    </div>
            	</div>  
		    </div>
		</div>
	</div>
</header>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title fontWeight700 fontHeading " id="exampleModalLabel">Ready to boost your leads?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body pt-0">
        <div class="rightBannerForm p-0 mt-0">
			<form method="post" action="email.php">
				<div class="formItem">
					<div class="form-floating">
					    <input type="hidden" required name="hidden"/>
					  <input type="text" name="name" class="form-control" id="name" placeholder="contact person name">
					  <label for="name">Full Name</label>
					</div>
				</div>
				<div class="formItem">
					<div class="form-floating">
					  <input type="text" required name="company" class="form-control" id="company" placeholder="company name">
					  <label for="company">Company Name</label>
					</div>
				</div>
				<div class="formItem">
					<div class="form-floating">
					  <input type="text" required name="website" class="form-control" id="website" placeholder="website">
					  <label for="website">Website url</label>
					</div>
				</div>
				<div class="formItem">
					<div class="form-floating">
					  <input type="email" required name="email" class="form-control" id="email" placeholder="email">
					  <label for="email">Email</label>
					</div>
				</div>
				<div class="formItem">
					<div class="form-floating mb-3">
					  <input type="tel" name="phone" class="form-control" id="phone" placeholder="phone number">
					  <label for="phone">Phone Number</label>
					</div>
				</div>
				<div class="text-center">
					<button type="submit" name="submit" class="btnForm fontWeight700 w-100">Send Request</button>
				</div>
			</form>
		</div>
      </div>
    </div>
  </div>
</div>