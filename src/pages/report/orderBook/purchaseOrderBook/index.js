import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PurchaseOrderBook from "../../../../components/kingsonreports/orderBook/purchaseOrderBook/PurchaseOrderBook";

function PurchaseOrderBookPage() {
  const breadCrumbsTitle = {
    title_1: "P.O. Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PurchaseOrderBook />
    </>
  );
}

export default PurchaseOrderBookPage;
