<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

    <!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>我要评价</title>
	<meta name="description" content="Free Responsive Html5 Css3 Templates ">
	
	
    <!-- Mobile Specific Metas
	================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- CSS
	================================================== -->
  	<link rel="stylesheet" href="css/zerogrid.css">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/lightbox.css">
	
	<!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

	<link rel="stylesheet" href="css/menu.css">
	<script src="js/jquery1111.min.js" type="text/javascript"></script>
	<script src="js/script.js"></script>

</head>

<body>
<div class="wrap-body">
	<header class="zerogrid">
		<div class="logo">
			<hr class="line-1">
			<a href="#">我要评价</a>
			<span>Lorem ipsum dolor sit amet</span>
			<hr class="line-1">
		</div>
		<div id='cssmenu' class="align-center">

			<ul>
				<li class="active"><a href='z_index.html'><span>今日餐食</span></a></li>
				<li><a href='z_indexTomorrow.html'><span>明日菜单</span></a></li>
				<li><a href='z_stemployee.html'><span>服务员人员评价</span></a></li>
				<li class='last'><a href='#'><span>服务员人员投诉</span></a></li>
			</ul>
		</div>
	</header>
		<!--////////////////////////////////////Container-->
		<section id="container">
			<div class="wrap-container clearfix">
				<div id="main-content">
					<div class="wrap-content zerogrid ">


						<article class="background-gray">
							<div class="art-header">
		<div class="art-content">
								<div class="row">
									<div class="col-1-2">
										<div class="wrap-col">
											<div>
												<img src="images/2.png">
											</div>
										</div>
									</div>
									<div class="col-1-2">
										<div class="wrap-col">
											<div class="row">
												<div class="t-center" style="padding-top: 40px;">
													<h3 style="font-size: 26px;">Welcome to <span class="color-red">zGoodFood</span></h3>
													<p>BECIEGAST NVERITI VITAESAERT ASETY KERTYA ASET APLICA BOSERDE NERAFAE KERTYURAUAS VITAESA ERTYASNEMO FASERANI PTAIADES FERTASERD KERTYASER DAESRAEDS. CASROLERN ATUR AUT ODITAUT. ONSEQUUNTUR MAGNI DOLORES EO QUI RATIONE VOLUPTATEMSEQUI NESCIUNT, NEQPORRO QUISQUAM ESTQUI DOLOREM QUIA DOLOR. BASASAERT, AMET, CONSECTETUR, ADIPISCI VELIT, SED QUIA NON NUMQUAM EIUS MODI TEMPORA.</p>
<!--													<a href="#" class="button" >More Details</a>-->
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							</div>
							<div class="art-content">
								<div class="art-header">
									<h1>我的评价</h1>
								<hr class="line-2">
							</div>
								<div class="row">
									<div id="contact_form">
										<form name="form1" id="ff" method="post" action="contact.php">

											<div class="row">
												<div class="col-1-4">
													<div class="wrap-col">
														<h1>色</h1>
													</div>
												</div>
												<div class="col-3-4">
													<div class="wrap-col" style="float: left" >
														<div class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
													</div>
												</div>
											</div>

											<div class="row">
												<div class="col-1-4">
													<div class="wrap-col">
														<h1>香</h1>
													</div>
												</div>
												<div class="col-3-4">
													<div class="wrap-col" style="float: left" >
														<div class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
													</div>
												</div>
											</div>


											<div class="row">
												<div class="col-1-4">
													<div class="wrap-col">
														<h1>味</h1>
													</div>
												</div>
												<div class="col-3-4">
													<div class="wrap-col" style="float: left" >
														<div class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
													</div>
												</div>
											</div>

											<div class="row">
												<div class="col-1-4">
													<div class="wrap-col">
														<h1>形</h1>
													</div>
												</div>
												<div class="col-3-4">
													<div class="wrap-col" style="float: left" >
														<div class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
													</div>
												</div>
											</div>
<!--											<label class="row">-->
<!--												<div class="wrap-col">-->
<!--													<input type="text" name="subject" id="subject" placeholder="Subject" required="required" />-->
<!--												</div>-->
<!--											</label>-->

											<label class="row">
												<div class="wrap-col">
													<textarea name="message" id="message" class="form-control" rows="4" cols="25" required="required"
													placeholder="Message"></textarea>
												</div>
											</label>
											<center><input class="sendButton" type="submit" name="Submit" value="提交"></center>
										</form>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
		<hr class="line">
		<!--////////////////////////////////////Footer-->
		<script src="js/lightbox-plus-jquery.min.js"></script>

</div>
</body>
<script src="js/jquery.raty.js"></script>
<script src="js/resturant.js"></script>
<script src="js/baseJS/baseJS.js"></script>
<script>
	$(document).ready(function (){
		/// 评价星级初始化
		evaluateStartInit();
	});
</script>
</html>