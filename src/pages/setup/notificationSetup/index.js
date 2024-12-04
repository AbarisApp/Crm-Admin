import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import NotificationSetup from "../../../components/setup/notificationSetup/NotificationSetup";

function NotificationSetupPage() {
  const breadCrumbsTitle = {
    title_1: "Notification Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <NotificationSetup />
    </>
  );
}

export default NotificationSetupPage;
