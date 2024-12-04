import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AllOrdersFilter from '../../components/allOrdersComp/AllOrdersFilter'
import AllOrdersList from '../../components/allOrdersComp/AllOrdersList'

function AllOrdersPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Orders",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllOrdersFilter />
            <AllOrdersList />
        </>
    )
}

export default AllOrdersPage