import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import SystemSiteConfiguration from "./SystemSiteConfiguration"
import SystemSalesConfiguration from "./SystemSalesConfiguration"
import SystemProducts from "./SystemProducts"
import SystemSettingPrefix from "./SystemSettingPrefix"
import MoneyAddNumberFormat from "./MoneyAddNumberFormat"

import AwardPoint from "./AwardPoint"
import Email from "./Email"
import WeighingScaleBarcode from "./WeighingScaleBarcode"

function SystemSettingss() {
    const breadCrumbsTitle = {
        title_1: "Settings",
        title_2: "Site Configuration",
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="container">
                <SystemSiteConfiguration />
                <SystemSalesConfiguration />
                <SystemProducts />
                <SystemSettingPrefix />
                <MoneyAddNumberFormat />
                <WeighingScaleBarcode />
                <Email />
                <AwardPoint />
            </div>
        </>
    )
}
export default SystemSettingss