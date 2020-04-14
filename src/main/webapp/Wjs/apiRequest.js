var baseUrl = "http://172.16.1.33:8089/foodcontro/";
var baseS = "http://172.16.1.33:8089/";

/// 获取所有食物列表
/// （用餐类型）1为早餐，2为中餐，3为晚餐
/// （今日明日）1为今日，2为明日
function getFoodsList()
{
    var res  = null ;
    $.ajax({
        type: "GET",
        url: baseS + "user/getallfood",
        //data :'num' :num, 'day' :day},
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

/// 获取推荐食品  TO DO
function getBestFoods() {
    var res  = null ;
    $.ajax({
        type: "GET",
        url: baseS + "user/yuce",
        //data :'num' :num, 'day' :day},
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

/// 获取所有 employee(服务员)
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

/// 获取所有 employee(c)
function getCookerDataList() {
    var res  = null ;
    $.ajax({
        type: "GET",
        url: baseS + "user/getcooker",
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

/// 获取 厨师 详细信息
function getCookerDetailData(employeeID) {
    var res  = null ;
    $.ajax({
        type: "GET",
        url:baseS+"foodcontro/getcookerdetail",
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

/// 更新  菜品  时间属性
// foodsID（食物id）
// leixing（1为修改早中晚，2为修改今明）
// typeid（早餐1，中餐2，晚餐3或者今天1，明天2）
// isadd(取消或增加 0,1)
function updateFoodStyle(foodsID,leixing,typeid,isadd)
{
    if (foodsID==null ||foodsID.length<=0)
    {
        alert('无法获取设置对象，请返回重试。');
        return ;
    }
    var data= {'id' :foodsID,'leixing':leixing ,'typeid':typeid ,'isadd':isadd };
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + "user/updatefoodstyle",//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            if (data)
            {
                alert('已修改');
            }
            else
            {
                alert('修改失败，刷新重试');
            }
        }
    });
}

/// 新增菜品
function newFoods(name,mes,pic,cookID) {
    var data= {'name':name ,'url':pic ,'memo3':mes,'cookid':cookID };
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "PUT",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + "user/addfood",//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            if (data)
            {
                alert('已新增');
                window.location.href = "wh_foodsMaintain.html";
            }
            else
            {
                alert('新增失败');
            }
        }
    });
}

/// 删除菜品
function deleteFoods(foodID) {
    var data= {'id':foodID };
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + "user/delfood",//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            if (data)
            {
                alert('已删除');
                window.location.href = "wh_foodsMaintain.html";
            }
            else
            {
                alert('新增失败');
            }
        }
    });

}

/// 菜品修改
function changeFoodsDetail(id,name,mes,pic,cookID) {

    var data= {'id':id , 'name':name ,'url':pic ,'memo3':mes,'cookid':cookID };
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + "user/updatefood",//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data)
        {
            if (data)
            {
                alert('保存成功');
                window.location.href = "wh_foodsMaintain.html";
            }
            else
            {
               alert('保存失败');
            }
        }
    });

}

/// 新增 人员
function newEmployee(type,name ,sex,age ,mes,imgUrl) {
    var data= null ;
    var target = '';
    //（服务员）
    if (type=='1')
    {
        data =  {'name':name ,'memo1':mes ,'age':age ,'sex':sex ,'memo': imgUrl};
        target = 'user/addseller';
    }
    // （厨师）
    if (type==2)
    {
        //{"jianjie":"帅哥","memo4":"url","memo3":"年龄","memo2":"20岁","name":"小王3","avgs":"5"}
        data =  {'name':name ,'jianjie':mes ,'memo2':age ,'memo3':sex , 'memo4':imgUrl };
        target = 'user/addcooker';
    }
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "PUT",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + target ,//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
        if (data)
        {
            alert('已新增');
            window.location.href = "wh_employeeList.html";
        }
        else
        {
            alert('新增失败');
        }}
    });
}

/// 修改人员信息
function changeEployee(type, id,name ,sex,age ,mes,imgUrl) {
    var data= null ;
    var target = '';
    //（服务员）
    if (type=='1')
    {
        data =  {'id': id ,'name':name ,'memo1':mes ,'age':age ,'sex':sex ,'memo': imgUrl};
        target = 'user/updateseller';
    }
    // （厨师）
    if (type==2)
    {
        //{"jianjie":"帅哥是你爸爸","memo4":"url","memo3":"年龄","memo2":"20岁","name":"小王3","avgs":"5","id":7}
        data =  {'id': id ,'name':name ,'jianjie':mes ,'memo2':age ,'memo3':sex , 'memo4':imgUrl };
        target = 'user/updatecooker';
    }
    var datas= JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + target,//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            if (data)
            {
                alert('修改完成');
                window.location.href = "wh_employeeList.html";
            }
            else
            {
                alert('修改失败');
            }}
    });
}

/// 删除人员
function deleteEmployee(type, id) {
    var target = "";
    //（服务员）
    if (type=='1')
    {
        target = "user/delseller";
    }
    // （厨师）
    if (type==2)
    {
        target = "user/delcooker";
    }
    var data =  {'id': id };
    var datas = JSON.stringify(data) ; // datajson.dumps(datas,separators=(',',':'));
    $.ajax({
        type: "POST",
        headers : {"Content-Type" :"application/json" } ,
        url:  baseS + target,//baseUrl+"getfoodlist",
        data : datas,
        dataType : 'JSON' ,
        async: false,
        error: function (request) {
            alert("提交失败，请稍后再试。");
        },
        success: function (data) {
            if (data)
            {
                alert('已删除');
                window.location.href = "wh_employeeList.html";
            }
            else
            {
                alert('删除失败');
            }
        }
    });
}


/// 图片上传
function upload(o) {
    document.getElementById("load_xls").click();
    uploadFile();
}

function uploadFile() {
    var myform = new FormData();
    var file = $('#load_xls')[0].files[0] ;
    myform.append('foodphoto',file);
    $.ajax({
        url: baseS + "user/addfoodphoto",
        type: "POST",
        data: myform,
        contentType: false,
        processData: false,
        success: function (data) {
            // 上传成功
            alert('图片上传成功');
            $('#load_xls').data('pic',data);
            var element = document.getElementById('pic');
            element.src = data;
        },
        error:function(data){
            if (file!=null)
            {
                alert('图片上传失败');
            }
             //alert('图片上传失败');
        }
    });
}