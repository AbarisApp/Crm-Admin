import React from 'react'
import PurchaseInwardList from './purchaseInwardList/PurchaseInwardList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import PurchaseInwardFilter from './purchaseInwardFilter/PurchaseInwardFilter'

function PurchaseInward() {
    const breadCrumbsTitle = {
        id: "743478473tr36373",
        title_1: "Purchase & Inward"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseInwardFilter />
            <PurchaseInwardList />
        </>
    )
}

export default PurchaseInward
