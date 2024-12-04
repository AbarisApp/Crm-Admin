import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import { getNatureById, postNature, updateNatureById } from '../../../../../api/login/Login';

function SalesLinksForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Link Expense With Invoice Type",
    };

    const [formData, setFormData] = useState({
        name: "",
        acEffect: "",
        type: "",
        addOrDeduct: "",
        taxType: "",
        calculation: "",
        calculationType: "",
        percentage: "",
        calculationBasedOn: "",
        expenseName: "",
        expenseAccount: "",
        columnName: "",
        uniqColumnName: ""
    });

    const [availableExpenses, setAvailableExpenses] = useState([
        "DISCOUNT", "IGST 12%", "IGST 18%", "IGST 28%", "IGST 3%", "IGST 5%", 
        "IGST ON LR", "Khud nu Discount", "Nagu Discount", "ROUND OFF",
        "DISCOUNT", "IGST 12%", "IGST 18%", "IGST 28%", "IGST 3%", "IGST 5%", 
        "IGST ON LR", "Khud nu Discount", "Nagu Discount", "ROUND OFF",
        "DISCOUNT", "IGST 12%", "IGST 18%", "IGST 28%", "IGST 3%", "IGST 5%", 
        "IGST ON LR", "Khud nu Discount", "Nagu Discount", "ROUND OFF"
    ]);
    const [selectedExpenses, setSelectedExpenses] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                const res = await postNature(formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Added");
                    setTimeout(() => navigate(`/nature_master`), 2000);
                }
            } else {
                const res = await updateNatureById(params.id, formData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Expense Formula Successfully Updated");
                    setTimeout(() => navigate(`/nature_master`), 2000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(message, { position: "top-right" });
    };

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getNatureById(params.id);
                setFormData(response?.data || {});
            }
        };
        fetchData();
    }, [params?.id]);

    // Function to handle adding an expense
    const addExpense = () => {
        const selectedExpense = availableExpenses[0];
        if (selectedExpense && !selectedExpenses.includes(selectedExpense)) {
            setSelectedExpenses([...selectedExpenses, selectedExpense]);
        }
    };

    // Function to handle removing a selected expense
    const removeExpense = () => {
        const updatedExpenses = [...selectedExpenses];
        updatedExpenses.splice(0, 1);
        setSelectedExpenses(updatedExpenses);
    };

    // Function to move a selected expense up
    const moveUp = () => {
        if (0 > 0) {
            const updatedExpenses = [...selectedExpenses];
            [updatedExpenses[0], updatedExpenses[0 - 1]] = 
                [updatedExpenses[0 - 1], updatedExpenses[0]];
            setSelectedExpenses(updatedExpenses);
        }
    };

    // Function to move a selected expense down
    const moveDown = () => {
        if (0 < selectedExpenses.length - 1) {
            const updatedExpenses = [...selectedExpenses];
            [updatedExpenses[0], updatedExpenses[0 + 1]] = 
                [updatedExpenses[0 + 1], updatedExpenses[0]];
            setSelectedExpenses(updatedExpenses);
        }
    };

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
                                    {params?.id ? "UPDATE" : "ADD"} Link Expense With Invoice Type
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    {/* Invoice Type Selector */}
                                    <div className="col-xl-4 mb-3">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                        />
                                      <button type="button" className="btn btn-primary mb-2" >Get Expense List</button>
                                    </div>

                                    {/* Available and Selected Expense List */}
                                    <div className="col-xl-12 mb-3">
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <label>Available Expense List</label>
                                                <select className="form-control" size="10" style={{height:"300px"}}>
                                                    {availableExpenses.map((expense, index) => (
                                                        <option key={index} value={expense}>{expense}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="mx-3 d-flex flex-column justify-content-center">
                                                <button type="button" className="btn btn-primary mb-2" onClick={addExpense}>Add</button>
                                                <button type="button" className="btn btn-secondary mb-2" onClick={moveUp}>Up</button>
                                                <button type="button" className="btn btn-secondary mb-2" onClick={moveDown}>Down</button>
                                                <button type="button" className="btn btn-danger mb-2" onClick={removeExpense}>Remove</button>
                                            </div>

                                            <div className="flex-grow-1">
                                                <label>Selected Expense</label>
                                                <select className="form-control" size="10" style={{height:"300px"}}>
                                                    {selectedExpenses.map((expense, index) => (
                                                        <option key={index} value={expense}>{expense}</option>
                                                    ))}
                                                </select>
                                                <p>Selected Expense: {selectedExpenses.length}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 mb-3">
                                        <button className="btn btn-primary" type="submit">
                                            {params?.id ? "Update" : "Add"}
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
}

export default SalesLinksForm;
