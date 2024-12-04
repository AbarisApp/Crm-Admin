import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import VaccineMonitorReportSearch from './vaccineMonitorReportSearch/VaccineMonitorReportSearch'

function VaccineMonitorReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "Vaccine Monitor Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <VaccineMonitorReportSearch />
        </>
    )
}

export default VaccineMonitorReport
