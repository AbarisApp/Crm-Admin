import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { ReturnManagement } from "../../../components/logistics/returnManagement/ReturnManagement"


export const ReturnManagementPage = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Logistics",
        title_2: 'Return Management Reconcile'
,
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ReturnManagement />
        </>
    )
}
