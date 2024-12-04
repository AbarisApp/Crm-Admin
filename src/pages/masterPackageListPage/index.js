import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import MasterPackageListComp from '../../components/masterPackageListComp/MasterPackageListComp';
import MasterPackageFIlter from '../../components/masterPackageListComp/MasterPackageFIlter';

function MasterPackageListPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Master Packages",
        title_2: '',
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <MasterPackageFIlter />
            <MasterPackageListComp />
        </>
    )
}

export default MasterPackageListPage