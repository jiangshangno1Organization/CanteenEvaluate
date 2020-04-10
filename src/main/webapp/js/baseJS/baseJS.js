/// 首页 foods cell
function  foodsCellInit(cell) {
    var cellHtml =  "<div class='col-1-3 post' style='padding :10px' onclick='jumpEvaluateList("+cell.id+")' >" +
        "<img src='"+ cell.url+ "' />"+
        "<h3>"+ cell.name + "</h3>"+
        "<p> 共 "+ cell.counts + " 条 评价 .</p> "+
    "<p>"+ cell.avgs +" 分</p>" +
    "<div class ='pf'  data-pf='"+cell.avgs+"' style='cursor: pointer;height:30px'></div></div>";
    return cellHtml;
}

/// 评价 cell
function foodEvaluateCell(cell) {
    // time
    // mess
    // 4 fen
    var mess =  cell.comments ;
    var time = cell.date ; //"2020-04-05 12:52" ;
    var fen = cell.avgs;
    var cellHtml = "\t<div class=\"row\">\n" +
        "\t\t\t\t\t\t\t\t<HR style=\"FILTER:progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)\"width=\"100%\" color=#987cb9 SIZE=1>\n" +
        "\t\t\t\t\t\t\t\t<div >\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row\"> \n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-1-1\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"wrap-col post\" >\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<span >"+time+"</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row\"> \n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-1-1\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"wrap-col\" >\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<span > "+mess+"</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row\"> \n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-1-1\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"wrap-col\" >\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<div class =\"pf\" data-pf='"+ fen +"'  style=\"cursor: pointer;height:10px;\"></div>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";
        return cellHtml;
}

/// 服务员 cell
function employeeCell(cell) {
    var name = cell.name ;
    var sex =  cell.sex ;
    var age =  cell.age;
    var pl = '共 '+ 999 +' 条 评价 .';
    var htmlCell =
        "\t<div  class=\"col-1-4\" onclick='jumpEmployeeEvaluateList(" + cell.id + ")'>" +
        "<div class=\"wrap-col post\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<img src=\"images/u1.jpg\" alt=\"\"/>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<h3>"+name+"</h3>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<br/>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p1>年龄 "+age+"</p1>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p> "+sex +" </p>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<p>"+pl+"</p>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>" +
        "</div>";
    return htmlCell;
}

/// 服务员评价 cell
function employeeEvaluateCell() {
    // time
    // mess
    var mess =  "不错哦" ;  //cell.comments ;
    var time =  "2020-04-05 12:52" ; //cell.date ;
    var cellHtml = "\t<div class=\"row\">\n" +
        "\t\t\t\t\t\t\t\t<HR style=\"FILTER:progid:DXImageTransform.Microsoft.Glow(color=#987cb9,strength=10)\"width=\"100%\" color=#987cb9 SIZE=1>\n" +
        "\t\t\t\t\t\t\t\t<div >\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row\"> \n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-1-1\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"wrap-col post\" >\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<span >"+time+"</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"row\"> \n" +
        "\t\t\t\t\t\t\t\t\t\t<div class=\"col-1-1\">\n" +
        "\t\t\t\t\t\t\t\t\t\t\t<div class=\"wrap-col\" >\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<span > "+mess+"</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t\t</div>\n" +
        "\t\t\t\t\t\t\t</div>";
    return cellHtml;
}

/// 食物评论页面跳转
function jumpEvaluateList(id){
    window.location.href = "z_evaluateList.html?id="+id;
}

/// 服务员评论页面跳转
function jumpEmployeeEvaluateList(id){
    window.location.href = "z_employeeEvaluateList.html?id="+id;
}


/// string List 拼接类
function stringbuilder()
{
    this.arr = new Array();
    this.append=function(str)
    {
        this.arr.push(str);
    }
    this.tostring = function()
    {
        return this.arr.join('');
    }
}

/// 评价星级初始化
function evaluateStartInit() {
    $('.pf').each(function(){
        var pf = $(this).data('pf')*1;
        $(this).raty({ score: pf ,number: 5});
    });
}

/// 获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}