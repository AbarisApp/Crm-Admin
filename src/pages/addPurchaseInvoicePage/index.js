import React from 'react'
import AddPurchaseInvoiceComp from '../../components/addPurchaseInvoiceComp/AddPurchaseInvoiceComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddPurchaseInvoicePage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Purchase Invoice",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddPurchaseInvoiceComp />
        </>
    )
}

export default AddPurchaseInvoicePage