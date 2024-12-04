import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast, ToastContainer } from 'react-toastify';
import {
    getAccSalesInvoiceTypeById,
    getAccTaxMasterByPage,
    getAllLegers,
    getNatureById,
    postAccSalesInvoiceType,
    postNature,
    updateAccSalesInvoiceTypeById,
    updateNatureById,
} from '../../../../../api/login/Login';

function SalesInvoiceForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Sales Invoice Type",
    };

    const [formData, setFormData] = useState({
        name: "",
        sales_acc: "",
        sales_acc_id: "",
        form_name: "",
        tax_master: "",
        isMultiTax: false,
        fixed_amount: false,
        tax_type: "",
        tax_calculation: "",
        rcm: "",
        reverse_charge: false,
        export_type: "",
        pos_type: ""
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                const res = await postAccSalesInvoiceType({...formData,sales_acc_id:formData.sales_acc});
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Invoice Type Successfully Added");
                    setTimeout(() => navigate(`/Sales-Invoice-Type`), 2000);
                }
            } else {
                const res = await updateAccSalesInvoiceTypeById(params.id, {...formData,sales_acc_id:formData.sales_acc});
                if (res?.statusCode === "200") {
                    toastSuccessMessage("Sales Invoice Type Successfully Updated");
                    setTimeout(() => navigate(`/Sales-Invoice-Type`), 2000);
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
                const response = await getAccSalesInvoiceTypeById(params.id);
                setFormData(response?.data || {});
            }
        };
        fetchData();
    }, [params?.id]);

    const [taxMasterData, setTaxMasterData] = useState([]);
    const [leagersData, setLegersData] = useState([]);
    const getDatas = async () => {
        const response = await getAccTaxMasterByPage(0, 100);
        const response1 = await getAllLegers(0, 100 ,'' ,'' ,'');
        setLegersData(response1?.data.voucher);
        setTaxMasterData(response?.data);
    }

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
                                    {params?.id ? "UPDATE" : "ADD"} Sales Invoice Type
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
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Sales Account</label>
                                        <select
                                            className="form-select"
                                            name="sales_acc"
                                            value={formData.sales_acc}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Sales Account</option>
                                            {/* Map options here */}
                                            {leagersData?.map((option) => (
                                                <option key={option._id} value={option._id}>
                                                    {option.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Form Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="form_name"
                                            value={formData.form_name}
                                            onChange={handleChange}
                                            placeholder="Form Name"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Tax Master</label>
                                        <select
                                            className="form-select"
                                            name="tax_master"
                                            value={formData.tax_master}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Tax Master</option>
                                            {taxMasterData?.map((tax) => (
                                                <option key={tax._id} value={tax._id}>
                                                    {tax.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Is MultiTax</label>
                                        <select
                                            className="form-select"
                                            name="isMultiTax"
                                            value={formData.isMultiTax ? "true" : "false"}
                                            onChange={handleChange}
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Fixed Amount</label>
                                        <select
                                            className="form-select"
                                            name="fixed_amount"
                                            value={formData.fixed_amount ? "true" : "false"}
                                            onChange={handleChange}
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
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

                                            <option value="VAT">VAT</option>
                                            <option value="GST">GST</option>
                                            <option value="IGST">IGST</option>
                                            <option value="FREE">FREE</option>
                                            <option value="Non GST">Non GST</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Tax Calculation</label>
                                        <select
                                            className="form-select"
                                            name="tax_calculation"
                                            value={formData.tax_calculation}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Tax Calculation</option>
                                            <option value="itemwise">Itemwise</option>
                                            <option value="fixed">Fixed</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>RCM</label>
                                        <select
                                            className="form-select"
                                            name="rcm"
                                            value={formData.rcm}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select RCM</option>
                                            <option value="RCM">RCM</option>
                                            <option value="NONE">None</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Reverse Charge</label>
                                        <select
                                            className="form-select"
                                            name="reverse_charge"
                                            value={formData.reverse_charge ? "true" : "false"}
                                            onChange={handleChange}
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>Export Type</label>
                                        <select
                                            className="form-select"
                                            name="export_type"
                                            value={formData.export_type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Export Type</option>
                                            <option value="NONE">None</option>
                                            <option value="WOPAY">WOPAY</option>
                                            <option value="WPAY">WPAY</option>
                                            <option value="SEZWOP">SEZWOP</option>
                                            <option value="SEZ">SEZ</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label>POS Type</label>
                                        <select
                                            className="form-select"
                                            name="pos_type"
                                            value={formData.pos_type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select POS Type</option>
                                            <option value="Regular">Regular</option>
                                            <option value="POS">POS</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-2 mb-3">
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

export default SalesInvoiceForm;
