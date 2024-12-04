import React from 'react'
import HotelVoucher from './hotelVoucher/HotelVoucher'
import { Tab, Tabs } from 'react-bootstrap'
import HotelViewVoucher from './hotelViewVoucher/HotelViewVoucher'
import HotelViewVoucherSearch from './hotelViewVoucher/hotelViewVoucherSearch/HotelViewVoucherSearch'

function HotelCruieseVoucherTab() {
    return (
        <>
            <HotelViewVoucherSearch />
            <HotelViewVoucher />
        </>
    )
}

export default HotelCruieseVoucherTab
