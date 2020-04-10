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




		<script src="js/baseJS/food.js?v=1.1" charset="utf-8" type="text/javascript"></script>
		<script src="js/baseJS/apiRequest.js?v=1.1" charset="utf-8" type="text/javascript"></script>
		<script src="js/baseJS/baseJS.js?v=1.1" charset="utf-8" type="text/javascript"></script>


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
						<li class="active"><a href='#'><span>今日餐食</span></a></li>
						<li><a href='z_indexTomorrow.jsp'><span>明日菜单</span></a></li>
						<li><a href='z_stemployee.jsp'><span>服务员人员评价</span></a></li>
						<li class='last'><a href='#'><span>服务员人员投诉</span></a></li>
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
										<!--								<div class="col-1-3 post" style="padding :10px" onclick="fd()" >-->
										<!--									<img src="images/menu-12.jpg" alt=""/>-->
										<!--									<h3>萝卜丝炒牛肉测试静态菜品</h3>-->
										<!--									<p> 共39 条 评价 .</p>-->
										<!--									<p>4 分</p>-->
										<!--									<div class ="pf" data-pf="3"  style="cursor: pointer;height:30px"></div>-->
										<!--								</div>-->


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
									<div class="row" id="lunch">

										<!--								<div class="col-1-3">-->
										<!--									<div class="wrap-col post">-->
										<!--										<img src="images/menu-12.jpg" alt=""/>-->
										<!--										<h3>Small Groups 测试静态菜品</h3>-->
										<!--										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>-->
										<!--									</div>-->
										<!--								</div>-->


									</div>
								</div>
							</article>

							<!-- 晚餐 -->
							<article class="background-gray">
								<div class="art-header">
									<hr class="line-2"/>
									<h2>晚餐</h2>
								</div>
								<div class="art-content">
									<div class="row" id="dinner">

										<!--								<div class="col-1-3">-->
										<!--									<div class="wrap-col post">-->
										<!--										<img src="images/menu-12.jpg" alt=""/>-->
										<!--										<h3>Small Groups 测试静态菜品</h3>-->
										<!--										<p>His primis omittam intellegat cu, voluptua appetere mea ad, eu harum oporteat vix. Et vel quod legimus, graeci electram ocurreret at his.</p>-->
										<!--									</div>-->
										<!--								</div>-->

									</div>
								</div>
							</article>

						</div>
					</div>
				</div>
			</section>
			<hr class="line"/>
			<!--////////////////////////////////////Footer-->
			<script src="js/lightbox-plus-jquery.min.js"></script>
		</div>
	</body>

	<script src="js/jquery.raty.js"></script>
	<script>

		/// 获取菜品列表
		getTodayAllFoods();

		$(document).ready(function (){
		/// 评级星级初始化
		evaluateStartInit();
		});

	</script>
</html>