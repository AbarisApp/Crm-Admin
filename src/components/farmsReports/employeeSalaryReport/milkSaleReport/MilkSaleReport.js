import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import MilkSaleReportSearch from './milkSaleReportSearch/MilkSaleReportSearch'

function MilkSaleReport() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Reports",
        title_2: 'Milk Sale Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MilkSaleReportSearch />
        </>
    )
}

export default MilkSaleReport
