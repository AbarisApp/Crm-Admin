import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ReportSetup from "../../../components/setup/reportSetup/ReportSetup";

function ReportSetupPage() {
  const breadCrumbsTitle = {
    title_1: "Report Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ReportSetup />
    </>
  );
}

export default ReportSetupPage;
