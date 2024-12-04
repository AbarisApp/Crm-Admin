import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import OpeningBalance from "../../../../components/kingsonreports/finalReports/openingBalance/OpeningBalance";

function OpeningBalancePage() {
  const breadCrumbsTitle = {
    title_1: "Openinig Balance",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <OpeningBalance />
    </>
  );
}

export default OpeningBalancePage;
