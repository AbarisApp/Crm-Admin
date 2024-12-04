import React from 'react'
import PurchaseRegisterList from './purchaseregisterlist/PurchaseRegisterList'
import PurchaseRegisterFilter from './purchaseregisterfilter/PurchaseRegisterFilter'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function PurchaseRegister() {
    const breadCrumbsTitle = {
        id: "23213",
        title_1: "Reports",
        title_1: "Purchase Register",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseRegisterFilter />
            <PurchaseRegisterList />
        </>
    )
}

export default PurchaseRegister