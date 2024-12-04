import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import {
    getCrePhonePay,
    getNatureById,
    postNature,
    updateNatureById,
    updatePhonePay,
} from '../../../../../api/login/Login';

function PhonePayForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Phone Pay Credentials",
    };

    const [formData, setFormData] = useState({
        client_id: "",
        secret_key: "",
        paymentGat_sendBox_mode: false,
        payment_method: "",
        isProduction: false,
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
        try {
            const res = await updatePhonePay(formData);
            if (res?.statusCode == "200") {
                toastSuccessMessage("Phone Pay Credentials Successfully Updated");
                // setTimeout(() => navigate(`/nature_master`), 2000);
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
            const response = await getCrePhonePay(params.id);
            setFormData(response?.data);
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
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Phone Pay Credentials
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
                                            value={formData?.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Client ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="client_id"
                                            value={formData?.client_id}
                                            onChange={handleChange}
                                            placeholder="Client ID"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Secret Key</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="secret_key"
                                            value={formData?.secret_key}
                                            onChange={handleChange}
                                            placeholder="Secret Key"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Payment Gateway Sandbox Mode</label>
                                        <select
                                            className="form-select"
                                            name="paymentGat_sendBox_mode"
                                            value={formData?.paymentGat_sendBox_mode}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Mode</option>
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Payment Method</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="payment_method"
                                            value={formData?.payment_method}
                                            onChange={handleChange}
                                            placeholder="Payment Method"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Is Production Mode</label>
                                        <select
                                            className="form-select"
                                            name="isProduction"
                                            value={formData?.isProduction}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Mode</option>
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
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

export default PhonePayForm;
