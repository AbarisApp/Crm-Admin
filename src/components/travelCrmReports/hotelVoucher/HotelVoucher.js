import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import HotelVoucherFilter from './hotelVoucherFilter/HotelVoucherFilter';
import HotelVoucherList from './hotelVoucherList/HotelVoucherList';

function HotelVoucher() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Hotel Voucher Report',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <HotelVoucherFilter/>
            <HotelVoucherList/>
        </>
    )
}

export default HotelVoucher