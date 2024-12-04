import React from 'react'
import Unusedserialnostocklist from './Unusedserialnostocklist/Unusedserialnostocklist'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function Unusedserialnostock() {
    const breadCrumbsTitle = {
        id: "34",
        title_1: "Stock Sheet",
        title_1: "Unused Serial Number Stock",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Unusedserialnostocklist />
        </>
    )
}

export default Unusedserialnostock