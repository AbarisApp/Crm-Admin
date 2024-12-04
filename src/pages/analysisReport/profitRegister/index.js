import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import ProfitRegister from "../../../../components/report/analysisReport/profitRegister/ProfitRegister";

function ProfitRegisterPage() {
  const breadCrumbsTitle = {
    title_1: "Profit Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ProfitRegister />
    </>
  );
}
export default ProfitRegisterPage;
