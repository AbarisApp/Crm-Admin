import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import RecordLevelList from './recordLevelList/RecordLevelList'

function RecordLevel() {
    const breadCrumbsTitle = {
        id: "2324",
        title_1: "Stock Sheet",
        title_2: "Record Level"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <RecordLevelList />
        </>
    )
}

export default RecordLevel