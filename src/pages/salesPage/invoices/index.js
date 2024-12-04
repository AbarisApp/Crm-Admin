import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import Invoices from "../../../components/sales/invoices/Invoices";

function InvoicesPage() {
  const breadCrumbsTitle = {
    title_1: "Invoices",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <Invoices />
    </>
  );
}

export default InvoicesPage;
