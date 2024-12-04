import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { RecentHistoryList } from "./RecentHistoryList"


function RecentHistory() {
    const breadCrumbsTitle = {
        title_1: "",
        title_2: "Recent History"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <RecentHistoryList />
        </>
    )
}
export default RecentHistory