import React from 'react'
import VoucherList from '../../../../components/kingsonreports/AccountBook/voucherList/VoucherList';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

function VoucherlistPage() {
  const breadCrumbsTitle = {
    title_1: "Voucher List",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <VoucherList />
    </>
  );
}

export default VoucherlistPage
