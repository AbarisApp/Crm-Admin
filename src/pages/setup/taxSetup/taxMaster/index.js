import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TaxMaster from "../../../../components/setup/taxSetup/taxMaster/TaxMaster";

function TaxMasterPage() {
  const breadCrumbsTitle = {
    title_1: "Tax Master",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TaxMaster />
    </>
  );
}

export default TaxMasterPage;
