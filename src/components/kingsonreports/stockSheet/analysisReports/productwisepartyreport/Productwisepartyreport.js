import React from 'react'
import Productwisepartyreportslist from './productwisepartyreportlist/Productwisepartyreportslist'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs'

function Productwisepartyreport() {
    const breadCrumbsTitle = {
        id: "1213",
        title_1: "Stock Sheet",
        title_2: "Analysis Reports",
        title_3: "Party Product Wise Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Productwisepartyreportslist />
        </>
    )
}

export default Productwisepartyreport