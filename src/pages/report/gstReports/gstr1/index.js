import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import Gstr1 from "../../../../components/kingsonreports/gstReports/gstr1/Gstr1";

function GstrReport1Page() {
  const breadCrumbsTitle = {
    title_1: "GSTR - 1 -B2CL",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Gstr1 />
    </>
  );
}

export default GstrReport1Page;
