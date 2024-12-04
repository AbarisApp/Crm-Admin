import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import FlightVoucherList from './invoiceRecieptList/InvoiceRecieptList';
import InvoiceRecieptFilter from './invoiceRecieptFilter/InvoiceRecieptFilter';
import InvoiceRecieptList from './invoiceRecieptList/InvoiceRecieptList';

function InvoiceRecieptReports() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Invoice Reciept Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <InvoiceRecieptFilter />
            <InvoiceRecieptList />
        </>
    )
}

export default InvoiceRecieptReports