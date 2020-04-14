/// 获取所有服务员信息
function getEmployee() {
    var employeeList = getEmpoyeeDataList();
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<employeeList.length ;i++)
        //for (i =0 ;i<5;i++)
    {
        var cell = employeeCell(employeeList[i]);
        sb.append(cell);
    }
    $("#employeeContaner").append(sb.tostring());
}

/// 服务员信息加载
function getEmployeeDetail(employeeID) {
    var employeeData = getEmployeeDetailData(employeeID);
    /// 页面处理
    // name
    $("#name").html(employeeData.name);
    // 简介
    $("#mes").html(employeeData.memo1);
    // 图片
    var element = document.getElementById('pic');
    element.src = employeeData.memo;
}

/// 获取 单个 人员评价
function getEmployeeEvaluate(employeeID) {
    var employeeEvaluateList = getEmployeeEvaluateList(employeeID);
    var sb = new stringbuilder();
    /// 获取所有
    for (i =0 ;i<employeeEvaluateList.length ;i++)
    //for (i =0 ;i<5;i++)
    {
        //evaluateList[i]
        var cell = employeeEvaluateCell(employeeEvaluateList[i]);
        sb.append(cell);
    }
    $("#evaluate").append(sb.tostring());
}