
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";

const InvoiceAdd = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false, // All settings to be defined here
        placeholder: 'Start typing...'
    }), []);
    const [particulars, setParticulars] = useState([
        {
            id: 1,
            service: "",
            description: "",
            tax: "",
            option: "",
            travellers: "",
            price: "",
            serviceCharge: "",
            igst: "",
            totalWithGST: 0,
        },
    ]);

    const [initialValue, setInitialValue] = useState({
        TCS_TotalAmount: false
    })

    console.log(initialValue);


    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: "Create Invoice",
        path_2: ``,
    };

    const handleAddMore = () => {
        const newParticular = {
            id: particulars.length + 1,
            service: "",
            description: "",
            tax: "",
            option: "",
            travellers: "",
            price: "",
            serviceCharge: "",
            igst: "",
            totalWithGST: 0,
        };
        setParticulars([...particulars, newParticular]);
    };

    const handleDelete = (id) => {
        const updatedParticulars = particulars.filter((item) => item.id !== id);
        setParticulars(updatedParticulars);
    };

    const handleInputChange = (id, field, value) => {
        const updatedParticulars = particulars.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        setParticulars(updatedParticulars);
    };

    const handdleChange = (e) => {
        setInitialValue({
            ...initialValue,
            [e.target.name]: e.target.value === "true",
        })
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Invoice</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    {/* Basic Invoice Details */}
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Name</label>
                                        <p>Mustafa Ashraf</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Email</label>
                                        <p>seoabaris@gmai.com</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Customer Type</label>
                                        <p>B2C</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label className="form-label">Contact</label>
                                        <p>99999999999</p>
                                    </div>
                                    {/* Invoice Fields */}
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">State</label>
                                        <select className="form-control">
                                            <option selected>Open this select State</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Account Head</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Account Head"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Reference Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Reference Number"
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Invoice Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Invoice Number"
                                        />
                                        <p>Inv# is auto generated if left blank Current Prefix SOF</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Date</label>
                                        <input type="date" className="form-control" />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Label</label>
                                        <select className="form-control">
                                            <option selected>Open this select Label</option>
                                            <option value={1}>Pro Forma Invoice</option>
                                            <option value={2}>Invoice</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Show GST details on print</label>
                                        <select className="form-control">
                                            <option selected>Open this select Show GST details on print</option>
                                            <option value={1}>Yes</option>
                                            <option value={2}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Show Service Charge on print</label>
                                        <select className="form-control">
                                            <option selected>Open this select Show Service Charge on print</option>
                                            <option value={1}>Yes</option>
                                            <option value={2}>No</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Add TCS on the total amount</label>
                                        <select className="form-control"
                                            name="TCS_TotalAmount"
                                            onChange={handdleChange}
                                        >
                                            <option value={false}>No</option>
                                            <option value={true}>Yes</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Show Service Particular on print</label>
                                        <select className="form-control">
                                            <option selected>Open this select Show Service Particular on print</option>
                                            <option value={1}>Yes</option>
                                            <option value={2}>No</option>
                                        </select>
                                    </div>
                                    {/* Dynamic Particulars */}
                                    <div className="col-xl-12 mb-3">
                                        {particulars.map((particular, index) => (
                                            <div className="inneline" key={particular.id}>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h3>Particular {index + 1}</h3>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Service</label>
                                                        <select
                                                            className="form-control"
                                                            value={particular.service}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "service", e.target.value)
                                                            }
                                                        >
                                                            <option value="">Select Service</option>
                                                            <option value="Airline">Airline</option>
                                                            <option value="Hotel">Hotel</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Description</label>
                                                        <textarea
                                                            className="form-control"
                                                            rows="1"
                                                            value={particular.description}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "description", e.target.value)
                                                            }
                                                        ></textarea>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Tax(%)</label>
                                                        <select
                                                            className="form-control"
                                                            value={particular.tax}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "tax", e.target.value)
                                                            }
                                                        >
                                                            <option value="">Select Tax</option>
                                                            <option value="5">5%</option>
                                                            <option value="12">12%</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Travellers</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={particular.travellers}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "travellers", e.target.value)
                                                            }
                                                            placeholder="Enter Travellers"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={particular.price}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "price", e.target.value)
                                                            }
                                                            placeholder="Enter Price"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Service Charge</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={particular.serviceCharge}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "serviceCharge", e.target.value)
                                                            }
                                                            placeholder="Enter Service Charge"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">IGST</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={particular.igst}
                                                            onChange={(e) =>
                                                                handleInputChange(particular.id, "igst", e.target.value)
                                                            }
                                                            placeholder="Enter IGST"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <label className="form-label">Total With GST</label>
                                                        <p>{particular.totalWithGST}</p>
                                                    </div>
                                                    {initialValue.TCS_TotalAmount && (
                                                        <>
                                                            <div className="col-xl-4 mb-3">
                                                                <label className="form-label">IGST</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter IGST"
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div className="col-xl-4 mb-3">
                                                                <label className="form-label">Total With TCS + GST</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Enter Total With TCS + GST"
                                                                    disabled
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="col-xl-12 text-end">
                                                        {particulars.length > 1 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => handleDelete(particular.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-xl-12 mb-3">
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            onClick={handleAddMore}
                                        >
                                            Add More
                                        </button>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label className="form-label">Remarks</label>
                                        <textarea
                                            className="form-control"
                                            rows="1"
                                        ></textarea>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Terms and Conditions</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Save
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

export default InvoiceAdd;
