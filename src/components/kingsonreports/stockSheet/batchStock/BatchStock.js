import React from 'react'
import BatchStockList from './batchStockList/BatchStockList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function BatchStock() {
    const breadCrumbsTitle = {
        id: "1212",
        title_1: "Stock Sheet",
        title_2: "Stock Batch"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BatchStockList />
        </>
    )
}

export default BatchStock