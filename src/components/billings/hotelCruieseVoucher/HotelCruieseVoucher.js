import React from 'react'
import HotelCruieseVoucherTab from './hotelCruieseVoucherTab/HotelCruieseVoucherTab'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function HotelCruieseVoucher() {
    const breadCrumbsTitle = {
        title_1:"Hotel Voucher Create"
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <section className='m-4'>
                <HotelCruieseVoucherTab />
            </section>
        </>
    )
}

export default HotelCruieseVoucher
