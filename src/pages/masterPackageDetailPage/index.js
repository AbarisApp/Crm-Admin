import React from 'react'
import MasterPackageDetailComp from '../../components/masterPackageDetailComp/MasterPackageDetailComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function MasterPackageDetailPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master Packages Details",
        title_2: '',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MasterPackageDetailComp />
        </>
    )
}

export default MasterPackageDetailPage