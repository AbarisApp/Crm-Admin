import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import CashBook from "../../../../components/kingsonreports/AccountBook/cashBook/CashBook";

function CashBookPage() {
  const breadCrumbsTitle = {
    title_1: "Cash Book",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <CashBook />
    </>
  );
}

export default CashBookPage;
