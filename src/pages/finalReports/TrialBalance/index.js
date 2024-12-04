import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TrialBalance from "../../../../components/report/finalReports/trialBalance/TrialBalance";

function TrialBalancePage() {
  const breadCrumbsTitle = {
    title_1: "Trial Balance",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TrialBalance />
    </>
  );
}

export default TrialBalancePage;
