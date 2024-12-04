import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import SalesOrderBook from "../../../../components/kingsonreports/orderBook/salesOrderBook/SalesOrderBook";

function SalesOrderBookPage() {
  const breadCrumbsTitle = {
    title_1: "Sales Order Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SalesOrderBook />
    </>
  );
}

export default SalesOrderBookPage;
