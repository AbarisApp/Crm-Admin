import { Button } from "react-bootstrap";
import { getAccGroupByPage, getAccLedgerById, getBankMaster, postAccLedger, updateAccLedgerById } from "../../../../../../../api/login/Login";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


const LadgerAdd = ({ editId, ladgerOpenOf2, getFloorMasters }) => {
    const [formData, setFormData] = useState({
        name: "",
        alias: "",
        AC_name: "",
        AC_no: "",
        IFSC_code: "",
        branch_name: "",
        BSR_code: "",
        amount: "0",
        bsrCode: "",
        voucherDate: "",
        voucherNo: "",
        AccLedgerGroupId: "",
        accBalanceType: "",
        selectBank: "",
        accountHoldersName: "",
        accountNumber: "",
        ifscCode: "",
        bankName: "",
        bankConfiguration: "",
        chequeBooks: "",
        chequePrintingConfig: "",
        selectCompany: "",
        AccAddLine1: "",
        AccAddLine2: "",
        city: "",
        state: "",
        country: "",
        phoneNo: "",
        email: "",
        gstin: "",
        accLedgerEntryDateTime: "",
        taxRegistrationDetails: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${editId ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const params = useParams();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        // e.preventDefault();
        // console.log("Form Data Submitted: ", formData);
        try {
            let response;
            if (editId) {
                response = await updateAccLedgerById(editId, formData);
            } else {
                response = await postAccLedger(formData);
            }

            if (response?.statusCode === "200") {
                toastSuccessMessage("Ledger processed successfully");
                // navigate(editId ? `/customer-view/${params.id}/ledgers` : "/account-management");
                ladgerOpenOf2()
                getFloorMasters()
            }
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };
    // const addBankFromSelect = async()=>{
    //   await 
    // }
    const [groups, setGroup] = useState([])
    const [banks, setBank] = useState([])
    const getGroups = async () => {
        const res = await getAccGroupByPage(0, 100)
        const res2 = await getBankMaster(0, 100)
        setGroup(res?.data)
        setBank(res2?.data)
    }
    useEffect(() => {
        getGroups()
    }, [])

    useEffect(() => {
        const fetchMarketTypeData = async () => {
            if (editId) {
                const response = await getAccLedgerById(editId);
                if (response?.data) {
                    setFormData(response.data);
                }
            }
        };

        fetchMarketTypeData();
    }, [editId]);

    return (
        <div>
            <ToastContainer />
            <h4>{editId ? 'Update' : 'Add'} Ledger</h4>
            <div className="container mt-4 card">
                <div>
                    <form className="row" >
                        {/* Name and Alias */}
                        <div className="mb-3 col-4">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="alias" className="form-label">Alias</label>
                            <input type="text" className="form-control" id="alias" name="alias" value={formData.alias} onChange={handleInputChange} />
                        </div>

                        {/* Account Details */}
                        <div className="mb-3 col-4">
                            <label htmlFor="AC_name" className="form-label">Account Name</label>
                            <input type="text" className="form-control" id="AC_name" name="AC_name" required value={formData.AC_name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="AC_no" className="form-label">Account Number</label>
                            <input type="text" className="form-control" id="AC_no" name="AC_no" required value={formData.AC_no} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="IFSC_code" className="form-label">IFSC Code</label>
                            <input type="text" className="form-control" id="IFSC_code" name="IFSC_code" required value={formData.IFSC_code} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="branch_name" className="form-label">Branch Name</label>
                            <input type="text" className="form-control" id="branch_name" name="branch_name" required value={formData.branch_name} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="BSR_code" className="form-label">BSR Code</label>
                            <input type="text" className="form-control" id="BSR_code" name="BSR_code" value={formData.BSR_code} onChange={handleInputChange} />
                        </div>

                        {/* GSTIN and Balance Details */}
                        <div className="mb-3 col-4">
                            <label htmlFor="gstin" className="form-label">GSTIN</label>
                            <input type="text" className="form-control" id="gstin" name="gstin" value={formData.gstin} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="opening_balance" className="form-label">Opening Balance</label>
                            <input type="number" className="form-control" id="opening_balance" name="opening_balance" value={formData.opening_balance} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="opening_balance_type" className="form-label">Opening Balance Type</label>
                            <select className="form-select" id="opening_balance_type" name="opening_balance_type" value={formData.opening_balance_type} onChange={handleInputChange}>
                                <option value="">Select</option>
                                <option value="Cr">Credit</option>
                                <option value="Dr">Debit</option>
                            </select>
                        </div>

                        {/* Address Details */}
                        <div className="mb-3 col-4">
                            <label htmlFor="AccAddLine1" className="form-label">Address Line 1</label>
                            <input type="text" className="form-control" id="AccAddLine1" name="AccAddLine1" value={formData.AccAddLine1} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="AccAddLine2" className="form-label">Address Line 2</label>
                            <input type="text" className="form-control" id="AccAddLine2" name="AccAddLine2" value={formData.AccAddLine2} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="state" className="form-label">State</label>
                            <input type="text" className="form-control" id="state" name="state" value={formData.state} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" className="form-control" id="country" name="country" value={formData.country} onChange={handleInputChange} />
                        </div>

                        {/* Contact Information */}
                        <div className="mb-3 col-4">
                            <label htmlFor="phoneNo" className="form-label">Mobile</label>
                            <input type="number" className="form-control" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>

                        {/* Credit Information */}
                        <div className="mb-3 col-4">
                            <label htmlFor="credit_limit" className="form-label">Credit Limit</label>
                            <input type="number" className="form-control" id="credit_limit" name="credit_limit" value={formData.credit_limit} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="credit_days" className="form-label">Credit Days</label>
                            <input type="number" className="form-control" id="credit_days" name="credit_days" value={formData.credit_days} onChange={handleInputChange} />
                        </div>

                        {/* License Information */}
                        <div className="mb-3 col-4">
                            <label htmlFor="fert_license_no" className="form-label">Fertilizer License No</label>
                            <input type="text" className="form-control" id="fert_license_no" name="fert_license_no" value={formData.fert_license_no} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="fert_license_no_valid_upto" className="form-label">Valid Upto</label>
                            <input type="date" className="form-control" id="fert_license_no_valid_upto" name="fert_license_no_valid_upto" value={formData.fert_license_no_valid_upto} onChange={handleInputChange} />
                        </div>

                        {/* Additional Fields */}
                        <div className="mb-3 col-4">
                            <label htmlFor="accLedgerEntryDateTime" className="form-label">Ledger Entry Date & Time</label>
                            <input type="datetime-local" className="form-control" id="accLedgerEntryDateTime" name="accLedgerEntryDateTime" value={formData.accLedgerEntryDateTime} onChange={handleInputChange} />
                        </div>

                        <div className="mb-3 col-4">
                            <label htmlFor="accountHoldersName" className="form-label">Account Holder's Name</label>
                            <input type="text" className="form-control" id="accountHoldersName" name="accountHoldersName" value={formData.accountHoldersName} onChange={handleInputChange} />
                        </div>

                        <div className="mb-3 col-4">
                            <label htmlFor="bankConfiguration" className="form-label">Bank Configuration</label>
                            <input type="text" className="form-control" id="bankConfiguration" name="bankConfiguration" value={formData.bankConfiguration} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="bankName" className="form-label">Bank Name</label>
                            <input type="text" className="form-control" id="bankName" name="bankName" value={formData.bankName} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="bsrCode" className="form-label">BSR Code</label>
                            <input type="text" className="form-control" id="bsrCode" name="bsrCode" value={formData.bsrCode} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="chequeBooks" className="form-label">Cheque Books</label>
                            <input type="text" className="form-control" id="chequeBooks" name="chequeBooks" value={formData.chequeBooks} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="chequePrintingConfig" className="form-label">Cheque Printing Config</label>
                            <input type="text" className="form-control" id="chequePrintingConfig" name="chequePrintingConfig" value={formData.chequePrintingConfig} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
                            <input type="text" className="form-control" id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="selectBank" className="form-label">Select Bank</label>
                            <select className="form-select" id="selectBank" name="selectBank" value={formData.selectBank} onChange={handleInputChange}>
                                <option value="">Select</option>
                                {banks && banks?.map((group) => {
                                    return <option value={group._id}>{group.bank_name}</option>
                                })}
                            </select>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="selectCompany" className="form-label">Select Company</label>
                            <input type="text" className="form-control" id="selectCompany" name="selectCompany" value={formData.selectCompany} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="taxRegistrationDetails" className="form-label">Tax Registration Details</label>
                            <input type="text" className="form-control" id="taxRegistrationDetails" name="taxRegistrationDetails" value={formData.taxRegistrationDetails} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="AccLedgerGroupId" className="form-label">Under Group</label>
                            <select className="form-select" id="AccLedgerGroupId" name="AccLedgerGroupId" value={formData.AccLedgerGroupId} onChange={handleInputChange}>
                                <option value="">Select</option>
                                {groups && groups?.map((group) => {
                                    return <option value={group._id}>{group.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="voucherDate" className="form-label">Voucher Date</label>
                            <input type="date" className="form-control" id="voucherDate" name="voucherDate" value={formData.voucherDate} onChange={handleInputChange} />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="voucherNo" className="form-label">Voucher No</label>
                            <input type="text" className="form-control" id="voucherNo" name="voucherNo" value={formData.voucherNo} onChange={handleInputChange} />
                        </div>

                        {/* Submit Button */}
                        <div className="mb-3 col-12">
                            <Button type="button" className="btn btn-primary" onClick={handleSubmit}>
                                {editId ? 'Update' : 'Add'}
                            </Button>
                            <Button type="button" className="btn btn-danger" onClick={ladgerOpenOf2}>Cancle</Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
}

export default LadgerAdd