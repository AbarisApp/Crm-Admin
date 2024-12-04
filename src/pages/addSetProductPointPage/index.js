import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AddSetProductPointComp from '../../components/addSetProductPointComp/AddSetProductPointComp'

function AddSetProductPointPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Product Point",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddSetProductPointComp />
        </>
    )
}

export default AddSetProductPointPage