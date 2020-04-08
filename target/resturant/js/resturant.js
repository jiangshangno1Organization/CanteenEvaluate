/// 获取 morning 所有菜品
function getAllFoods() {
    var sb = new stringbuilder();
    // 获取所有
    for ( i =0 ;i<=5 ;i++)
    {
        var cell = foodsCellInit(i);
        sb.append(cell);
    }
    $("#morning").append(sb.tostring());
}



/// 获取 单个 产品评价列表
function getfoodEvaluate() {
    var sb = new stringbuilder();
    // 获取所有
    for ( i =0 ;i<=5 ;i++)
    {
        var cell = foodEvaluateCell(i);
        sb.append(cell);
    }
    $("#evaluate").append(sb.tostring());
}


// function  foodsCellInit(cell) {
//     var cellHtml =  "<div class='col-1-3 post' style='padding :10px' onclick='fd("+i+")' >\
//         <img src='images/menu-12.jpg' />\
//         <h3>萝卜丝炒牛肉</h3>\
//         <p> 共39 条 评价 .</p>\
//     <p>4fen</p>\
//     <div class ='pf'  style='cursor: pointer;height:30px'></div></div>";
//     return cellHtml;
// }