import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import FlightVoucherFilter from './flightVoucherReports/FlightVoucherFilter';
import FlightVoucherList from './flightVoucherList/FlightVoucherList';

function FlightVoucherReports() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Flight Voucher Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <FlightVoucherFilter />
            <FlightVoucherList />
        </>
    )
}

export default FlightVoucherReports