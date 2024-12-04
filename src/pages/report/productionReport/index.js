import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ProductionReport from "../../../components/kingsonreports/productionReport/ProductionReport";

function ProductionReportPage() {
  const breadCrumbsTitle = {
    title_1: "Production Report",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ProductionReport />
    </>
  );
}

export default ProductionReportPage;
