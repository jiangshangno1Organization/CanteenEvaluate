/// 人员维护页面数据显示
function showAllEmployee() {
    showEmpoyeeList();
    showCookerise();
}

/// 显示Empoyee
function showEmpoyeeList() {
    // 服务者加载拼接
    var employee = getEmpoyeeDataList();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<employee.length ;i++)
    {
        var cell = employeeCellInit('1',employee[i]);
        sb.append(cell);
    }
    $("#EmployeeTable").append(sb.tostring());
}

/// 显示厨师
function showCookerise() {
    // 厨师加载拼接
    var cookerise = getCookerDataList();
    var sb2 = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<cookerise.length ;i++)
    {
        var cell = employeeCellInit('2',cookerise[i]);
        sb2.append(cell);
    }
    $("#EmployeeTable").append(sb2.tostring());
}

/// 显示厨师排行
function showBestCookeries() {
    // 厨师加载拼接
    var cookerise = getCookerDataList();
    var sb2 = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<cookerise.length ;i++)
    {
        var cell = bestCookerInit(i+1,cookerise[i]);
        sb2.append(cell);
    }
    $("#EmployeeTable").append(sb2.tostring());
}

/// 产品详情页厨师选项加载
function cookeriesChooseLoad() {
    // 服务者加载拼接
    var employee = getCookerDataList();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<employee.length ;i++)
    {
        var cell = cookChooseInit(employee[i]);
        sb.append(cell);
    }
    $("#cookeries").append(sb.tostring());
}

/// 获取明细
/// 1: 服务员  2：厨师
function showEmployeeDetail(type,id)
{
     var data =null ;
     if (type=="1")
     {
         data =  getEmployeeDetailData(id)
     }
     if (type=='2')
     {
         data =  getCookerDetailData(id)
     }
     employeeDetailShow(type,data);
}

/// 人员详情保存
/// 新增 || 修改
function  doSave() {
    // name
    var name = $('#name').val();
    // 简介
    var mes =  $('#mes').val();
    // type 1：服务员 2：厨师
    var chooseEmptype =  $("input[name='gender']:checked").val();
    // 图片地址
    var picPath =  $('#load_xls').data('pic');
    var age  =  $('#age').val();
    var sex  =  $('#sex').val();
    if (name ==null ||name.length<=0)
    {
        alert('请输入名称')
        return;
    }
    if (sex ==null ||sex.length<=0)
    {
        alert('请输入性别')
        return;
    }
    if (mes ==null ||mes.length<=0)
    {
        alert('请输入简介')
        return;
    }
    if (age ==null ||age.length<=0)
    {
        alert('请输入年龄')
        return;
    }
    if (chooseEmptype ==null ||chooseEmptype.length<=0)
    {
        alert('请选择职务')
        return;
    }
    if (picPath ==null ||picPath.length<=0)
    {
        alert('请上传图片')
        return;
    }

    var type =  getQueryString('type') ; // add null

    if (type==null||type == 'undefined' ||type.length<=0)
    {
        // 修改保存
        // 1:服务员  2:厨师
        var empType = getQueryString('empType') ;
        var empID = getQueryString('id') ;
        /// 获取详情
        /// showFoodsDetail(foodsID);
        changeEployee(empType,empID,name,sex,age,mes, picPath );
    }else
    {
        // 新增保存
        newEmployee(chooseEmptype,name,sex,age,mes,picPath);
    }

}

/// 人员删除
function deleteEmp(type,empID) {
    deleteEmployee(type,empID);
}

