import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import InterBankStockTransferList from './InterBankStockTransferList'

function InterBankStockTransferComp() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Inter Branch Stock Transfer Note",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <InterBankStockTransferList />
        </>
    )
}

export default InterBankStockTransferComp