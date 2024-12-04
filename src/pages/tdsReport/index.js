import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import TdsReport from "../../../components/report/tdsReport/TdsReport";

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
