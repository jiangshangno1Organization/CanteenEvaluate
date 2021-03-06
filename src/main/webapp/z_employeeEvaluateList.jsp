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
	<title>评价列表</title>
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

	<script src="js/baseJS/employee.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/apiRequest.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/baseJS.js?v=1.1" charset="utf-8" type="text/javascript"></script>

</head>

<body>
<div class="wrap-body">
	<header class="zerogrid">
		<div class="logo">
			<hr class="line-1">
			<a href="#">服务员评价</a>
			<span>Lorem ipsum dolor sit amet</span>
			<hr class="line-1">
		</div>
		<div id='cssmenu' class="align-center">

			<ul>
				<li ><a href='z_index.jsp'><span>今日餐食</span></a></li>
				<li><a href='z_indexTomorrow.jsp'><span>明日菜单</span></a></li>
				<li class="active"><a href='z_stemployee.jsp'><span>服务员人员评价</span></a></li>
				<li class='last'><a href='z_event.jsp'><span>突发事件</span></a></li>
			</ul>
		</div>
	</header>
		<!--////////////////////////////////////Container-->
		<section id="container">
			<div class="wrap-container clearfix">
				<div id="main-content">
					<div class="wrap-content zerogrid ">
						<article class="background-gray">

								<div class="art-content">
									<div class="row">
										<div class="col-full">
											<div class="wrap-col post">
												<img id="pic" src="images/u5.jpg" alt="" style="border-radius: 50%; width: auto;" />
												<h3 id="name">姓名：小童</h3>
											</div>
										</div>
									</div>
									<br/>
									<br/>
									<strong id="mes">“自我介绍 简介 Aenean ultrices sapien ut justo laoreet eleifend. Pellentesque imperdiet, lorem ut consectetur tincidunt, arcu nisl rhoncus, dignissim sodales magna magna et dui. Donec quis odio blandit arcu tincidunt ultrices sed vitae tortor. Pellentesque tempor auctor sapien eget maximus. Donec auctor sapien massa, ut iaculis justo laoreet sit amet. Sed gravida nisl eget augue ac sodales quam. ”</strong>
								</div>
							<a onclick="toEvaluate()" class="button" >去评价</a>

						</article>
						<article class="background-white">
							<div class="art-header">
								<hr class="line-2">
								<h2>评价列表</h2>
							</div>

							<div id='evaluate' class="art-content">
<!--								<div class="row">-->
<!--									<HR style="FILTER:progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)"width="100%" color=#987cb9 SIZE=1>-->
<!--								<div >-->

<!--								<div class="row">-->
<!--										<div class="col-1-1">-->
<!--											<div class="wrap-col post" >-->
<!--												<span >2020-04-05 12:52</span>-->
<!--											</div>-->
<!--										</div>-->
<!--									</div>-->

<!--									<div class="row">-->
<!--										<div class="col-1-1">-->
<!--											<div class="wrap-col" >-->
<!--												<span >很好吃的评价模板</span>-->
<!--											</div>-->
<!--										</div>-->
<!--									</div>-->

<!--									</div>-->
<!--								</div>-->
							</div>
						</article>
						</div>
					</div>
				</div>
		</section>
			</div>

		<hr class="line">
		<!--////////////////////////////////////Footer-->
		<script src="js/lightbox-plus-jquery.min.js"></script>

</div>
</body>
<script>
	var employeeID = getQueryString('id') ;

	/// 服务员详情加载
	getEmployeeDetail(employeeID);

	/// 服务员所有评价加载
	getEmployeeEvaluate(employeeID);
	/// 去评论
	function toEvaluate() {
		window.location.href = "z_employeeEvaluate.jsp?id="+employeeID;
	}
</script>
</html>