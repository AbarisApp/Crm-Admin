import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PurchaseChallanBook from "../../../../components/kingsonreports/challanBook/purcahseChallanBook/PurchaseChallanBook";

function PurchaseChallanBookPage() {
  const breadCrumbsTitle = {
    title_1: "Purchase Challan Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PurchaseChallanBook />
    </>
  );
}

export default PurchaseChallanBookPage;
