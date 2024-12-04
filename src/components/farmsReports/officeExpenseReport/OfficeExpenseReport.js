import React from 'react'
import OfficeExpenseReportSearch from './officeExpenseReportSearch/OfficeExpenseReportSearch'
import OfficeExpenseReportList from './officeExpenseReportList/OfficeExpenseReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function OfficeExpenseReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: ' Date Range',
        path_2: ""
    };
    return (
        <>
         <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <OfficeExpenseReportSearch/>
            <OfficeExpenseReportList/>
        </>
    )
}

export default OfficeExpenseReport
