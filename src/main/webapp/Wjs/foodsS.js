/// 日菜品维护显示
function showDayFoods() {
    var foodsList = getFoodsList();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<foodsList.length ;i++)
    {
        var cell = foodsDayCellInit(foodsList[i]);
        sb.append(cell);
    }
    $("#foodsTable").append(sb.tostring());
}

/// 菜品维护显示
function showMaintainFoods() {
    var foodsList = getFoodsList();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<foodsList.length ;i++)
    {
        var cell = foodsMaintainCellInit(foodsList[i]);
        sb.append(cell);
    }
    $("#foodsTable").append(sb.tostring());
}

/// 菜品推荐
function showBestFoods() {
    var foodsList = getBestFoods();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<foodsList.length ;i++)
    {
        var cell = bestFoodsCellInit(i+1,foodsList[i]);
        sb.append(cell);
    }
    $("#foodsTable").append(sb.tostring());
}




/// 早中晚
/// 1:moring 2:lunch 3:dinner
function moringLunchDinnerChange(o,type)
{
    // 是否选择
    var isChoose = false ;
    if($(o).is(':checked')) {
        // alert('yes');
        isChoose= true;
    }
    var foodsID = $(o).data('id');
    // 请求
    var leixing = '1';
    updateFoodStyle(foodsID,leixing,type ,isChoose?'1':'0');
}

/// 今明
/// 1：今 2：明
function todayTomorroyChange(o,type)
{
    // 是否选择
    var isChoose =false ;
    if($(o).is(':checked')) {
        // alert('yes');
        isChoose= true;
    }
    var foodsID = $(o).data('id');
    // 请求
    var leixing = '2';
    updateFoodStyle(foodsID,leixing , type ,isChoose?'1':'0');
}

/// 食品 详情页数据加载
function showFoodsDetail(foodID) {
    var data = getFoodDetailData(foodID);
    foodDetailShow(data);
}

/// 保存方法
function foodsSave() {
    var type =  getQueryString('type') ;
    if (type == null|| type == 'undefined' ||type.length<=0)
    {
        var foodsID = getQueryString('id') ;
        // 修改
        changeFoods(foodsID);
    }
    else
    {
        // 新增
        newFoodsSave();
    }
}
/// 新增菜品
function newFoodsSave() {
    // name
   var name = $('#name').val();
    // 简介
   var mes =  $('#mes').val();
   // 厨师
   var cooker =  $("input[name='gender']:checked").val();
   // 图片地址
   var picPath =  $('#load_xls').data('pic');

    if (name ==null ||name.length<=0)
    {
        alert('请输入名称')
        return;
    }
    if (mes ==null ||mes.length<=0)
    {
        alert('请输入简介')
        return;
    }
    if (cooker ==null ||cooker.length<=0)
    {
        alert('请选择厨师')
        return;
    }
    if (picPath ==null ||picPath.length<=0)
    {
        alert('请上传图片')
        return;
    }
    newFoods(name,mes,picPath,cooker);
}

/// 修改菜品
function changeFoods(foodID) {
    // name
    var name = $('#name').val();
    // 简介
    var mes =  $('#mes').html();
    // 厨师
    var cooker =  $("input[name='gender']:checked").val();
    // 图片地址
    var picPath =  $('#load_xls').data('pic');

    if (foodID ==null ||foodID.length<=0)
    {
        alert('foodID未获取成功');
        return;
    }
    if (name ==null ||name.length<=0)
    {
        alert('请输入名称')
        return;
    }
    if (mes ==null ||mes.length<=0)
    {
        alert('请输入简介')
        return;
    }
    if (cooker ==null ||cooker.length<=0)
    {
        alert('请选择厨师')
        return;
    }
    if (picPath ==null ||picPath.length<=0)
    {
        alert('请上传图片')
        return;
    }
    changeFoodsDetail(foodID,name,mes,picPath,cooker);
}



// 选中厨师
function autoChooseCooker() {
    var cookerID =	$('#cooker').val();
    if (cookerID!='-1')
    {
        ClickMe(cookerID);
    }
}

// 设置单选框选中值
function ClickMe(value) {
    $("input[name='gender']").each(function() {
        if ($(this).val() != value) {
            $(this).removeAttr("checked");
        } else {
            $(this).prop("checked", "checked");
        }
    });
}