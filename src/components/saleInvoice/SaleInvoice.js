import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import SalesInvoiceList from './SalesInvoiceList'

function SaleInvoice() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Sales Invoice",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SalesInvoiceList />
        </>
    )
}

export default SaleInvoice