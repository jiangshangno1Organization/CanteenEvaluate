/// 首页 foods Cell
function  foodsCellInit(cell) {
    var cellHtml =  "<div class='col-1-3 post' style='padding :10px' onclick='fd("+cell.id+")' >" +
        "<img src='"+ cell.url+ "' />"+
        "<h3>"+ cell.name + "</h3>"+
        "<p> 共 "+ cell.counts + " 条 评价 .</p> "+
    "<p>"+ cell.avgs +" 分</p>" +
    "<div class ='pf'  data-pf='"+cell.avgs+"' style='cursor: pointer;height:30px'></div></div>";
    return cellHtml;
}

/// 页面跳转
function jumurl(target){
    window.location.href = target;
}


/// 评价 cell
function foodEvaluateCell(cell) {
    // time
    // mess
    // 4 fen
    var mess =  "很好吃" ;
    var time = "2020-04-05 12:52" ;
    var fen = 3;
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