import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import SmsSetup from "../../../components/setup/smsSetup/SmsSetup";

function SmsSetupPage() {
  const breadCrumbsTitle = {
    title_1: "SMS Setup",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SmsSetup />
    </>
  );
}

export default SmsSetupPage;
