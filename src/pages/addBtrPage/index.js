import React from 'react'
import AddBtrComp from '../../components/addBtrComp/AddBtrComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddBtrPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add BTR",
        title_2: '',
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddBtrComp />
        </>
    )
}

export default AddBtrPage