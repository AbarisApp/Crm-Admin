import React, { useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { IoSettings } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import TagsInput from 'react-tagsinput';
// import 'react-tagsinput/react-tagsinput.css';
import { FaTag } from "react-icons/fa6";

function AddProposalComp() {
    const [show, setShow] = useState(false);
    const [tags, setTags] = useState([]);

    const handleTagsChange = (newTags) => {
        setTags(newTags);
    };

    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Proposal",
    };



    const params = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        subject: "",
        related: "",
        costomer: "",
        date: "",
        oepnTill: "",
        currency: "",
        discountType: "",
        status: "",
        assigned: "",
        to: "",
        Address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        email: "",
        phone: "",
        item: "",
        qty: "",
        tax: "",
        rate: "",
        amt: "",
        rateUsd: "",
        tax1: "",
        tax2: "",
        unit: "",
    });

    const validate = (values) => {
        let errors = {};
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        if (!values.related) {
            errors.related = "Related is required";
        }
        if (!values.costomer) {
            errors.costomer = "Customer is required";
        }
        if (!values.date) {
            errors.date = "Date is required";
        }
        if (!values.currency) {
            errors.currency = "Currency is required";
        }
        if (!values.to) {
            errors.to = "To is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.rateUsd) {
            errors.rateUsd = "Rate - USD is required";
        }
        return errors;
    };


    const submitForm = async (values) => {
        console.log('values---', values);
    };

    // useEffect(() => {
    //     const fetchContestData = async () => {
    //         if (params?.id) {
    //             const response = await getCallConvertStatusById(params.id);
    //             setInitialValues({
    //                 name: response?.data?.name || "",
    //                 joiningAmount: response?.data?.joiningAmount || "",
    //                 contestType: response?.data?.contestType || "",
    //                 priceMoney: response?.data?.priceMoney || "",
    //                 startDate: response?.data?.startDate || "",
    //                 endDate: response?.data?.endDate || "",
    //                 image: null, // Image will be uploaded again
    //             });
    //         }
    //     };

    //     fetchContestData();
    // }, [params?.id]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Proposal
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const { values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className='col-lg-6'>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Subject <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                            placeholder="Subject"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Related <span className='text-danger'>*</span></h6>
                                                        <select
                                                            className="form-select"
                                                            name="related"
                                                            value={values.related}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Contest Type</option>
                                                            <option value="Free">Lead</option>
                                                            <option value="Paid">Customer</option>
                                                        </select>
                                                        {touched.related && errors.related && (
                                                            <div className="text-danger">{errors.related}</div>
                                                        )}
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Customer <span className='text-danger'>*</span></h6>
                                                        <select
                                                            className="form-select"
                                                            name="costomer"
                                                            value={values.costomer}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="Free">Lead</option>
                                                            <option value="Paid">Customer</option>
                                                        </select>
                                                        {touched.costomer && errors.costomer && (
                                                            <div className="text-danger">{errors.costomer}</div>
                                                        )}
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Date <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="date"
                                                            value={values?.date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.date}
                                                            name="date"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Open Till</h6>
                                                        <CustomInputField
                                                            type="date"
                                                            value={values?.startDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="startDate"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Currency <span className='text-danger'>*</span></h6>
                                                        <select
                                                            className="form-select"
                                                            name="currency"
                                                            value={values.currency}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Contest Type</option>
                                                            <option value="USD">USD</option>
                                                            <option value="EUR">EUR</option>
                                                        </select>
                                                        {touched.currency && errors.currency && (
                                                            <div className="text-danger">{errors.currency}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Discount Type</h6>
                                                        <select
                                                            className="form-select"
                                                            name="discountType"
                                                            value={values.discountType}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Contest Type</option>
                                                            <option value="Free">No Discount</option>
                                                            <option value="Paid">Before Tax</option>
                                                            <option value="Paid">After Tax</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6><FaTag /> Tags</h6>
                                                        {/* <TagsInput value={tags} onChange={handleTagsChange} /> */}
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <div>
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Allow Comments</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='col-lg-6'>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Status</h6>
                                                        <select
                                                            className="form-select"
                                                            name="status"
                                                            value={values.status}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Status</option>
                                                            <option value="Free">Draft</option>
                                                            <option value="Paid">Sent</option>
                                                            <option value="Paid">Open</option>
                                                            <option value="Paid">Revised</option>
                                                            <option value="Paid">Declined</option>
                                                            <option value="Paid">Accepted</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Assigned</h6>
                                                        <select
                                                            className="form-select"
                                                            name="assigned"
                                                            value={values.assigned}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Assigned</option>
                                                            <option value="Free">Sydney Mertz</option>
                                                            <option value="Paid">Stevie Skiles</option>
                                                            <option value="Paid">Lucas Osinski</option>
                                                            <option value="Paid">Dedric Stamm</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>To <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.to}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.to}
                                                            name="to"
                                                            placeholder="To"
                                                        />
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Address</h6>
                                                        <div class="form-group">
                                                            <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Address' id="exampleFormControlTextarea1" rows="3"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>City</h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.city}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="city"
                                                            placeholder="City"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>State</h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.state}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.state}
                                                            name="state"
                                                            placeholder="State"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Country</h6>
                                                        <select
                                                            className="form-select"
                                                            name="country"
                                                            value={values.country}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            <option value="">Select Country</option>
                                                            <option value="Free">India</option>
                                                            <option value="Paid">China</option>
                                                            <option value="Paid">America</option>
                                                            <option value="Paid">Japan</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Zip Code</h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.zipCode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="zipCode"
                                                            placeholder="Zip Code"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Email <span className='text-danger'>*</span></h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <h6>Phone </h6>
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            name="phone"
                                                            placeholder="Phone"
                                                        />
                                                    </div>

                                                </div>

                                                <div className='row mt-2 mb-3'>
                                                    <div className='col-lg-6'>
                                                        <div style={{ display: 'flex' }}>
                                                            <div className="col-lg-11 mb-3">
                                                                <select
                                                                    className="form-select"
                                                                    name="item"
                                                                    value={values.item}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                >
                                                                    <option value="">Add Item</option>
                                                                    <option value="abc">ABC</option>
                                                                    <option value="def">DEF</option>
                                                                </select>
                                                            </div>

                                                            <div className='col-lg-1 mb-3' style={{ padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgray' }}>
                                                                <button className='btn btn-primary' type='button' onClick={() => setShow(true)}>+</button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <h6>Show quantity as:</h6>
                                                            <div className="form-check me-2">
                                                                <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                    Qty
                                                                </label>
                                                            </div>
                                                            <div className="form-check me-2">
                                                                <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    Hours
                                                                </label>
                                                            </div>
                                                            <div className="form-check me-2">
                                                                <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                    Qty/Hours
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <Modal
                                                        show={show}
                                                        onHide={() => setShow(false)}
                                                        dialogClassName="modal-50w"
                                                        aria-labelledby="example-custom-modal-styling-title"
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-custom-modal-styling-title">
                                                                Add New Item
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div className='row'>
                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Description</h6>
                                                                    <div class="form-group">
                                                                        <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Long Description</h6>
                                                                    <div class="form-group">
                                                                        <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Long Description' id="exampleFormControlTextarea1" rows="5"></textarea>
                                                                    </div>
                                                                </div>


                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Rate - USD (Base Currency) <span className='text-danger'>*</span></h6>
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values?.rateUsd}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.rateUsd}
                                                                        name="rateUsd"
                                                                        placeholder="Rate - USD"
                                                                    />
                                                                </div>

                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Tax 1</h6>
                                                                    <select
                                                                        className="form-select"
                                                                        name="tax1"
                                                                        value={values.tax1}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    >
                                                                        <option value="">Select Tax1</option>
                                                                        <option value="Fr3e3mn3e">No Tax</option>
                                                                        <option value="Fre3e">5.00%</option>
                                                                        <option value="Paiesdwd">10.00%</option>
                                                                        <option value="Pawid">18.00%</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Tax 2</h6>
                                                                    <select
                                                                        className="form-select"
                                                                        name="tax2"
                                                                        value={values.tax2}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    >
                                                                        <option value="">Select Tax2</option>
                                                                        <option value="Fr3e33e">No Tax</option>
                                                                        <option value="Fr3e3e">5.00%</option>
                                                                        <option value="Pa4iesdwd">10.00%</option>
                                                                        <option value="Pafwid">18.00%</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Unit</h6>
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values?.unit}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.unit}
                                                                        name="unit"
                                                                        placeholder="Unit"
                                                                    />
                                                                </div>

                                                                <div className="col-lg-12 mb-3">
                                                                    <h6>Item Group</h6>
                                                                    <select
                                                                        className="form-select"
                                                                        name="tax2"
                                                                        value={values.tax2}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                    >
                                                                        <option value="">Select Item Group</option>
                                                                        <option value="Fr3dncse33e">Catamaran</option>
                                                                        <option value="Fr3nmde3e">Products</option>
                                                                        <option value="Pa4dsiesdwd">Services</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={() => setShow(false)}>
                                                                Close
                                                            </Button>
                                                            <Button variant="primary" onClick={() => setShow(false)}>
                                                                Save
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>

                                                </div>

                                                <div className='row mt-2 mb-5'>
                                                    <div className='col-lg-12'>
                                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th style={{ width: '200px' }}>Item</th>
                                                                    <th style={{ width: '300px' }}>Description</th>
                                                                    <th style={{ width: '200px' }}>Qty</th>
                                                                    <th style={{ width: '200px' }}>Rate</th>
                                                                    <th style={{ width: '200px' }}>Tax</th>
                                                                    <th style={{ width: '150px' }}>Amount</th>
                                                                    <th style={{ width: '100px' }}>
                                                                        <IoSettings />
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div class="form-group">
                                                                            <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div class="form-group">
                                                                            <textarea style={{ boxShadow: 'none' }} class="form-control" placeholder='Long Description' id="exampleFormControlTextarea1" rows="3"></textarea>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <CustomInputField
                                                                            type="number"
                                                                            value={values?.qty}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            id="qty"
                                                                            name="qty"
                                                                            placeholder="qty"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <CustomInputField
                                                                            type="number"
                                                                            value={values?.rate}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            id="rate"
                                                                            name="rate"
                                                                            placeholder="rate"
                                                                        />
                                                                    </td>
                                                                    <td>  <CustomInputField
                                                                        type="number"
                                                                        value={values?.tax}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        id="tax"
                                                                        name="tax"
                                                                        placeholder="tax"
                                                                    />
                                                                    </td>
                                                                    <td>  <CustomInputField
                                                                        type="number"
                                                                        value={values?.amt}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        id="amt"
                                                                        name="amt"
                                                                        placeholder="amt"
                                                                    />
                                                                    </td>
                                                                    <td>
                                                                        <span style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'blue', color: 'white' }}>
                                                                            <TiTick />
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>

                                                    <div className='col-lg-8'></div>
                                                    <div className='col-lg-4'>
                                                        <p>Sub Total : $0.00</p>
                                                        <p>Discount
                                                            <span className='ms-2 me-2'>
                                                                <input type='number' placeholder='00' />
                                                            </span>
                                                            $0.00</p>
                                                        <p>Adjustment
                                                            <span className='ms-2 me-2'>
                                                                <input type='number' placeholder='00' />
                                                            </span>
                                                            $0.00</p>

                                                        <p>Total : $0.00</p>
                                                    </div>

                                                </div>


                                                <div className="col-xl-12 mb-3">
                                                    <Link to="/approval" type="submit" className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>

                                            </div>



                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default AddProposalComp