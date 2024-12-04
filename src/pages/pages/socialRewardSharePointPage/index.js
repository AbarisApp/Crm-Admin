import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import SocialRewardSharePointComp from '../../components/socialRewardSharePointComp/SocialRewardSharePointComp'

function SocialRewardSharePointPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Social Share Reward Points",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SocialRewardSharePointComp />
        </>
    )
}

export default SocialRewardSharePointPage