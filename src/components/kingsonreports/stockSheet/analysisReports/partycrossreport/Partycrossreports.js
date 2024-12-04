import React from 'react'
import Partycrossreportlist from './partycrossreportlist/Partycrossreportlist'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs'

function Partycrossreports() {
    const breadCrumbsTitle = {
        id: "1213",
        title_1: "Stock Sheet",
        title_2: "Analysis Reports",
        title_3: "Party Cross Report",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Partycrossreportlist />
        </>
    )
}

export default Partycrossreports