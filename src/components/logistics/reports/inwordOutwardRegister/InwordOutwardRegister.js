import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import InwardOutwardFilter from './inwardOutwordFilter/InwardOutwardFilter'
import InwardOutwardList from './inwardOutwardList/InwardOutwardList'

function InwordOutwardRegister() {
    const breadCrumbsTitle = {
        id: "34dsadf32324qd34sad",
        title_1: "Inward / Outward Register",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <InwardOutwardFilter />
            <InwardOutwardList />
        </>
    )
}

export default InwordOutwardRegister
