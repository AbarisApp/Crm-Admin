import React from 'react'
import AddPurchaseReturnComp from '../../components/addPurchaseReturnComp/AddPurchaseReturnComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddPurchaseReturnPage() {

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Purchase Return / Debit Note",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddPurchaseReturnComp />
        </>
    )
}

export default AddPurchaseReturnPage