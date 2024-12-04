import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import NegativeStockList from './negativeStockList/NegativeStockList'

function NegativeSock() {
    const breadCrumbsTitle = {
        id: "2324",
        title_1: "Stock Sheet",
        title_2: "Negative Stock"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <NegativeStockList />
        </>
    )
}

export default NegativeSock