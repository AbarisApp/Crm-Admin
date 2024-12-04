import React from 'react'
import OrderStatusFilter from '../../components/orderStatusComp/OrderStatusFilter'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import OrderStatusList from '../../components/orderStatusComp/OrderStatusList'

function OrdersStatuspage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Order Status",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <OrderStatusFilter />
            <OrderStatusList />
        </>
    )
}

export default OrdersStatuspage