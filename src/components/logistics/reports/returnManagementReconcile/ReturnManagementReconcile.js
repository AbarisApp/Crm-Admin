import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import ReturnManagementReconcilelist from './returnManagementReconcilelist/ReturnManagementReconcilelist'
import ReturnManagementReconcileFill from './returnManagementReconcile/ReturnManagementReconcileFill'

function ReturnManagementReconcile() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <ReturnManagementReconcileFill />
            <ReturnManagementReconcilelist />
        </>
    )
}

export default ReturnManagementReconcile
