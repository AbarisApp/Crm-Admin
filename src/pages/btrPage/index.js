import React from 'react'
import BtrComp from '../../components/btrComp/BtrComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function BtrPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "BTR",
        title_2: '',
    }


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BtrComp />
        </>
    )
}

export default BtrPage