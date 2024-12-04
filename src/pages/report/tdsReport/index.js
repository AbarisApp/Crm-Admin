import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import TdsReport from "../../../components/kingsonreports/tdsReport/TdsReport";

function TdsReportPage() {
  const breadCrumbsTitle = {
    title_1: "TDS Report",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TdsReport />
    </>
  );
}

export default TdsReportPage;
