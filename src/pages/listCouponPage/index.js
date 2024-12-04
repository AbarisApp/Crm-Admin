import React from 'react'
import ListCouponComp from '../../components/listCouponComp/ListCoiponComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function ListCouponPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Coupon",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListCouponComp />
        </>
    )
}

export default ListCouponPage