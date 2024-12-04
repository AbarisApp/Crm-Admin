import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ClubPointConfigurationComp from '../../components/clubPointConfigurationComp/ClubPointConfigurationComp'

function ClubPointConfigurationPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Club Point Configuration",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ClubPointConfigurationComp />
        </>
    )
}

export default ClubPointConfigurationPage