/// 获取 今日 菜品信息
function getTodayAllFoods() {
    //morning 所有菜品
    dataInit('1','1');
    //lunch 所有菜品
    dataInit('1','2');
    //dinner 所有菜品
    dataInit('1','3');
}

/// 获取明日 菜品信息
function getTomorrowAllFoods() {
    //morning 所有菜品
    dataInit('2','1');
    //lunch 所有菜品
    dataInit('2','2');
    //dinner 所有菜品
    dataInit('2','3');
}

/// 食品 详情信息
function getFoodDetail(foodsID) {
    var foodsData = getFoodDetailData(foodsID);

    /// 页面处理

    // name
    $('#name').html(foodsData.name);
    // 简介
    $('#mes').html(foodsData.memo3);
    // 图片
    var element = document.getElementById('pic');
    element.src = foodsData.url;


}

/// 单个 菜品评价 html 生成
function getFoodEvaluate(foodsID) {
    var evaluateList =  getFoodsEvaluateList(foodsID);
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<evaluateList.length ;i++)
    {
        var cell = foodEvaluateCell(evaluateList[i]);
        sb.append(cell);
    }
    $("#evaluate").append(sb.tostring());
}


/// 菜品 html 生成
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
