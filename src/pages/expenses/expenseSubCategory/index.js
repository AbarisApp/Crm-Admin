import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ExpenseSubCategory from "../../../components/expenses/expenseSubCategory/ExpenseSubCategory";

function ExpenseSubCategoryPage() {
  const breadCrumbsTitle = {
    title_1: "Expense SubCategory",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <ExpenseSubCategory />
    </>
  );
}

export default ExpenseSubCategoryPage;
