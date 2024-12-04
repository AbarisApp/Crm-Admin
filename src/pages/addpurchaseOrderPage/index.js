import React from 'react'
import AddPurchaseOrderComp from '../../components/addPurchaseOrderComp/AddPurchaseOrderComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddPurchaseOrderPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Purchase Order",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddPurchaseOrderComp />
        </>
    )
}

export default AddPurchaseOrderPage