import React from 'react'
import AddNewSaleInvoiceComp from '../../components/addNewSaleInvoiceComp/AddNewSaleInvoiceComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddNewSaleInvoicePage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add New Sales Invoice",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddNewSaleInvoiceComp />
        </>
    )
}

export default AddNewSaleInvoicePage