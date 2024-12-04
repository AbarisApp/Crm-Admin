import React from 'react'
import AddSalesReturnWithoutGstComp from '../../components/addSalesReturnWithoutGstComp/AddSalesReturnWithoutGstComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddSalesReturnWithoutGstPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Sales Return (Without GST)",
        title_2: '',
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddSalesReturnWithoutGstComp />
        </>
    )
}

export default AddSalesReturnWithoutGstPage