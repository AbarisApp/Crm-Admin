import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import TcsMaster from "../../../../components/setup/taxSetup/tcsMaster/TcsMaster";

function TcsMasterPage() {
  const breadCrumbsTitle = {
    title_1: "TCS Master",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <TcsMaster />
    </>
  );
}

export default TcsMasterPage;
