import React from 'react'
import BatchwithlocationList from './batchwithLocationList/BatchwithlocationList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function BatchWithLocation() {
    const breadCrumbsTitle = {
        id: "1212",
        title_1: "Stock Sheet",
        title_2: "Batch With Location",
        headingTitle: "Batch With Location"
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BatchwithlocationList titleName={breadCrumbsTitle} />
        </>
    )
}

export default BatchWithLocation