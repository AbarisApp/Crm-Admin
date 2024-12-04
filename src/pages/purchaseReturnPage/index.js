import React from 'react'
import PurchaseReturnComp from '../../components/purchaseReturnComp/PurchaseReturnComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function PurchaseReturnPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Purchase Return / Debit Note",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseReturnComp />
        </>
    )
}

export default PurchaseReturnPage