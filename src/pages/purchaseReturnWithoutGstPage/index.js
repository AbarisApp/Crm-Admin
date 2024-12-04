import React from 'react'
import PurchaseReturnWithoutGstComp from '../../components/purchaseReturnWithoutGstComp/PurchaseReturnWithoutGstComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function PurchaseReturnWithoutGstPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Purchase Return without GST",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseReturnWithoutGstComp />
        </>
    )
}

export default PurchaseReturnWithoutGstPage