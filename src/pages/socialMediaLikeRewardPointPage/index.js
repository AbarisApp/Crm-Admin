import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import SocailMediaLikeRewardPointComp from '../../components/socailMediaLikeRewardPointComp/SocailMediaLikeRewardPointComp'

function SocailMediaLikeRewardPointPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Social Media Like Reward Points",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SocailMediaLikeRewardPointComp />
        </>
    )
}

export default SocailMediaLikeRewardPointPage