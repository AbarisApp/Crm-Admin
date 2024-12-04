import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PartyCrossReport from "../../../../components/report/analysisReport/partyCrossReport/PartyCrossReport";

function PartyCrossReportPage() {
  const breadCrumbsTitle = {
    title_1: "Party Cross Report",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PartyCrossReport />
    </>
  );
}

export default PartyCrossReportPage;
