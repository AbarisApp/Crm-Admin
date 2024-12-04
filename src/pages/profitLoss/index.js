import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import ProfitLoss from "../../../../components/report/finalReports/profitLoss/ProfitLoss";

function ProfitLossPage() {
  const breadCrumbsTitle = {
    title_1: "Profit Loss",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ProfitLoss />
    </>
  );
}

export default ProfitLossPage;
