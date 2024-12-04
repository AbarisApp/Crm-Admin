import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import CustomTextArea from '../../../../common/CustomTextArea';
import { baseUrlImage } from '../../../../baseUrl';
import { clodinaryImage, postfund } from '../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
function FundTransfer({ show, handleClose ,datas}) {
    console.log(datas);
    
    const initialValues = {
        paymentDate: new Date().toISOString().slice(0, 10),  // Autofill date
        status: 'Approved',
        bankRef: '',
        amount: '',
        bank: '',
        method: 'UPI',
        account_number: '',
        receipt_img: '',
        remark: '',
        user_id: datas?._id,  // Should be dynamically set if needed
    };

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!values.paymentDate) {
            newErrors.paymentDate = "Payment Date is required";
        }
        if (!values.bank) {
            newErrors.bank = "Bank is required";
        }
        if (!values.amount) {
            newErrors.amount = "Amount is required";
        }
        if (!values.bankRef) {
            newErrors.bankRef = "Bank Reference is required";
        }
        if (!values.status) {
            newErrors.status = "Status is required";
        }
        if (!values.method) {
            newErrors.method = "Payment method is required";
        }
        if (!values.account_number) {
            newErrors.account_number = "Account number is required";
        }
        if (!values.remark) {
            newErrors.remark = "Remark is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const toastSuccessMessage = (message) => {
        toast.success( {message}, {
            position: "top-right",
        });
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
        if (validate()) {
            const clone = { ...values , receipt_img: image , user_id: datas?._id};
            const res = await postfund(clone);
            if (res?.statusCode == "200") {
                toastSuccessMessage("Fund Transfer Successfully");
                setValues(initialValues);
              setTimeout(() => {
                handleClose()
              }, 1000);
            }
            // Submit form data logic here
        }
    };

    const [image, setImage] = useState(null);
    const handleFileChange = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} className='dialog-box' id="dialog-box">
                <Modal.Header closeButton>
                    <ToastContainer/>
                    <Modal.Title>Fund Transfer To ({datas?.name})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit} className="tbl-captionn">
                        <div className="row">
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="date"
                                    value={values.paymentDate}
                                    hasError={errors.paymentDate}
                                    onChange={handleChange}
                                    id="paymentDate"
                                    name="paymentDate"
                                    placeholder="Payment Date"
                                    disabled
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="text"
                                    value={values.bank}
                                    hasError={errors.bank}
                                    onChange={handleChange}
                                    id="bank"
                                    name="bank"
                                    placeholder="Bank Name"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="number"
                                    value={values.amount}
                                    hasError={errors.amount}
                                    onChange={handleChange}
                                    id="amount"
                                    name="amount"
                                    placeholder="Amount"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="text"
                                    value={values.bankRef}
                                    hasError={errors.bankRef}
                                    onChange={handleChange}
                                    id="bankRef"
                                    name="bankRef"
                                    placeholder="Bank Reference"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <select
                                    className="form-select"
                                    value={values.method}
                                    name="method"
                                    onChange={handleChange}
                                    aria-label="Select Method"
                                >
                                    <option disabled value="">Select Method</option>
                                    <option value="NEFT">NEFT</option>
                                    <option value="RTGS">RTGS</option>
                                    <option value="UPI">UPI</option>
                                </select>
                                {errors.method && <div className="error">{errors.method}</div>}
                            </div>
                            <div className="col-xl-6 mb-3">
                                <select
                                    className="form-select"
                                    value={values.status}
                                    name="status"
                                    onChange={handleChange}
                                    aria-label="Select Status"
                                >
                                    <option disabled value="">Select Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                                {errors.status && <div className="error">{errors.status}</div>}
                            </div>
                            <div className="col-xl-6 mb-3">
                                <CustomInputField
                                    type="text"
                                    value={values.account_number}
                                    hasError={errors.account_number}
                                    onChange={handleChange}
                                    id="account_number"
                                    name="account_number"
                                    placeholder="Account Number"
                                />
                            </div>
                            <div className="col-xl-6 mb-3">
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    id="receipt_img"
                                    name="receipt_img"
                                    className="form-control"
                                />
                                  {image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${image}`} />}
                            </div>
                            <div className="col-xl-12 mb-3">
                                <CustomTextArea
                                    value={values.remark}
                                    hasError={errors.remark}
                                    onChange={handleChange}
                                    id="remark"
                                    name="remark"
                                    placeholder="Remark"
                                />
                            </div>
                            <div className='border-top'>
                                <button className="btn btn-primary pd-x-20 rounded-2" type="submit" style={{ marginTop: "15px" }}> Update </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FundTransfer;
