import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"

import { OverviewList } from "./OverviewList"




export const Overview = () => {
    const breadCrumbsTitle = {
        title_1: "",
        title_2: "Who's Online "
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <OverviewList />

        </>
    )
}
