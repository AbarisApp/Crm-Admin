import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import WhoCountry from "./WhoCountry"
import { WhoOnlineList } from "./WhoOnlineList"


export const WhoOnline = () => {
    const breadCrumbsTitle = {
        title_1: "",
        title_2: "Analytics Overview"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <WhoOnlineList />
            <WhoCountry />
        </>
    )
}
