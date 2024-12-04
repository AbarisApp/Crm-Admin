import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import JobworkoutStockStatement from "../../../../components/kingsonreports/jobworkReport/jobworkoutStockStatement/JobworkoutStockStatement";

function JobworkOutstockStatementPage() {
  const breadCrumbsTitle = {
    title_1: "Jobwork Out Stock Statement",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <JobworkoutStockStatement />
    </>
  );
}

export default JobworkOutstockStatementPage;
