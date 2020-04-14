/// 日菜品表格维护行  cell
function  foodsDayCellInit(cell) {
    var id = cell.id;
    var name = cell.name;
    var pinfen =  cell.avgs;
    var morningS =cell.morning;
    var lunchS = cell.lunch;
    var dinnerS= cell.dinner;
    var toDayS = cell.today;
    var toTomorry = cell.tommrow;

	var cellHtml = "<tr>" +
        "<td> "+id+"</td>" +
        "<td>"+name+"</td>" +
        "<td>"+pinfen+"</td>" +
        "<td>" +
        "<!-- 早 --><input type=\"checkbox\" data-id='"+id+"'  onclick=\"moringLunchDinnerChange(this,'1')\" name=\"fad\" value=\"Car\"  "+ifSelected(morningS)+" /></td>" +
        "<td>" +
        "<!-- 中 --><input type=\"checkbox\" data-id='"+id+"' onclick=\"moringLunchDinnerChange(this,'2')\" name=\"vehicle\" value=\"Car\"  "+ifSelected(lunchS)+" /> " +
        "</td>" +
        "<td>" +
        "<!-- 晚 --><input type=\"checkbox\" data-id='"+id+"'  onclick=\"moringLunchDinnerChange(this,'3')\" name=\"vehicle\" value=\"Car\"  "+ifSelected(dinnerS)+" /> \n" +
        "</td>" +
        "<td>" +
        "<!-- 今 --><input type=\"checkbox\" data-id='"+id+"' onclick=\"todayTomorroyChange(this,'1')\" name=\"vehicle\" value=\"Car\"  "+ ifSelected(toDayS)+" /> \n" +
        "</td>" +
        "<td>" +
        "<!-- 明 --><input type=\"checkbox\" data-id='"+id+"'  onclick=\"todayTomorroyChange(this,'2')\" name=\"vehicle\" value=\"Car\" "+ ifSelected(toTomorry)+"  /> \n" +
        "</td>" +
        "</tr>" ;
    return cellHtml;
}

/// 菜品维护行 cell
function  foodsMaintainCellInit(cell) {
    var id = cell.id;
    var name = cell.name;
    var pinfen =  cell.avgs;
    var cellHtml = "\t<tr>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+id+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+name+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+pinfen+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- 详情 --><span class=\"label label-success\" onclick='jumpFoodsDetail("+id+")'>详情</span>\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- 删除 --><span class=\"label label-danger\"  onclick='deleteFood("+id+")'>删除</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</tr>";
    return cellHtml;
}

/// 菜品推荐 表格行 cell
function  bestFoodsCellInit(i ,cell) {
    var id = cell.id;
    var name = cell.name;
    var pinfen =  cell.avgs;
    var se = cell.color;
    var xian = cell.fragrance;
    var wei = cell.taste;
    var xing = cell.shape;

    var cellHtml = "\t<tr>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+id+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+name+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+pinfen+"</td>\n" +
        "<td>\n" +
        +se+"" +
        "</td>\n" +
        "<td>\n" +
        +xian+"" +
        "</td>\n" +
        "<td>\n" +
        +wei+"" +
        "</td>\n" +
        "<td>\n" +
        +xing+"" +
        "</td>\n" +
        "<td>\n" +
        +i+"" +
        "</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</tr>";

    return cellHtml;
}

/// 菜品详情数据加载
function foodDetailShow(foodsData) {
    // name
    $('#name').val(foodsData.name);
    // 简介
    $('#mes').html(foodsData.memo3);
    // 图片
    $('#mes').data('pic' , foodsData.url);

    //厨师值
    $('#cooker').val(foodsData.cookid);

    var element = document.getElementById('pic');
    element.src = foodsData.url;
    //
    $('#load_xls').data('pic',foodsData.url);
}

/// 人员维护行 cell
/// type:1-服务员  type:2-厨师
function employeeCellInit(type,cell) {
    var htmlCell = '';
    var name = cell.name;
    var id =cell.id;
    var sex = '/' ;
    var age = '/';
    var zhiwu = '/';

    if (type=='1')
    {
        zhiwu = "服务员";
        age= cell.age;
        sex = cell.sex;
    }
    if (type=='2')
    {
        zhiwu = "厨师";
        age = cell.memo2;
        sex = cell.memo3;
    }
    //'jumpEmployeeDetail(  ,"+id+")'

    var func1 = "'jumpEmployeeDetail(\""+ type +"\",\""+ id +"\" )'";
    var func2 =  "'deleteEmp(\""+ type +"\",\""+ id +"\" )'";

    htmlCell  = "<tr>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+id+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+name+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+zhiwu+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+sex+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+age+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- 详情 --><span class=\"label label-success\"  onclick=" + func1 +">详情</span>\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- 删除 --><span class=\"label label-danger\"  onclick="+func2+">删除</span>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</tr>";

    return htmlCell ;
}

/// 人员维护行 cell
/// type:1-服务员  type:2-厨师
function bestCookerInit(count,cell) {
    var htmlCell = '';
    var name = cell.name;
    var id =cell.id;
    var sex = '/' ;
    var age = '/';
    var zhiwu = '/';
    var avgs = cell.avgs;

    zhiwu = "厨师";
    age = cell.memo2;
    sex = cell.memo3;

    htmlCell  = "<tr>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+id+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+name+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+zhiwu+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+sex+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>"+age+"</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "<!-- 评分 -->"+ avgs +" \n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t<td>\n" +
        "<!-- 排行 -->"+ count+"\n" +
        "\t\t\t\t\t\t\t\t\t\t\t\t</td>\n" +
        "\t\t\t\t\t\t\t\t\t\t\t</tr>";

    return htmlCell ;
}


/// 人员详情页 显示
/// type:1 服务员  type:2 厨师
function employeeDetailShow(type,cell) {
    var name = cell.name;
    var id =cell.id;
    var sex = '/' ;
    var age = '/';
    /// 职务
    var zhiwu = '/';
    /// 默认图
    var picUrl = 'images/base/nopic.jpg';
    /// 简介
    var mes = '无';

    if (type=='1')
    {
        zhiwu = "服务员";
        age= cell.age;
        sex = cell.sex;
        picUrl = cell.memo;
        mes = cell.memo1;
    }
    if (type=='2')
    {
        zhiwu = "厨师";
        age = cell.memo2;
        sex = cell.memo3;
        picUrl = cell.memo4;
        mes = cell.jianjie;
    }
    // name
    $('#name').val(name);

    //厨师值
    $('#cooker').val(type);
    // // name
    // $('#zw').val(zhiwu);
    // sex
    $('#sex').val(sex);
    // age
    $('#age').val(age);
    // 简介
    $('#mes').html(mes);
    // 图片
    $('#mes').data('pic' , picUrl);
    var element = document.getElementById('pic');
    element.src =picUrl;
    //
    $('#load_xls').data('pic',picUrl);

}

/// 厨师选项 cell
function cookChooseInit(employeeCell)
{
    var cell = "\t<label class=\"fancy-radio\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<input name=\"gender\" value='"+ employeeCell.id +"' type=\"radio\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<span><i></i>"+employeeCell.name+"</span>\n" +
    "\t\t\t\t\t\t\t\t\t\t</label>";
    return cell;
}

/// 删除菜品
function deleteFood(id) {
 //alert('删除'+id);
 if (id==null||id.length<=0)
 {
     alert('未获得ID');
     return;
 }
    deleteFoods(id);
}

// /// 删除人员
// function deleteEmployee(type , id) {
//     alert('删除' +id);
// }

/// 选项框是否选中
function  ifSelected(val) {
    if (val=="0" || val==null || val == '')
    {
        return  "";
    }
    else
    {
        return  "checked='checked'";
    }
}

/// 食物详情页面跳转
function jumpFoodsDetail(id){
    window.location.href = "wh_foodsDetail.html?id="+id;
}

/// 服务员详情页面跳转
function jumpEmployeeDetail(type , id){
    window.location.href = "wh_employeeDetail.html?empType="+type+""+"&id="+id;
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