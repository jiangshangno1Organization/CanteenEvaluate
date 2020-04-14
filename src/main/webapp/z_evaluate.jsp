<%@ page language="java" import="java.util.*"%>
<%@page contentType="text/html charset=UTF-8" language="java" pageEncoding="UTF-8" %>
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

	<script src="js/baseJS/food.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/apiRequest.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/baseJS.js?v=1.1" charset="utf-8" type="text/javascript"></script>

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
				<li class="active"><a href='z_index.jsp'><span>今日餐食</span></a></li>
				<li><a href='z_indexTomorrow.jsp'><span>明日菜单</span></a></li>
				<li><a href='z_stemployee.jsp'><span>服务员人员评价</span></a></li>
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
												<img id="pic" src="images/2.png">
											</div>
										</div>
									</div>
									<div class="col-1-2">
										<div class="wrap-col">
											<div class="row">
												<div class="t-center" style="padding-top: 40px;">
													<h3 style="font-size: 26px;"><span id="name" class="color-red">菜品信息</span></h3>
													<p id="mes">BECIEGAST NVERITI VITAESAERT ASETY KERTYA ASET APLICA BOSERDE NERAFAE KERTYURAUAS VITAESA ERTYASNEMO FASERANI PTAIADES FERTASERD KERTYASER DAESRAEDS. CASROLERN ATUR AUT ODITAUT. ONSEQUUNTUR MAGNI DOLORES EO QUI RATIONE VOLUPTATEMSEQUI NESCIUNT, NEQPORRO QUISQUAM ESTQUI DOLOREM QUIA DOLOR. BASASAERT, AMET, CONSECTETUR, ADIPISCI VELIT, SED QUIA NON NUMQUAM EIUS MODI TEMPORA.</p>
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
							<br/>
							<br/>
							<div class="row">
								<div id="contact_form">
									<form name="form1" id="ff" method="post" action="">

										<div class="wrap-col">
											<h2>食品评价</h2>
										</div>

										<div class="row">
											<div class="col-1-4">
												<div class="wrap-col">
													<h1>色</h1>
												</div>
											</div>
											<div class="col-3-4">
												<div class="wrap-col" style="float: left" >
													<div id="se" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
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
													<div id="xian" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
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
													<div id="wei" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
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
													<div id="xing" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
												</div>
											</div>
										</div>

										<label class="row">
											<div class="wrap-col">
													<textarea name="message" id="sppj" class="form-control" rows="2" cols="15" required="required"
															  placeholder="食品评价"></textarea>
											</div>
										</label>

										<div class="wrap-col">
											<h2>厨师评价</h2>
										</div>

										<div class="row">
											<div class="col-1-4">
												<div class="wrap-col">
													<h1>综合评分</h1>
												</div>
											</div>
											<div class="col-3-4">
												<div class="wrap-col" style="float: left" >
													<div id="cy" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>
												</div>
											</div>
										</div>

<%--										<div class="row">--%>
<%--											<div class="col-1-4">--%>
<%--												<div class="wrap-col">--%>
<%--													<h1>服务</h1>--%>
<%--												</div>--%>
<%--											</div>--%>
<%--											<div class="col-3-4">--%>
<%--												<div class="wrap-col" style="float: left" >--%>
<%--													<div id="fw" class ="pf" data-pf="0"  style="cursor: pointer;height:30px;"></div>--%>
<%--												</div>--%>
<%--											</div>--%>
<%--										</div>--%>

										<label class="row">
											<div class="wrap-col">
													<textarea name="message" id="cspj" class="form-control" rows="2" cols="15" required="required"
															  placeholder="厨师评价"></textarea>
											</div>
										</label>

										<br/>
										<br/>
										<br/>

										<center><input class="sendButton" type="button" name="Submit" onclick="commitEvaluate()" value="提交"></center>

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

<script>

	var foodsID = getQueryString('id') ;

	/// 菜品详情信息加载
	getFoodDetail(foodsID);


	$(document).ready(function (){
		/// 评价星级初始化
		evaluateStartInit();
	});
</script>
</html>