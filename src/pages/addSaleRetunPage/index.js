import React from 'react'
import AddSaleRetunComp from '../../components/addSaleRetunComp/AddSaleRetunComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddSaleRetunPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Sales Return",
        title_2: '',
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddSaleRetunComp />
        </>
    )
}

export default AddSaleRetunPage