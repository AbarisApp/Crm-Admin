
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import SalesmanWiseReport from '../../../../components/report/analysisReport/salesmanWiseReport/SalesmanWiseReport';

function SalesmanWiseReportPage() {
 const breadCrumbsTitle = {
   title_1: "Salesman Wise Report",
 };
 return (
   <>
     <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
     <SalesmanWiseReport />
   </>
 );
}

export default SalesmanWiseReportPage
