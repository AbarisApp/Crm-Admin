import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TaxGroup from "../../../../components/setup/taxSetup/taxGroup/TaxGroup";

function TaxGroupPage() {
  const breadCrumbsTitle = {
    title_1: "Tax Group",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TaxGroup />
    </>
  );
}

export default TaxGroupPage;
