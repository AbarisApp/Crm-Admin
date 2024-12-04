import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PartyProductWiseReport from "../../../../components/report/analysisReport/partyProductWiseReport/PartyProductWiseReport";

function PartyproductwiseReportPage() {
  const breadCrumbsTitle = {
    title_1: "Party Product Wise Report",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PartyProductWiseReport />
    </>
  );
}

export default PartyproductwiseReportPage;
