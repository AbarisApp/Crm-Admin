import React, { useState } from 'react';
import InvoicePartyClientSelectedSearch from './invoicePartyClientSelectedSearch/InvoicePartyClientSelectedSearch';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { posttravelInvoice, updatetravelInvoice } from '../../../api/login/Login';
import { toast } from 'react-toastify';

function InvoiceForm() {
    const [modalShow, setModalShow] = useState(false);
    const params = useParams()
    const navigate = useNavigate()
    const [initialValues, setinitialValues] = useState({
        invoice_type: "",
        invoice_no: "1",
        invoice_date: "",
        party_client_name: "",
        booked_by: "",
        phone_no: "",
        place_of_supply: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setinitialValues({
            ...initialValues,
            [name]: value,
        });
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                try {
                    const res = await posttravelInvoice(initialValues);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Invoice Successfully");
                        navigate(`/billings-invoice`)
                    }
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updatetravelInvoice(params.id, initialValues);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Invoice Successfully");
                        navigate(`/billings-invoice`)
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Invoice Successfully");
                    }
                    // getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <section className="m-4">
                <form onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="mt-4">
                            <div className="row">
                                {/* Invoice Type */}
                                <div className="col-md-2">
                                    <label className="form-label">Invoice Type</label>
                                    <select
                                        className="form-select"
                                        name="invoice_type"
                                        value={initialValues.invoice_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value="domestic">Domestic</option>
                                        <option value="international">International</option>
                                    </select>
                                </div>

                                {/* Invoice No */}
                                <div className="col-md-2">
                                    <label className="form-label">Invoice No</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="invoice_no"
                                        value={initialValues.invoice_no}
                                        readOnly
                                    />
                                </div>

                                {/* Invoice Date */}
                                <div className="col-md-2">
                                    <label className="form-label">Invoice Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="invoice_date"
                                        value={initialValues.invoice_date}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Party/Client Name */}
                                <div className="col-md-4">
                                    <label className="form-label">Party/Client Name</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="party_client_name"
                                            value={initialValues.party_client_name}
                                            onChange={handleInputChange}
                                            placeholder="Enter Client Name"
                                        />
                                        <button
                                            className="btn border-0 position-relative"
                                            style={{ top: "2px", right: "27px" }}
                                            type="button"
                                            onClick={() => setModalShow(true)}
                                        >
                                            <i className="bi bi-search"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Booked By */}
                                <div className="col-md-2">
                                    <label className="form-label">Booked By</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="booked_by"
                                        value={initialValues.booked_by}
                                        onChange={handleInputChange}
                                        placeholder="Enter Booker Name"
                                    />
                                </div>

                                {/* Phone No */}
                                <div className="col-md-2">
                                    <label className="form-label">Phone No</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone_no"
                                        value={initialValues.phone_no}
                                        onChange={handleInputChange}
                                        placeholder="Enter Phone No"
                                    />
                                </div>

                                {/* Place of Supply */}
                                <div className="col-md-4">
                                    <label className="form-label">Place of Supply</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="place_of_supply"
                                        value={initialValues.place_of_supply}
                                        onChange={handleInputChange}
                                        placeholder="Enter Place of Supply"
                                    />
                                </div>
                            </div>

                            {/* Add and Close Buttons */}
                            <div className="row mt-4">
                                <div className="col text-end">
                                    <button className="btn btn-primary me-2" type="submit">
                                        <i className="bi bi-person-plus"></i> Add
                                    </button>
                                    <Link to="/billings-invoice" role="button" className="btn btn-outline-danger">
                                        <i className="bi bi-x"></i> Close
                                    </Link>
                                </div>
                            </div>

                            {/* Error Message */}
                            <div className="row mt-3">
                                <div className="col">
                                    <p className="text-danger">Invalid Place of Supply</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <InvoicePartyClientSelectedSearch
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default InvoiceForm;
