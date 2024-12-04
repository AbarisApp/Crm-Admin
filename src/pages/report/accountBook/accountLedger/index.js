import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import AccountLedger from "../../../../components/kingsonreports/AccountBook/accountLedger/AccountLedger";

function AccountLedgerPage() {
  const breadCrumbsTitle = {
    title_1: "Account Ledger",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AccountLedger />
    </>
  );
}

export default AccountLedgerPage;
