import React from 'react'
import InhouseOrdersComp from '../../components/inhouseOrdersComp/InhouseOrdersComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import InhouseOrderFilter from '../../components/inhouseOrdersComp/InhouseOrderFilter'

function InhouseOrderPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Inhouse Orders",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <InhouseOrderFilter />
            <InhouseOrdersComp />
        </>
    )
}

export default InhouseOrderPage