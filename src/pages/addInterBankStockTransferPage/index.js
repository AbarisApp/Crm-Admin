import React from 'react'
import AddInterBankStockTransferComp from '../../components/addInterBankStockTransferComp/AddInterBankStockTransferComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddInterBankStockTransferPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Inter Branch Stock Transfer Note",
        title_2: '',
    }


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddInterBankStockTransferComp />
        </>
    )
}

export default AddInterBankStockTransferPage