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
	<title>zGoodFood</title>
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

	<!--[if lt IE 8]>
	<div style=' clear: both; text-align:center; position: relative;'>
		<a href="http://windows.microsoft.com/en-US/internet-explorer/Items/ie/home?ocid=ie6_countdown_bannercode">
			<img src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." />
		</a>
	</div>
	<![endif]-->
	<!--[if lt IE 9]>
	<script src="js/html5.js"></script>
	<script src="js/css3-mediaqueries.js"></script>
	<![endif]-->


	<script src="js/baseJS/employee.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/apiRequest.js?v=1.1" charset="utf-8" type="text/javascript"></script>
	<script src="js/baseJS/baseJS.js?v=1.1" charset="utf-8" type="text/javascript"></script>

</head>

<body>
<div class="wrap-body">
	<header class="zerogrid">
		<div class="logo">
			<hr class="line-1">
			<a href="#">厨师评价</a>
			<span>Lorem ipsum dolor sit amet</span>
			<hr class="line-1">
		</div>

		<div id='cssmenu' class="align-center">
			<ul>
				<li ><a href='z_index.jsp'><span>今日餐食</span></a></li>
				<li ><a href='z_indexTomorrow.jsp'><span>明日菜单</span></a></li>
				<li class="active"><a href='#'><span>服务员人员评价</span></a></li>
				<li class='last'><a href='z_event.jsp'><span>突发事件</span></a></li>
			</ul>
		</div>
	</header>
	<!--////////////////////////////////////Container-->
	<section id="container">
		<div class="wrap-container clearfix">
			<div id="main-content">
				<div class="wrap-content zerogrid ">

					<article class="background-white">
						<div class="art-header">
							<hr class="line-2">
							<h2>工作人员</h2>
						</div>
						<div class="art-content">
							<div id="employeeContaner" class="row">
								<!--									<div  class="col-1-4">-->
								<!--										<div class="wrap-col post">-->
								<!--											<img src="images/u1.jpg" alt=""/>-->
								<!--											<h3>Small Groups 静态工作人员模板 </h3>-->
								<!--											<p>年龄 24</p>-->
								<!--											<p> 女 <p/>-->
								<!--											<p> 共 39 条 评价 .</p>-->
								<!--										</div>-->
								<!--									</div>-->


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
<script>

	/// 获取所有工作人员
	getEmployee();

</script>

</html>