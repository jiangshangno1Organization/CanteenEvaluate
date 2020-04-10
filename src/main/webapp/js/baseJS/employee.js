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

/// 获取 单个 人员评价
function getEmployeeEvaluate(employeeID) {
    var employeeEvaluateList = getEmployeeEvaluateList(employeeID);
    var sb = new stringbuilder();
    /// 获取所有
    //for (i =0 ;i<evaluateList.length ;i++)
    for (i =0 ;i<5;i++)
    {
        //evaluateList[i]
        var cell = employeeEvaluateCell();
        sb.append(cell);
    }
    $("#evaluate").append(sb.tostring());
}