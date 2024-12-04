import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import SellerOrdersFilter from '../../components/sellerOrdersComp/SellerOrdersFilter'
import SellerOrdersList from '../../components/sellerOrdersComp/SellerOrdersList'

function SellerOrdersPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Seller Orders",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SellerOrdersFilter />
            <SellerOrdersList />
        </>
    )
}

export default SellerOrdersPage