
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import JobworkOutOrder from '../../../../components/kingsonreports/jobworkReport/jobworkOutOrder/JobworkOutOrder';

function JobworkoutOrderPage() {
  const breadCrumbsTitle = {
    title_1: "Jobwork Out Order",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <JobworkOutOrder />
    </>
  );
}

export default JobworkoutOrderPage
