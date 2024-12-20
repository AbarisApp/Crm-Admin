import React, { useEffect, useState } from 'react';
import InvoicePartyClientSelectedSearch from './invoicePartyClientSelectedSearch/InvoicePartyClientSelectedSearch';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addAccount_invoice, addTravelRoomType, cityMainGett, getByIdaccount_invoice, getTravelAllCountry, masterget, posttravelInvoice, updateaccount_invoice, updatetravelInvoice } from '../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import InvoiceFormModal from './invoiceFormModal/InvoiceFormModal';
import { Select } from 'antd';
import { FaEdit } from 'react-icons/fa';
const { Option } = Select;

function InvoiceForm() {
    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const params = useParams()
    const navigate = useNavigate()
    const [commiandMode, setCommiandMode] = useState(false)
    const [editTableShow, setEditTableShow] = useState(false)
    const [tableData, setTableData] = useState(null)
    const [initialValues, setinitialValues] = useState({
        lead_id: '',
        invoice_type: '',
        invoice_no: '',
        account: '',
        booked_by: '',
        phone_no: '',
        place_of_supply: '',
        invoices: [
            {
                guest: '',
                adult: '',
                child: '',
                infant: '',
                confirm_number: '',
                hotel: '',
                place: '',
                country: '',
                no_of_room: '',
                room_type: '',
                check_in: '',
                check_out: '',
                room_category: '',
                meal_plan: '',
                remarks: '',
                booking_date: '',

                final_amt: '',
                is_tax: false,
                purchase_amt: '',
                fee_amt: '',
                oc: '',
                discount: '',
                taxable: '',
                tax: '',
                cgst: '',
                sgst: '',
                igst: '',
                xt: '',
                tcs: '',
                total_sale: '',
                tax_type: '',
                supplier_party: '',
                invoice_no: '',
                invoice_date: '',
                supplier_rent: '',
                supplier_discount: '',
                supplier_taxable: '',
                supplier_tax: '',
                supplier_cgst: '',
                supplier_sgst: '',
                supplier_igst: '',
                supplier_xt: '',
                supplier_tcs: '',
                commission: '',
                tds: '',
                tds_percent: '',
                sale_purchase: '',
                tax_purchase: '',
                net_purchase: '',
                paid_by: '',
                round_off: false,
            },
        ],

        mode_of_reciept: 'Cash',
        reciept_amount: '',
        due_date: '',
        credit_days: '',
        discount: '',
        net_reciept: '',
        remarks: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setinitialValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleInputChangeModel = (index, field, value) => {
        const newInvoices = [...initialValues.invoices];
        newInvoices[index][field] = value;

        const invoice = newInvoices[index];
        const final_amt = parseFloat(invoice.final_amt || 0);
        const feeMarkup = parseFloat(invoice.fee_amt || 0); // Fee/Markup
        const otherCharges = parseFloat(invoice.oc || 0); // Other Charges
        const discount = parseFloat(invoice.discount || 0); // Discount
        const taxPercent = parseFloat(invoice.tax || 0); // Tax Percentage (default: 18%)

        // Calculate taxable amount
        const taxableAmount = final_amt + feeMarkup + otherCharges - discount;

        let igstAmount = 0;
        let cgstAmount = 0;
        let sgstAmount = 0;
        let totalSaleAmount = 0;

        // Apply logic based on selected tax type
        switch (invoice.tax_type) {
            case "18% GST on Fee":
                igstAmount = (taxableAmount * 18) / 100; // 18% IGST
                cgstAmount = igstAmount / 2; // 50% CGST
                sgstAmount = igstAmount / 2; // 50% SGST
                totalSaleAmount = taxableAmount + igstAmount;
                break;

            case "No ITC 5%":
                igstAmount = (taxableAmount * 5) / 100; // 5% IGST
                totalSaleAmount = taxableAmount + igstAmount;
                break;

            case "18% On Bill Amount":
                totalSaleAmount = (taxableAmount * 118) / 100; // Total = 118% of taxable
                igstAmount = totalSaleAmount - taxableAmount; // 18% IGST
                cgstAmount = igstAmount / 2;
                sgstAmount = igstAmount / 2;
                break;

            case "Manual":
                totalSaleAmount = parseFloat(invoice.final_amt || taxableAmount); // Use manual input
                igstAmount = cgstAmount = sgstAmount = 0; // Reset tax components
                break;

            default:
                igstAmount = (taxableAmount * taxPercent) / 100; // Default tax
                cgstAmount = igstAmount / 2;
                sgstAmount = igstAmount / 2;
                totalSaleAmount = taxableAmount + igstAmount;
                break;
        }

        // Update invoice object
        invoice.taxable = taxableAmount;
        invoice.igst = igstAmount;
        invoice.cgst = cgstAmount;
        invoice.sgst = sgstAmount;
        invoice.total_sale = totalSaleAmount;

        // If not manual, update final amount to match total sale
        if (invoice.tax_type !== "Manual") {
            invoice.final_amt = totalSaleAmount;
        }

        // Save updated invoices
        setinitialValues({ ...initialValues, invoices: newInvoices });
    };

    const addInvoice = () => {
        setinitialValues({
            ...initialValues,
            invoices: [
                ...initialValues.invoices,
                {
                    guest: '',
                    adult: '',
                    child: '',
                    infant: '',
                    confirm_number: '',
                    hotel: '',
                    place: '',
                    country: '',
                    no_of_room: '',
                    room_type: '',
                    check_in: '',
                    check_out: '',
                    room_category: '',
                    meal_plan: '',
                    remarks: '',
                    booking_date: '',
                    final_amt: '0',
                    is_tax: false,
                    purchase_amt: '0',
                    fee_amt: '0',
                    oc: '0',
                    discount: '0',
                    taxable: '0',
                    tax: '18',
                    cgst: '0',
                    sgst: '0',
                    igst: '0',
                    xt: '0',
                    tcs: '0',
                    total_sale: '0',
                    tax_type: '18% GST on Fee',
                    supplier_party: '',
                    invoice_no: '',
                    invoice_date: '',
                    supplier_rent: '',
                    supplier_discount: '',
                    supplier_taxable: '',
                    supplier_tax: '',
                    supplier_cgst: '',
                    supplier_sgst: '',
                    supplier_igst: '',
                    supplier_xt: '',
                    supplier_tcs: '',
                    commission: '',
                    tds: '',
                    tds_percent: '',
                    sale_purchase: '',
                    tax_purchase: '',
                    net_purchase: '',
                    paid_by: '',
                    round_off: false,
                },
            ],
        });
    };

    const deleteInvoice = (index) => {
        const newInvoices = initialValues.invoices.filter((_, i) => i !== index);
        setinitialValues({ ...initialValues, invoices: newInvoices });
    };

    const [hotelSundry, setHotelSundry] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [roomType, setroomType] = useState(null)
    // console.log(hotelSundry);

    const masterData = async () => {
        const dataPassApi = {
            sundry: 'Sundry',
            bankSundryCreditors: 'Sundry Creditors',
            blank: ''
        }
        try {
            const res1 = await masterget(dataPassApi?.blank, dataPassApi?.bankSundryCreditors)
            setHotelSundry(res1?.data)
            const res2 = await getTravelAllCountry()
            setCountry(res2?.data)
            const res3 = await cityMainGett()
            setCity(res3?.data);
            const res4 = await addTravelRoomType()
            setroomType(res4?.data)

            // const res = await masterget()

        } catch (error) {

        }
    }

    useEffect(() => {
        masterData()
    }, [])



    const add = () => {
        setModalShow2(true)
    }
    const ModalAllFildData = () => {
        setModalShow2(false)
        setCommiandMode(true)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? `${message}` : `${message}`}`, {
            position: "top-right",
        });
    };

    const toastErroeMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };


    const handleSubmit = async (e) => {
        const clone = { ...initialValues, lead_id: params?.id }
        console.log(clone);
        try {
            if (!params?.updateId) {
                const res = await addAccount_invoice(clone)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    // setLoader(false)
                    setTimeout(() => {
                        navigate(`/billings-invoice/${params?.id}`)
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                }
            } else {
                const res = await updateaccount_invoice(params?.updateId, clone)
                // console.log(res);
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    // setLoader(false)
                    setTimeout(() => {
                        navigate(`/billings-invoice/${params?.id}`)
                    }, 2000)
                } else {
                    toastErroeMessage(res?.message)
                }
            }


        } catch (error) {

        }

    };

    // console.log(initialValues);

    useEffect(() => {
        const getIdData = async () => {
            try {
                const res = await getByIdaccount_invoice(params.updateId)
                // console.log(res);
                if (res?.data) {
                    setinitialValues(res?.data)
                    setTableData(res?.data)
                    setCommiandMode(true)
                    setEditTableShow(true)


                }
            } catch (error) {

            }
        }
        if (params?.updateId) {
            getIdData();
        }
    }, [params?.updateId])


    // useEffect(() => {
    //     const updatedInvoices = initialValues?.invoices.map((invoice) => {
    //         let taxableValue = 0;
    //         let gstValue = 0;
    //         let cgst = 0;
    //         let sgst = 0;
    //         let igst = 0;
    //         let totalSale = 0;

    //         // Calculate taxable amount
    //         taxableValue =
    //             parseFloat(invoice.purchase_amt || 0) +
    //             parseFloat(invoice.fee_amt || 0) +
    //             parseFloat(invoice.oc || 0) -
    //             parseFloat(invoice.discount || 0);

    //         if (invoice.is_tax) {
    //             switch (invoice.tax_type) {
    //                 case "18% GST on Fee":
    //                     gstValue = (invoice.fee_amt * 18) / 100;
    //                     break;
    //                 case "18% On Bill Amount":
    //                     gstValue = (taxableValue * 18) / 100;
    //                     break;
    //                 case "Manual":
    //                     gstValue = (taxableValue * invoice.tax) / 100;
    //                     break;
    //                 default:
    //                     gstValue = 0;
    //             }
    //         }

    //         // Split GST into CGST/SGST or IGST
    //         if (["18% GST on Fee", "18% On Bill Amount"].includes(invoice.tax_type)) {
    //             cgst = gstValue / 2;
    //             sgst = gstValue / 2;
    //             igst = 0;
    //         } else {
    //             cgst = sgst = 0;
    //             igst = gstValue;
    //         }

    //         // Calculate total sale
    //         totalSale = taxableValue + gstValue;

    //         return {
    //             ...invoice,
    //             taxable: taxableValue.toFixed(2),
    //             cgst: cgst.toFixed(2),
    //             sgst: sgst.toFixed(2),
    //             igst: igst.toFixed(2),
    //             total_sale: totalSale.toFixed(2),
    //         };
    //     });

    //     setinitialValues((prev) => ({
    //         ...prev,
    //         invoices: updatedInvoices,
    //     }));
    // }, [initialValues?.invoices]);

    return (
        <>
            <section className="m-4">
                <form >
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
                                        <option selected>Open this select Invoice Type</option>
                                        <option value="Domestic"> Domestic </option>
                                        <option value="International">International</option>
                                        <option value="Hotel"> Hotel </option>
                                        <option value="Visa/Insurance">Visa/Insurance</option>
                                        <option value="Train/Bus"> Train/Bus </option>
                                        <option value="Taxi">Taxi</option>
                                        <option value="Misc/Service"> Misc/Service </option>
                                        <option value="Bill of Supply">Bill of Supply</option>
                                        <option value="Tour"> Tour </option>
                                        <option value="Commission">Commission</option>
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
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {/* Invoice Date */}
                                <div className="col-md-2">
                                    <label className="form-label">Invoice Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    // name="invoice_no"
                                    // value={initialValues.in}
                                    // onChange={handleInputChange}
                                    />
                                </div>

                                {/* Party/Client Name */}
                                <div className="col-md-4">
                                    <label className="form-label">Party/Client Name</label>
                                    <div className="input-group">
                                        <Select
                                            showSearch
                                            style={{ width: "100%" }}
                                            placeholder="Select Hotel"
                                            optionFilterProp="Supplier/Purchase Party"
                                            getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                            value={initialValues.account}
                                            onChange={(value) =>
                                                handleInputChange({
                                                    target: {
                                                        name: "account",
                                                        value,
                                                    },
                                                })
                                            }
                                        >
                                            {hotelSundry?.voucher?.map((loc) => (
                                                <Option key={loc._id} value={loc._id}>
                                                    {loc.name}
                                                </Option>
                                            ))}
                                        </Select>
                                        {/* <button
                                            className="btn border-0 position-relative"
                                            style={{ top: "2px", right: "27px" }}
                                            type="button"
                                            onClick={() => setModalShow(true)}
                                        >
                                            <i className="bi bi-search"></i>
                                        </button> */}
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

                            {editTableShow &&
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S NO.</th>
                                            <th>Description</th>
                                            <th className="amount-column">Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData && tableData?.invoices?.map((item) => {
                                            return <tr className="table-row" key={item?._id}>
                                                <td>1</td>
                                                <td>
                                                    <a href="#" className="text-decoration-none">Name - </a>
                                                    <br />
                                                    <span className="description-subtext">
                                                        Room Type: {item?.room_type}
                                                        <br />
                                                        No of Rooms: {item?.no_of_room}
                                                        <br />
                                                        {/* AKBAR TRAVELS OF INDIA PVT. LTD. Invoice: */}
                                                        <span className="invoice-info">{item?.booking_date} Amt: {item?.final_amt}</span>
                                                    </span>
                                                </td>
                                                <td className="amount-column">
                                                    {item?.total_sale}
                                                    {/* <i className="bi bi-trash delete-icon" /> */}
                                                </td>
                                                <td className="" onClick={add} >
                                                    <FaEdit style={{ width: '30px', height: '30px' }} />
                                                </td>
                                            </tr>
                                        })}

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            {/* <td colSpan={2} className="purchase-sale">Purchase: ₹2,000.00</td> */}
                                            {/* <td className="amount-column purchase-sale">Sale: ₹{item?.total_sale}</td> */}
                                        </tr>
                                    </tfoot>
                                </table>
                            }




                            {commiandMode && <div className='row mt-2'>
                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <div className='col-lg-8'>
                                            <label className="form-label">Sales Person</label>
                                            <Select
                                                showSearch
                                                style={{ width: "100%" }}
                                                placeholder="Select City"
                                                optionFilterProp="city"
                                            // value={initialData.city}
                                            // onChange={(value) => handleSelectChange(value, 'city')}
                                            >
                                                {/* {locations?.map((loc) => (
                                                    <Option key={loc._id} value={loc._id}>
                                                        {loc.name}
                                                    </Option>
                                                ))} */}
                                            </Select>
                                        </div>
                                        <div className='col-lg-4'>
                                            <label className="form-label">Sales Person Commission</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Sales Person Commission"
                                            />
                                        </div>
                                        <div className='col-lg-12'>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} name="remarks"
                                                value={initialValues.remarks}
                                                onChange={handleInputChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className='row'>
                                        <label className="form-label">Mode of Receipt</label>
                                        <div className='col-lg-4'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"
                                                    name="mode_of_reciept"
                                                    value="Credit"
                                                    checked={initialValues.mode_of_reciept === "Credit"}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Credit
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"
                                                    name="mode_of_reciept"
                                                    value="Cash"
                                                    checked={initialValues.mode_of_reciept === "Cash"}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Cash
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio"
                                                    name="mode_of_reciept"
                                                    value="Cheque/UPI/Bank"
                                                    checked={initialValues.mode_of_reciept === "Cheque/UPI/Bank"}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Cheque/UPI/Bank
                                                </label>
                                            </div>
                                        </div>
                                        {initialValues?.mode_of_reciept == 'Credit' &&
                                            <div>
                                                <div className='col-lg-4'>
                                                    <label className="form-label">Credit Days</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Credit Days"
                                                        name="credit_days"
                                                        value={initialValues.credit_days}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className='col-lg-4'>
                                                    <label className="form-label">Due Date</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        placeholder="Enter Credit Days"
                                                        name="due_date"
                                                        value={initialValues.due_date}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        }

                                        {initialValues?.mode_of_reciept == 'Cash' &&
                                            <div>
                                                <div className='col-lg-4'>
                                                    <label className="form-label">Receipt Amount</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Receipt Amount"
                                                        name="reciept_amount"
                                                        value={initialValues.reciept_amount}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className='col-lg-4'>
                                                    <label className="form-label">Discount</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Discount"
                                                        name="discount"
                                                        value={initialValues.discount}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className='col-lg-4'>
                                                    <label className="form-label">Net Receipt Amount</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Net Receipt Amount"
                                                        name="net_reciept"
                                                        value={initialValues.net_reciept}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        }
                                        {initialValues?.mode_of_reciept == 'Cheque/UPI/Bank' &&
                                            <div className='col-lg-4'>
                                                No data
                                            </div>
                                        }


                                    </div>
                                </div>
                            </div>}

                            {/* Add and Close Buttons */}
                            <div className="row mt-4">
                                <div className='d-flex '>
                                    <button className="btn btn-primary me-2" type="button" onClick={handleSubmit}>
                                        {params?.updateId ? 'Update' : 'Add'}
                                    </button>
                                    <div className="col text-end">
                                        <button className="btn btn-primary me-2" type="button" onClick={add}>
                                            <i className="bi bi-person-plus"></i> Add
                                        </button>
                                        <Link to="/billings-invoice" role="button" className="btn btn-outline-danger">
                                            <i className="bi bi-x"></i> Close
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            <InvoiceFormModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                initialValues={initialValues}
                deleteInvoice={deleteInvoice}
                handleInputChangeModel={handleInputChangeModel}
                addInvoice={addInvoice}
                hotelSundry={hotelSundry}
                country={country}
                ModalAllFildData={ModalAllFildData}
                city={city}
                roomType={roomType}
            />

            <InvoicePartyClientSelectedSearch
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <ToastContainer />
        </>
    );
}

export default InvoiceForm;
