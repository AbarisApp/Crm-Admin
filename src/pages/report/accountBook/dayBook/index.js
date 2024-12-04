import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import DayBook from '../../../../components/kingsonreports/AccountBook/dayBook/DayBook';

function DayBookPage() {
  const breadCrumbsTitle = {
    title_1: "Day Book",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <DayBook />
    </>
  );
}

export default DayBookPage
