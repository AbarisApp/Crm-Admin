import React from 'react'
import AllCancelledOrdersFilter from '../../components/allCancelledOrdersComp/AllCancelledOrdersFilter'
import AllCancelledOrdersList from '../../components/allCancelledOrdersComp/AllCancelledOrdersList'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AllCancelledOrdersPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Cancelled Orders",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllCancelledOrdersFilter />
            <AllCancelledOrdersList />
        </>
    )
}

export default AllCancelledOrdersPage