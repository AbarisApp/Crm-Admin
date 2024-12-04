import React from 'react'
import Processgroupmasterlist from './processgoroupmasterlist/Processgroupmasterlist'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function ProcessGroupMaster() {
    const breadCrumbsTitle = {
        id:"32423fewr",
        title_1:"Acc Master",
        title_2:"Process Group master"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Processgroupmasterlist />
        </>
    )
}

export default ProcessGroupMaster