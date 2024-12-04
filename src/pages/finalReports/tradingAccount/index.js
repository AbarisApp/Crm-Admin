import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TradingAccount from "../../../../components/report/finalReports/tradingAccount/TradingAccount";

function TradingAccountPage() {
  const breadCrumbsTitle = {
    title_1: "Trading Account",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TradingAccount />
    </>
  );
}

export default TradingAccountPage;
