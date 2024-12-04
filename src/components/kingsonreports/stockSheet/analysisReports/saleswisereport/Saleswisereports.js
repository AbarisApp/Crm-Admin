import React from 'react'
import Saleswisereprtlist from './saleswisereportlist/Saleswisereprtlist'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs'

function Saleswisereports() {
    const breadCrumbsTitle = {
        id: "1213",
        title_1: "Stock Sheet",
        title_2: "Analysis Reports",
        title_3: "Salesman Wise Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Saleswisereprtlist />
        </>

    )
}

export default Saleswisereports