import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { OverllReportList } from "./OverllReportList"
import { TenDaysOverallReport } from "./TenDaysOverallReport"




export const OverallReport = () => {
    const breadCrumbsTitle = {
        title_1: "",
        title_2: "Overall Report"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <OverllReportList />
            <TenDaysOverallReport />
        </>
    )
}
