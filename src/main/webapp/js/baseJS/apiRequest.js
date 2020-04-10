var baseUrl = "http://172.16.1.33:8089/foodcontro/";
var baseS = "http://172.16.1.33:8089/";


/// 获取所有食物列表
/// （用餐类型）1为早餐，2为中餐，3为晚餐
/// （今日明日）1为今日，2为明日
function getFoodsList(day ,num )
{
    var res  = null ;
    $.ajax({
        type: "GET",
        url: baseUrl + "getfoodlist",
        data :{'num' :num, 'day' :day},
        async: false,
        error: function (request) {
            alert("获取菜品信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 获取所有的员工列表
function getEmpoyeeDataList() {
    var res  = null ;
    $.ajax({
        type: "GET",
        url: baseS + "user/getuser",
        //data :{'num' :num, 'day' :day},
        async: false,
        error: function (request) {
            alert("获取所有的员工信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 获取所有食物评价列表
/// （用餐类型）1为早餐，2为中餐，3为晚餐
/// （今日明日）1为今日，2为明日
function getFoodsEvaluateList(foodsId)
{
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseUrl+"getfoodcomm",
        data :{'id' :foodsId},
        async: false,
        error: function (request) {
            alert("获取菜品评价列表信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 获取评价列表
/// id厨师id 或 服务人员id
/// 3:厨师，2：卖饭者
function getEmployeeEvaluateList(employeeID) {
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseS+"user/getcookerorsecomm",
        data :{'id' :employeeID, 'typeid': '2'},
        async: false,
        error: function (request) {
            alert("获取人员评价列表信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 获取 food 详细信息
function getFoodDetailData(foodsID) {
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseS+"foodcontro/getfooddetail",
        data :{'id' :foodsID},
        async: false,
        error: function (request) {
            alert("获取 food 详细信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 获取 服务员 详细信息
function getEmployeeDetailData(employeeID) {
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseS+"foodcontro/getselldetail",
        data :{'id' :employeeID},
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("获取 服务员 详细信息失败，请稍后再试。");
            return null;
        },
        success: function (data) {
            res = eval(data);
        }
    });
    return res;
}

/// 提交菜品&&厨师评价
function commitEvaluate() {
    var foodsID = getQueryString('id') ;
    // 食品
    var se  = $('#se').children().last().val() ;
    var xian = $('#xian').children().last().val() ;
    var wei = $('#wei').children().last().val() ;
    var xing = $('#xing').children().last().val() ;
    var sppj = $('#sppj').val() ;
    // 厨师
    var cy =  $('#cy').children().last().val() ;
    //var fw =  $('#fw').children().last().val() ;
    var cspj =  $('#cspj').val() ;
    /// {"cooksmemo1":"厨师评论","cooksmemo2":"厨师评分","memo4":"菜品形","memo3":"菜品味","memo2":"菜品香","memo1":"菜品色","id":0,"foodcomments":"菜品具体评论"}
    var data=  {'cooksmemo1' :cspj,'cooksmemo2':cy , 'memo4':xing ,'memo3':wei,'memo2': xian ,'memo1':se ,"id":foodsID,"foodcomments":sppj};
    var datas=   JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        url: baseS + "foodcontro/evaluate",//baseUrl+"getfoodlist",
        headers : {"Content-Type" :"application/json" } ,
        data :datas ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            alert('提交成功');
            window.location.href="z_evaluateList.jsp?id=" + foodsID;
        }
    });
}

/// 提交 服务员 评价
function commitEmployeeEvaluate() {
    var employeeID = getQueryString('id') ;
    var cspj =  $('#fwypl').val() ;
    if (employeeID==null ||employeeID.length<=0)
    {
        alert('无法获取评价对象，请返回重试。');
        return ;
    }
    if (cspj==null ||cspj.length<=0)
    {
        alert('请输入评价');
        return ;
    }
    var data= {'id' :employeeID,'sellercomments':cspj };
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + "user/evaulatsell",//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            alert('提交成功');
            window.location.href="z_employeeEvaluateList.jsp?id=" + employeeID;
        }
    });
}