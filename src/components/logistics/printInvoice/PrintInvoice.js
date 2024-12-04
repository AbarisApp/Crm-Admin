import React from 'react'
import PrintInvoiceslist from './printInvoiceList/PrintInvoiceslist'
import { Breadcrumb } from 'react-bootstrap'

function PrintInvoice() {
    const breadCrumbsTitle = {
        id: "121",
        title_1: "LOGISTICS",
        title_2: "PRINT INVOICE"
    }
    return (
        <>
            <Breadcrumb breadCrumbsTitle={breadCrumbsTitle} />
            <PrintInvoiceslist />
        </>
    )
}

export default PrintInvoice
