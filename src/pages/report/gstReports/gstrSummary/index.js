import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import GstSummary from "../../../../components/kingsonreports/gstReports/gstSummary/GstSummary";

function GstrSummaryPage() {
  const breadCrumbsTitle = {
    title_1: "GSTSummary",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <GstSummary />
    </>
  );
}

export default GstrSummaryPage;
