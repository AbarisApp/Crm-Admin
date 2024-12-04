import React from 'react'
import SalesRetunWithoutGstComp from '../../components/salesRetunWithoutGstComp/SalesRetunWithoutGstComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function SalesRetunWithoutGstPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Sales Return Without GST",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SalesRetunWithoutGstComp />
        </>
    )
}

export default SalesRetunWithoutGstPage