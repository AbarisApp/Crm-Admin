import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { VisitorsLogList } from "./VisitorsLogList"




export const VisitorsLog = () => {
    const breadCrumbsTitle = {
        title_1: "",
        title_2: "Visitor Log"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <VisitorsLogList />
        </>
    )
}
