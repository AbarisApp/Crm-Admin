import React from 'react'
import TravelPackageAddComp from '../../components/travelPackageAddComp/TravelPackageAddComp'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { useParams } from 'react-router-dom'

function TravelPackageAddPage() {
    const param = useParams();
    const breadCrumbsTitle = {
        id: "1",
        // title_1: "Package",
        title_1: param?.id ? "Update Package" : "Save Package",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TravelPackageAddComp />
        </>
    )
}
export default TravelPackageAddPage