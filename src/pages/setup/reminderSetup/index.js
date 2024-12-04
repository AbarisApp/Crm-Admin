import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ReminderSetup from "../../../components/setup/reminderSetup/ReminderSetup";

function ReminderSetupPager() {
  const breadCrumbsTitle = {
    title_1: "Reminder Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ReminderSetup />
    </>
  );
}
export default ReminderSetupPager;
