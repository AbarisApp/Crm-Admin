import React from 'react'
import AddPurchaseReturnWithoutGstComp from '../../components/addPurchaseReturnWithoutGstComp/AddPurchaseReturnWithoutGstComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddPurchaseReturnWithoutGstPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Purchase Return without GST",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddPurchaseReturnWithoutGstComp />
        </>
    )
}

export default AddPurchaseReturnWithoutGstPage