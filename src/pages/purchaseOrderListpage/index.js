import React from 'react'
import PurchaseOrderListComp from '../../components/purchaseOrderListComp/PurchaseOrderListComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function PurchaseOrderListPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Purchase Order",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseOrderListComp />
        </>
    )
}

export default PurchaseOrderListPage