import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import ActiveAccountLedger from '../../../../components/kingsonreports/AccountBook/activeAccountLedger/ActiveAccountLedger';

function ActiveAccountLedgerPage() {
 const breadCrumbsTitle = {
   title_1: "Active A/c Ledger",
 };
 return (
   <>
     <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
     <ActiveAccountLedger />
   </>
 );
}

export default ActiveAccountLedgerPage
