import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ProposalList from './ProposalList'

function ProposalListComp() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Proposal",
    }


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ProposalList />
        </>
    )
}

export default ProposalListComp