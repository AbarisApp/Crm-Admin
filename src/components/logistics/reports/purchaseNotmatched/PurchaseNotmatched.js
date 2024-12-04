import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import PurchaseNotmatchedList from './purchaseNotmatchedList/PurchaseNotmatchedList'

function PurchaseNotmatched() {
    const breadCrumbsTitle = {
        id: "743478473tr363qwhjq73",
        title_1: "Purchase Not matched with Inward"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PurchaseNotmatchedList />
        </>
    )
}

export default PurchaseNotmatched
