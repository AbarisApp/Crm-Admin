import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ClubUserPointsComp from '../../components/clubUserPointsComp/ClubIserPointsComp'

function ClubUserPointPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "User Points",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ClubUserPointsComp />
        </>
    )
}

export default ClubUserPointPage