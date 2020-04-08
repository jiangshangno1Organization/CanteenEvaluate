<%@ page language="java" import="java.util.*"%>
<%@page contentType="text/html charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>
<head>
<%--	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>--%>
	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8"/>
	<title>zGoodFood</title>
	<!-- <meta name="description" content="Free Responsive Html5 Css3 Templates "> -->

	<!-- Mobile Specific Metas
    ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

	<!-- CSS
    ================================================== -->
	<link rel="stylesheet" href="css/zerogrid.css"/>
	<link rel="stylesheet" href="css/style.css"/>
	<link rel="stylesheet" href="css/lightbox.css"/>

	<!-- Custom Fonts -->
	<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>


	<link rel="stylesheet" href="css/menu.css"/>
	<script src="js/jquery1111.min.js" type="text/javascript"></script>
	<script src="js/script.js"></script>
	<script src="js/baseJS/baseJS.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/resturant.js"></script>


	<!--[if lt IE 9]>
	<script src="js/html5.js"></script>
	<script src="js/css3-mediaqueries.js"></script>
	<![endif]-->


</head>

<body>




<div class="wrap-body">
	<header class="zerogrid">
		<div class="logo">
			<hr class="line-1"/>
			<a href="#">食堂评价系统</a>
			<span>Lorem ipsum dolor sit amet</span>
			<hr class="line-1"/>
		</div>
		<div id='cssmenu' class="align-center">
			<ul>
				<li class="active"><a href='index.html'><span>今日餐食</span></a></li>
				<!-- <li class=' has-sub'><a href='about.html'><span>明日菜单</span></a> -->
				<!-- <ul > -->
				<!-- <li class='has-sub'><a href='#'><span>Item 1</span></a> -->
				<!-- <ul> -->
				<!-- <li><a href='#'><span>Sub Item</span></a></li> -->
				<!-- <li class='last'><a href='#'><span>Sub Item</span></a></li> -->
				<!-- </ul> -->
				<!-- </li> -->
				<!-- <li class='has-sub'><a href='#'><span>Item 2</span></a> -->
				<!-- <ul> -->
				<!-- <li><a href='#'><span>Sub Item</span></a></li> -->
				<!-- <li class='last'><a href='#'><span>Sub Item</span></a></li> -->
				<!-- </ul> -->
				<!-- </li> -->
				<!-- </ul> -->
				<!-- </li> -->
				<li><a href='menu.html'><span>明日菜单</span></a></li>
				<li><a href='event.html'><span>服务员人员评价</span></a></li>
				<li class='last'><a href='contact.html'><span>服务员人员投诉</span></a></li>
			</ul>
		</div>
	</header>
	<!--////////////////////////////////////Container-->
	<!-- 早餐 -->


	<section id="container">

		<div class="wrap-container clearfix">


			<div id="main-content">

				<div class="wrap-content zerogrid ">
					<article class="background-gray">

						<div class="art-header">
							<hr class="line-2"/>
							<h2>早餐</h2>
						</div>
						<div class="art-content">
							<div class="row" id = "morning">
								<div class="col-1-3 post" style="padding :10px" onclick="fd()" >
									<img src="images/menu-12.jpg" alt=""/>
									<h3>萝卜丝炒牛肉</h3>
									<p> 共39 条 评价 .</p>
									<p>4 分</p>
									<div class ="pf" data-pf="3"  style="cursor: pointer;height:30px"></div>
								</div>

								<!-- <div class="col-1-3 post" style="padding :10px" > -->
								<!-- <img src="images/menu-12.jpg" alt=""/> -->
								<!-- <h3>青椒炒肉</h3> -->
								<!-- <p>His pthis.</p> -->
								<!-- <div class ="pf" style="cursor: pointer;height:30px"></div> -->

								<!-- </div> -->
								<!-- <div class="col-1-3 post" style="padding :10px"> -->
								<!-- <img src="images/menu-12.jpg" alt=""/> -->
								<!-- <h3>Small Groups</h3> -->
								<!-- <p>His primis oegimus, graeci electram ocurreret at his.</p> -->
								<!-- <div class ="pf"  style="cursor: pointer;height:30px"></div> -->
								<!-- </div> -->
								<!-- <div class="col-1-3 post"style="padding :10px" > -->
								<!-- <img src="images/menu-12.jpg" alt=""/> -->
								<!-- <h3>Small Groups</h3> -->
								<!-- <p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p> -->
								<!-- <div class ="pf" style="cursor: pointer;height:30px"></div> -->
								<!-- </div> -->
							</div>
						</div>
					</article>

					<!-- 午餐 -->
					<article class="background-gray">
						<div class="art-header">
							<hr class="line-2"/>
							<h2>午餐</h2>
						</div>
						<div class="art-content">
							<div class="row">
								<div class="col-1-3">

									<div class="wrap-col post">
										<img src="images/menu-12.jpg" alt=""/>
										<h3>Small Groups</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
									</div>

									<div class="wrap-col post">
										<img src="images/menu-15.jpg" alt=""/>
										<h3>Small Groups</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
									</div>

								</div>
								<div class="col-1-3">
									<div class="wrap-col post">
										<img src="images/menu-13.jpg" alt=""/>
										<h3>Communication</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Vel quod legimus, graeci electram ocurreret at his.</p>
									</div>
									<div class="wrap-col post">
										<img src="images/menu-16.jpg" alt=""/>
										<h3>Small Groups</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
									</div>
								</div>
								<div class="col-1-3">
									<div class="wrap-col post">
										<img src="images/menu-14.jpg" alt=""/>
										<h3>Small Groups</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
									</div>
									<div class="wrap-col post">
										<img src="images/menu-17.jpg" alt=""/>
										<h3>Small Groups</h3>
										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>
									</div>
								</div>
							</div>
						</div>
					</article>



					<article class="background-white">
						<div class="art-header">
							<hr class="line-2"/>
							<h2>News archives</h2>
						</div>
						<div class="art-content">
							<div class="row">
								<div class="col-1-3" style="text-align: left;">
									<div class="wrap-col">
										<ul>
											<li><a href="#">JANUARY 2014</a></li>
											<li><a href="#">FEBRUARY 2014</a></li>
											<li><a href="#">MARCH 2014</a></li>
											<li><a href="#">APRIL 2014</a></li>
											<li><a href="#">MAY 2014</a></li>
											<li><a href="#">JUNE 2014</a></li>
										</ul>
									</div>
								</div>
								<div class="col-1-3" style="text-align: left;">
									<div class="wrap-col">
										<ul>
											<li><a href="#">JULY 2014</a></li>
											<li><a href="#">AUGUST 2014</a></li>
											<li><a href="#">SEPTEMBER 2014</a></li>
											<li><a href="#">OCTOBER 2014</a></li>
											<li><a href="#">NOVEMBER 2014</a></li>
											<li><a href="#">DECEMBER 2014</a></li>
										</ul>
									</div>
								</div>
								<div class="col-1-3" style="text-align: left;">
									<div class="wrap-col">
										<ul>
											<li><a href="#">JANUARY 2013</a></li>
											<li><a href="#">FEBRUARY 2013</a></li>
											<li><a href="#">MARCH 2013</a></li>
											<li><a href="#">APRIL 2013</a></li>
											<li><a href="#">MAY 2013</a></li>
											<li><a href="#">JUNE 2013</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
	<hr class="line"/>
	<!--////////////////////////////////////Footer-->
	<footer>
		<div class="wrap-footer">
			<div class="zerogrid">
				<div class="row">
					<div class="col-1-3">
						<div class="wrap-col">
							<p>Copyright - Free Html5 Templates designed by ZEROTHEME - More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
						</div>
					</div>
					<div class="col-1-3">
						<div class="wrap-col">
							<ul class="social-buttons">
								<li><a href="#"><i class="fa fa-twitter"></i></a>
								</li>
								<li><a href="#"><i class="fa fa-facebook"></i></a>
								</li>
								<li><a href="#"><i class="fa fa-linkedin"></i></a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-1-3">
						<div class="wrap-col">
							<ul class="quick-link">
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms of Use</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<script src="js/lightbox-plus-jquery.min.js"></script>
</div>
</body>

<script src="js/jquery.raty.js"></script>
<script>

	function fd (i){
		alert(i);
	}

	/// 获取菜品列表
    getMorningAllFoods();

	$(document).ready(function (){
		/// 评级星级初始化
		evaluateStartInit();
	});

</script>
</html>