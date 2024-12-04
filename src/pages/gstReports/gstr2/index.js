import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import Gstr2 from "../../../../components/report/gstReports/gstr2/Gstr2";

function Gstr2Page() {
  const breadCrumbsTitle = {
    title_1: "GSTR - 2 - B2B",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Gstr2 />
    </>
  );
}

export default Gstr2Page;
