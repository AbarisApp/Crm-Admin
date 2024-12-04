import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AllPickupPointFilter from '../../components/allPickupPointOrdersComp/AllPickupPointFilter'
import AllPickupPointOrderList from '../../components/allPickupPointOrdersComp/AllPickupPointOrderList'

function AllPickupPointsOrderPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Pickup Point Orders",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllPickupPointFilter />
            <AllPickupPointOrderList />
        </>
    )
}

export default AllPickupPointsOrderPage