import React from 'react'
import SalesReturnComp from '../../components/salesReturnComp/SalesReturnComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function SalesReturnPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Sales Return",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SalesReturnComp />
        </>
    )
}

export default SalesReturnPage