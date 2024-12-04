import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AddNewCouponComp from '../../components/addNewCouponComp/AddNewCouponComp'

function AddNewCouponPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Create Coupon",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddNewCouponComp />
        </>
    )
}

export default AddNewCouponPage