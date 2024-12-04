import React from 'react'
import Purchasewisesalepurchaselist from './purchasewisesalepurchaselist/Purchasewisesalepurchaselist'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs'

function Partywisesalepurchase() {
    const breadCrumbsTitle = {
        id: "1213",
        title_1: "Stock Sheet",
        title_2: "Analysis Reports",
        title_3: "Purchase Wise Sale",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Purchasewisesalepurchaselist />
        </>

    )
}

export default Partywisesalepurchase