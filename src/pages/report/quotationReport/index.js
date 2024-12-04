import React from "react";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import QuotationReport from "../../../components/kingsonreports/quotationReport/QuotationReport";

function QuotationReportPage() {
  const breadCrumbsTitle = {
    title_1: "Quotaion Report",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <QuotationReport />
    </>
  );
}

export default QuotationReportPage;
