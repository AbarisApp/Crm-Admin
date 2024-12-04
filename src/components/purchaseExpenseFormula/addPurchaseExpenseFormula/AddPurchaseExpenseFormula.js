import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { getAccPurchaseExpenseFormulaById, getAllLegers, postAccPurchaseExpenseFormula, updateAccPurchaseExpenseFormulaById } from '../../../api/login/Login';

export const AddPurchaseExpenseFormula = () => {
  const breadCrumbsTitle = {
    title_1: "master",
    title_2: "Purchase Expense",
  };

  // Set initial formData with the new structure
  const [formData, setFormData] = useState({
    name: "",
    acc_effect: "", // Set to string as per the example
    type: "",
    add_deduct: "",
    tax_type: "",
    calculation: "",
    calculation_based_on: "",
    P: "", // Set to string to match the new example
    expense_name: "",
    expense_account: "",
    column_name: "",
    uniq_column_name: ""
  });

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData };

    try {
      if (!params?.id) {
        const res = await postAccPurchaseExpenseFormula(payload);
        if (res?.statusCode == "200") {
          toastSuccessMessage("Purchase Expense Successfully Added");
          setTimeout(() => navigate(`/purchase-expense-formula`), 2000);
        }
      } else {
        const res = await updateAccPurchaseExpenseFormulaById(params.id, payload);
        if (res?.statusCode == "200") {
          toastSuccessMessage("Purchase Expense Successfully Updated");
          setTimeout(() => navigate(`/purchase-expense-formula`), 2000);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", { position: "top-right" });
    }
  };

  const toastSuccessMessage = (message) => {
    toast.success(message, { position: "top-right" });
  };

  const [leagersData, setLegersData] = useState([]);

  const getDatas = async () => {
    const response1 = await getAllLegers(0, 100, '', '', '');
    setLegersData(response1?.data.voucher);
  };

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (params?.id) {
        const response = await getAccPurchaseExpenseFormulaById(params.id);
        setFormData(response?.data || {});
      }
    };
    fetchData();
  }, [params?.id]);

  return (
    <>
      <ToastContainer />
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <div style={{ margin: "14px" }}>
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <div className="tbl-caption tbl-caption-2" style={{ padding: "10px" }}>
                <h4 className="heading mb-0">
                  {params?.id ? "UPDATE" : "ADD"} Purchase Expense
                </h4>
              </div>
              <form className="tbl-captionn" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-4 mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Account Effect</label>
                    <select
                      className="form-select"
                      name="acc_effect"
                      value={formData.acc_effect}
                      onChange={handleChange}
                    >
                      <option value="">Select Option</option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Type</label>
                    <select
                      className="form-select"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="">Select Type</option>
                      <option value="Fixed">Fixed</option>
                      <option value="Round Off">Round Off</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Add/Deduct</label>
                    <select
                      className="form-select"
                      name="add_deduct"
                      value={formData.add_deduct}
                      onChange={handleChange}
                    >
                      <option value="">Select Option</option>
                      <option value="add">Add</option>
                      <option value="deduct">Deduct</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Tax Type</label>
                    <select
                      className="form-select"
                      name="tax_type"
                      value={formData.tax_type}
                      onChange={handleChange}
                    >
                      <option value="">Select Tax Type</option>
                      <option value="TCS">TCS</option>
                      <option value="TDS">TDS</option>
                      <option value="Cess">Cess</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Calculation</label>
                    <select
                      className="form-select"
                      name="calculation"
                      value={formData.calculation}
                      onChange={handleChange}
                    >
                      <option value="">Select Calculation</option>
                      <option value="Fixed">Fixed</option>
                      <option value="Itemwise">Itemwise</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Calculation Based On</label>
                    <select
                      className="form-select"
                      name="calculation_based_on"
                      value={formData.calculation_based_on}
                      onChange={handleChange}
                    >
                      <option value="">Select Basis</option>
                      <option value="On Amount">On Amount</option>
                      <option value="On Disc Amount">On Disc Amount</option>
                      <option value="On Expense">On Expense</option>
                      <option value="On Column">On Column</option>
                      <option value="Net Amount">Net Amount</option>
                      <option value="On Page Column">On Page Column</option>
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>P</label>
                    <input
                      type="number"
                      className="form-control"
                      name="P"
                      value={formData.P}
                      onChange={handleChange}
                      placeholder="P"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Expense Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="expense_name"
                      value={formData.expense_name}
                      onChange={handleChange}
                      placeholder="Expense Name"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Expense Account</label>
                    <select
                      className="form-select"
                      name="expense_account"
                      value={formData.expense_account}
                      onChange={handleChange}
                    >
                      <option value="">Select Account</option>
                      {leagersData.map((ledger) => (
                        <option key={ledger._id} value={ledger._id}>
                          {ledger.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Column Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="column_name"
                      value={formData.column_name}
                      onChange={handleChange}
                      placeholder="Column Name"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <label>Unique Column Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="uniq_column_name"
                      value={formData.uniq_column_name}
                      onChange={handleChange}
                      placeholder="Unique Column Name"
                    />
                  </div>
                  <div className="col-xl-12 mb-3">
                    <button type="submit" className="btn btn-primary">
                      {params?.id ? "Update" : "Add"} Purchase Expense
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
