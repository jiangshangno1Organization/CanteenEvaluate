/// 首页 foods Cell
function  foodsCellInit(cell) {
    var cellHtml =  "<div class='col-1-3 post' style='padding :10px' onclick='fd("+i+")' >\
        <img src='images/menu-12.jpg' />\
        <h3>萝卜丝炒牛肉</h3>\
        <p> 共39 条 评价 .</p> "+
    "<p>"+i +" 分</p>" +
    "<div class ='pf'  data-pf='"+i+"' style='cursor: pointer;height:30px'></div></div>";
    return cellHtml;
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
        var pf = $(this).data('pf');
        $(this).raty({ score: pf ,number: 5});
    });
}