import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import BillButnotDispatchList from './billButnotDispatchlist/BillButnotDispatchlist'
import BilledbutnotdispatchedFilter from './billedbutnotdispatched/BilledbutnotdispatchedFillter'

function BillButnotDispatch() {
    const breadCrumbsTitle = {
        id: "34dsadf32324qd34sad",
        title_1: "Billed but not dispatched",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BilledbutnotdispatchedFilter />
            <BillButnotDispatchList />
        </>
    )
}

export default BillButnotDispatch
