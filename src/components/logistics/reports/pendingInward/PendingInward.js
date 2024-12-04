import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import PendingInwardList from './pendingInwardList/PendingInwardList'

function PendingInward() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <PendingInwardList />
        </>
    )
}

export default PendingInward
