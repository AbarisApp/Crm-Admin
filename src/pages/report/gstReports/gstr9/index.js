import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import Gstr9 from "../../../../components/kingsonreports/gstReports/gstr9/Gstr9";

function GstReport9Page() {
  const breadCrumbsTitle = {
    title_1: "GST Report 9",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Gstr9 />
    </>
  );
}

export default GstReport9Page;
