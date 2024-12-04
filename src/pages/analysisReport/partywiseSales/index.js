import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PartyWiseSalesAnalysis from "../../../../components/report/analysisReport/partywiseSales/PartyWiseSales";

function PartyWiseSalesAnalysisPage() {
  const breadCrumbsTitle = {
    title_1: "Party Wise Sales Analysis",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PartyWiseSalesAnalysis />
    </>
  );
}

export default PartyWiseSalesAnalysisPage;
