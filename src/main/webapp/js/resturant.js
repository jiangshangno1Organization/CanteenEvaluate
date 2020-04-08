var baseUrl = "http://172.16.1.33:8089/foodcontro/";


/// 获取 今日
function getTodayAllFoods() {

    //morning 所有菜品
    dataInit('1','1');
    //lunch 所有菜品
    dataInit('1','2');
    //dinner 所有菜品
    dataInit('1','3');
}

function getTomorrowAllFoods() {
    //morning 所有菜品
    dataInit('2','1');
    //lunch 所有菜品
    dataInit('2','2');
    //dinner 所有菜品
    dataInit('2','3');
}

/// 菜品
///（用餐类型）1为早餐，2为中餐，3为晚餐
function dataInit(day , num) {
    var sb = new stringbuilder();
    var foodsList = getFoodsList(day,num);
    // 获取所有
    for (i =0 ;i<foodsList.length ;i++)
    {
        var cell = foodsCellInit(foodsList[i]);
        sb.append(cell);
    }
    if (num == '1'){
        $("#morning").append(sb.tostring());
    }
    else  if (num=='2')
    {
        $("#lunch").append(sb.tostring());
    }else  if (num==3)
    {
        $("#dinner").append(sb.tostring());
    }

}

function getLunchFoodsList() {
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

/// 获取所有食物
/// （用餐类型）1为早餐，2为中餐，3为晚餐
/// （今日明日）1为今日，2为明日
function getFoodsList(day ,num )
{
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseUrl+"getfoodlist",
        data :{'num' :num, 'day' :day},
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
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