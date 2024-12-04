import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import BatchWiseProfit from "../../../../components/kingsonreports/analysisReport/batchWiseProfit/BatchWiseProfit";

function BatchWiseProfitPage() {
  const breadCrumbsTitle = {
    title_1: "Batch Wise Profit",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BatchWiseProfit />
    </>
  );
}

export default BatchWiseProfitPage;
