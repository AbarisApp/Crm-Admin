import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import AccountLedgerView from "../../../../components/kingsonreports/AccountBook/accountLedgervie/AccountLedger";

function AccountLedgerPageView() {
  const breadCrumbsTitle = {
    title_1: "Account Ledger View",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AccountLedgerView />
    </>
  );
}

export default AccountLedgerPageView;
