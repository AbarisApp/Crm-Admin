import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import Gstr3b from '../../../../components/kingsonreports/gstReports/gstr3b/Gstr3b';

function Gstr3bPage() {
  const breadCrumbsTitle = {
    title_1: "GSTR 3B",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Gstr3b/>
    </>
  );
}

export default Gstr3bPage
