import React from 'react'
import EmployeeSalaryReportsSearch from './employeeSalaryReportSearch/EmployeeSalaryReportsSearch'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import EmployeeSalaryReportList from './employeeSalaryReportList/EmployeeSalaryReportList'

function EmployeeSalaryReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: 'Employee Salary Report',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <EmployeeSalaryReportsSearch />
            <EmployeeSalaryReportList />
        </>
    )
}

export default EmployeeSalaryReport
