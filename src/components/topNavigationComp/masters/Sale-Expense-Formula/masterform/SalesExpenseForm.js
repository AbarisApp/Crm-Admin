import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import {
    getAccSalesExpenseFormulaById,
    getAllLegers,
    postAccSalesExpenseFormula,
    updateAccSalesExpenseFormulaById,
} from '../../../../../api/login/Login';

function SalesExpenseForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Sale Expense Formula",
    };

    const [formData, setFormData] = useState({
        name: "",
        acc_effect: false,
        acc_type: "",
        add_deduct: "",
        tax_type: "",
        calculation: "",
        cal_type: "",
        Percentage: 0,
        calculation_based_on: "",
        calculation_type: "",
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
        const payload = {
            name: formData.name,
            acc_effect: formData.acc_effect,
            acc_type: formData.acc_type,
            add_deduct: formData.add_deduct,
            tax_type: formData.tax_type,
            calculation: formData.calculation,
            cal_type: formData.cal_type,
            Percentage: parseFloat(formData.Percentage),
            calculation_based_on: formData.calculation_based_on,
            calculation_type: formData.calculation_type,
            expense_name: formData.expense_name,
            expense_account: formData.expense_account,
            column_name: formData.column_name,
            uniq_column_name: formData.uniq_column_name,
        };

        try {
            if (!params?.id) {
                const res = await postAccSalesExpenseFormula(payload);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Added");
                    setTimeout(() => navigate(`/Sale-Expense-Formula`), 2000);
                }
            } else {
                const res = await updateAccSalesExpenseFormulaById(params.id, payload);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Updated");
                    setTimeout(() => navigate(`/Sale-Expense-Formula`), 2000);
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

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getAccSalesExpenseFormulaById(params.id);
                setFormData(response?.data || {});
            }
        };
        fetchData();
    }, [params?.id]);

    const [leagersData, setLegersData] = useState([]);
    const getDatas = async () => {
        const response1 = await getAllLegers(0, 100, '', '', '');
        setLegersData(response1?.data.voucher);
    };

    useEffect(() => {
        getDatas();
    }, []);

    return (
        <>
            <ToastContainer />
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Sale Expense Formula
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
                                        <label>A/C Effect</label>
                                        <select
                                            className="form-select"
                                            name="acc_effect"
                                            value={formData.acc_effect}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Type</label>
                                        <select
                                            className="form-select"
                                            name="acc_type"
                                            value={formData.acc_type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="tax">Tax</option>
                                            <option value="Expense">Expense</option>
                                            <option value="Brokerage">Brokerage</option>
                                            <option value="Cst">CST</option>
                                            <option value="Other Expenses">Other Expenses</option>
                                            <option value="Service Tax">Service Tax</option>
                                            <option value="Octroi">Octroi</option>
                                            <option value="Addi Tax">Additional Tax</option>
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
                                            <option value="">Select Add/Deduct</option>
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
                                        <label>@%</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="Percentage"
                                            value={formData.Percentage}
                                            onChange={handleChange}
                                            placeholder="%"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Calculation Based On</label>
                                        <select
                                            className="form-select"
                                            name="calculation_based_on"
                                            value={formData.calculation_based_on}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Calculation Based On</option>
                                            <option value="On Amount">On Amount</option>
                                            <option value="on Disc Amount">On Disc Amount</option>
                                            <option value="On Expense">On Expense</option>
                                            <option value="On Column">On Column</option>
                                            <option value="Net Amount">Net Amount</option>
                                            <option value="On Page Column">On Page Column</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Calculation Type</label>
                                        <select
                                            className="form-select"
                                            name="calculation_type"
                                            value={formData.calculation_type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Calculation Type</option>
                                            <option value="Fixed">Fixed</option>
                                            <option value="Round Off">Round Off</option>
                                        </select>
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
                                            required
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
                                            <option value="">Select Expense Account</option>
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
                                            required
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
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SalesExpenseForm;
