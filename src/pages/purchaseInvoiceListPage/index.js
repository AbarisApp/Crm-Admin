import React from 'react'
import PurchaseInvoiceListComp from '../../components/purchaseInvoiceListComp/PurchaseInvoiceListComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function PurchaseInvoiceListPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Purchase Invoice",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseInvoiceListComp />
        </>
    )
}

export default PurchaseInvoiceListPage