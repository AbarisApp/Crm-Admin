import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import TranportVoucherFilter from './tranportVoucherFilter/TranportVoucherFilter';
import TransportVoucherList from './transportVoucherList/TarnsportVoucherList';

function TransportVoucherReports() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Transport Voucher Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TranportVoucherFilter />
            <TransportVoucherList />
        </>
    )
}

export default TransportVoucherReports