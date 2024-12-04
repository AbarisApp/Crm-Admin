import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import SchedulerSetup from "../../../components/setup/schedulerSetup/SchedulerSetup";

function SchedulerSetupPage() {
  const breadCrumbsTitle = {
    title_1: "Scheduler Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SchedulerSetup />
    </>
  );
}

export default SchedulerSetupPage;
