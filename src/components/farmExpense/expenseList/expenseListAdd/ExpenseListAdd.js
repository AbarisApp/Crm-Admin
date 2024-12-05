import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getLeadExpenseById, postLeadExpense, updateLeadExpenseById } from '../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';

export const ExpenseListAdd = () => {
    const [formData, setFormData] = useState({
        purpose_name: '',
        date: '',
        details: '',
        total_amount: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate()
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const params = useParams()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add form submission logic here
        try {
            if (!params?.update) {
                const res = await postLeadExpense({ ...formData, user_id: params.id });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Expense added successfully");
                    setTimeout(() => navigate(`/customer-view/${params?.id}/expenses-view`), 1000);
                }
            } else {
                const res = await updateLeadExpenseById(params.id, { ...formData, user_id: params.id });
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Expense updated successfully");
                    setTimeout(() => navigate(`/customer-view/${params?.id}/expenses-view`), 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (params?.update) {
                    const response = await getLeadExpenseById(params.update);

                    setFormData(response.data);
                }
            } catch (error) {
                console.error("Error fetching task:", error);
            }
        };

        fetchTask();
    }, [params?.update]);

    return (
        <>
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"> Add New Expense </h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="purpose_name"
                                                    value={formData.purpose_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="date">Date:</label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="details">Details:</label>
                                                <input
                                                    type="text"
                                                    id="details"
                                                    name="details"
                                                    value={formData.details}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Details"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="total_amount">Total Amount:</label>
                                                <input
                                                    type="number"
                                                    id="total_amount"
                                                    name="total_amount"
                                                    value={formData.total_amount}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Total Amount"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
