import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import MilkCollectReportSearch from './milkReportSearch/MilkCollectReportSearch'

function MilkCollectReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: "Milk Collection Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MilkCollectReportSearch />
        </>
    )
}

export default MilkCollectReport
