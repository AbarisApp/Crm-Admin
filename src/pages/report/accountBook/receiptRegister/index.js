import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import ReceiptRegister from "../../../../components/kingsonreports/AccountBook/receiptRegister/ReceiptRegister";

function ReceiptRegisterPage() {
  const breadCrumbsTitle = {
    title_1: "Receipt Register",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ReceiptRegister />
    </>
  );
}

export default ReceiptRegisterPage;
