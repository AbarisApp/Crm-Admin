import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ExpenseList from "../../../components/expenses/expenseList/ExpenseList";

function ExpenseListPage() {
  const breadCrumbsTitle = {
    title_1: "Expense List",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ExpenseList />
    </>
  );
}

export default ExpenseListPage;
