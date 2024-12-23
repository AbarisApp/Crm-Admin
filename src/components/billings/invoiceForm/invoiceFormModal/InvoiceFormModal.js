import { Select } from "antd"
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"
import { getTravelAllCountry, masterget } from "../../../../api/login/Login";
const { Option } = Select;


const InvoiceFormModal = ({ ...props }) => {
    // console.log(props);
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="dialog-modal"
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <div >
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0 p-2"></h4>
                                </div>
                                {props?.initialValues?.invoices?.map((invoice, index) => (
                                    <form className="tbl-captionn">
                                        <div class="row">
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Guest</label>
                                                <input type="text" class="form-control" placeholder="Guest"
                                                    value={invoice.guest}
                                                    onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'guest', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div class="col-md-2 mb-3">
                                                <label class="form-label">Adult</label>
                                                <input type="number" class="form-control" placeholder="Adult"
                                                    value={invoice.adult}
                                                    onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'adult', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div class="col-md-2 mb-3">
                                                <label class="form-label">Kids</label>
                                                <input type="number" class="form-control" placeholder="Kids"
                                                    value={invoice.child}
                                                    onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'child', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div class="col-md-2 mb-3">
                                                <label class="form-label">Infant</label>
                                                <input type="number" class="form-control" placeholder="Infant"
                                                    value={invoice.infant}
                                                    onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'infant', e.target.value)
                                                    }
                                                />
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Confirmation Number</label>
                                                <input type="text" class="form-control" placeholder="Confirmation Number"
                                                    value={invoice.confirm_number}
                                                    onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'confirm_number', e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Hotel</label>
                                                <Select
                                                    showSearch
                                                    style={{ width: "100%" }}
                                                    placeholder="Select Hotel"
                                                    optionFilterProp="hotel"
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                    value={invoice.hotel}
                                                    onChange={(value) => props?.handleInputChangeModel(index, 'hotel', value)}
                                                >
                                                    {props?.Hotel?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.hotel_name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Place</label>
                                                <Select
                                                    showSearch
                                                    style={{ width: "100%" }}
                                                    placeholder="Select Place"
                                                    optionFilterProp="place"
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                    value={invoice.place}
                                                    onChange={(value) => props?.handleInputChangeModel(index, 'place', value)}
                                                >
                                                    {props?.city?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Country</label>
                                                <Select
                                                    showSearch
                                                    style={{ width: "100%" }}
                                                    placeholder="Select Country"
                                                    optionFilterProp="country"
                                                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                    value={invoice.country}
                                                    onChange={(value) => props?.handleInputChangeModel(index, 'country', value)}
                                                >
                                                    {props?.country?.map((loc) => (
                                                        <Option key={loc._id} value={loc._id}>
                                                            {loc.name}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">No of Room</label>
                                                <input type="text" class="form-control" placeholder="No of Room" />
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Room Type</label>
                                                <select className="form-control" aria-label="Default select example" value={invoice.room_type} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'room_type', e.target.value)
                                                }>
                                                    <option selected>Open this select Room Type</option>
                                                    {props?.roomType && props?.roomType?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                    })}
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Checkin</label>
                                                <input type="date" class="form-control" value={invoice.check_in} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'check_in', e.target.value)} />
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Checkout</label>
                                                <input type="date" class="form-control" value={invoice.check_out} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'check_out', e.target.value)} />
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Room Category</label>
                                                <select className="form-control" aria-label="Default select example" value={invoice.room_category} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'room_category', e.target.value)}>
                                                    <option selected>Open this select Room Category</option>
                                                    {props?.roomCategory && props?.roomCategory?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.category_name}</option>
                                                    })}
                                                </select>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label class="form-label">Meal Plan</label>
                                                <select className="form-control" aria-label="Default select example" value={invoice.meal_plan} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'meal_plan', e.target.value)}>
                                                    <option selected>Open this select Meal Plan</option>
                                                    {props?.mealPlan && props?.mealPlan?.map((item) => {
                                                        return <option value={item?._id} key={item?._id}>{item?.meal_name}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-8 mb-3">
                                                <label class="form-label">Remarks</label>
                                                <textarea class="form-control" rows="2" placeholder="Add Remarks" value={invoice.remarks} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'remarks', e.target.value)}></textarea>
                                            </div>
                                            <div class="col-4 mb-3">
                                                <label class="form-label">Booking Date</label>
                                                <input type="date" class="form-control" value={invoice.booking_date} onChange={(e) =>
                                                    props?.handleInputChangeModel(index, 'booking_date', e.target.value)} />
                                            </div>
                                        </div>



                                        <div class="form-section">
                                            <div class="row">
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Final Amount</label>
                                                    <input type="number" class="form-control" placeholder="Final Amount" value={invoice.final_amt} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'final_amt', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">+Tax</label>
                                                    <input type="checkbox" className="form-check-input" checked={invoice.is_tax} onChange={(e) => props?.handleInputChangeModel(index, 'is_tax', e.target.checked)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Rent/Purchase Amt</label>
                                                    <input type="number" class="form-control" placeholder="Rent/Purchase Amt" value={invoice.purchase_amt} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'purchase_amt', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Free/Markup</label>
                                                    <input type="number" class="form-control" placeholder="Free/Markup" value={invoice.fee_amt} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'fee_amt', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">OC</label>
                                                    <input type="number" class="form-control" placeholder="OC" value={invoice.oc} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'oc', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Discount</label>
                                                    <input type="number" class="form-control" placeholder="discount" value={invoice.discount} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'discount', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Taxable</label>
                                                    <input type="number" class="form-control" placeholder="Taxable" value={invoice.taxable} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'taxable', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Tax %</label>
                                                    <input type="number" class="form-control" placeholder="Tax %" value={invoice.tax} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'tax', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">CGST</label>
                                                    <input type="number" class="form-control" placeholder="CGST" value={invoice.cgst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'cgst', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">SGST</label>
                                                    <input type="number" class="form-control" placeholder="SGST" value={invoice.sgst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'sgst', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">IGST</label>
                                                    <input type="number" class="form-control" placeholder="IGST" value={invoice.igst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'igst', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">XT</label>
                                                    <input type="number" class="form-control" placeholder="XT" value={invoice.xt} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'xt', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">TCS</label>
                                                    <input type="number" class="form-control" placeholder="TCS" value={invoice.tcs} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'tcs', e.target.value)} />
                                                </div>

                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Total Sale</label>
                                                    <input type="number" class="form-control" placeholder="TCS" value={invoice.total_sale} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'total_sale', e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={`tax_type_${index}`}
                                                            id={`tax_type_18_GST_${index}`}
                                                            value="18% GST on Fee"
                                                            checked={invoice?.tax_type === "18% GST on Fee"}
                                                            onChange={(e) =>
                                                                props?.handleInputChangeModel(index, "tax_type", e.target.value)
                                                            }
                                                        />
                                                        <label className="form-check-label" htmlFor={`tax_type_18_GST_${index}`}>
                                                            18% GST on Fee
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={`tax_type_${index}`}
                                                            id={`tax_type_no_itc_${index}`}
                                                            value="No ITC 5%"
                                                            checked={invoice?.tax_type === "No ITC 5%"}
                                                            onChange={(e) =>
                                                                props?.handleInputChangeModel(index, "tax_type", e.target.value)
                                                            }
                                                        />
                                                        <label className="form-check-label" htmlFor={`tax_type_no_itc_${index}`}>
                                                            No ITC 5%
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={`tax_type_${index}`}
                                                            id={`tax_type_18_bill_${index}`}
                                                            value="18% On Bill Amount"
                                                            checked={invoice?.tax_type === "18% On Bill Amount"}
                                                            onChange={(e) =>
                                                                props?.handleInputChangeModel(index, "tax_type", e.target.value)
                                                            }
                                                        />
                                                        <label className="form-check-label" htmlFor={`tax_type_18_bill_${index}`}>
                                                            18% On Bill Amount
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name={`tax_type_${index}`}
                                                            id={`tax_type_manual_${index}`}
                                                            value="Manual"
                                                            checked={invoice?.tax_type === "Manual"}
                                                            onChange={(e) =>
                                                                props?.handleInputChangeModel(index, "tax_type", e.target.value)
                                                            }
                                                        />
                                                        <label className="form-check-label" htmlFor={`tax_type_manual_${index}`}>
                                                            Manual
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-section">
                                            <div class="row">
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Supplier/Purchase Party</label>
                                                    <Select
                                                        showSearch
                                                        style={{ width: "100%" }}
                                                        placeholder="Select Hotel"
                                                        optionFilterProp="Supplier/Purchase Party"
                                                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                                                        value={invoice.supplier_party}
                                                        onChange={(value) => props?.handleInputChangeModel(index, 'supplier_party', value)}
                                                    >
                                                        {props?.partyCreator?.voucher?.map((loc) => (
                                                            <Option key={loc._id} value={loc._id}>
                                                                {loc.name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Invoice No</label>
                                                    <input type="text" class="form-control" placeholder="Invoice Number" value={invoice.invoice_no} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'invoice_no', e.target.value)} />
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label class="form-label">Invoice Date</label>
                                                    <input type="date" class="form-control" value={invoice.invoice_date} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'invoice_date', e.target.value)} />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Rent</label>
                                                    <input type="number" class="form-control" placeholder="Rent" value={invoice.supplier_rent} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_rent', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">XT</label>
                                                    <input type="number" class="form-control" placeholder="XT" value={invoice.supplier_xt} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_xt', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Discout</label>
                                                    <input type="number" class="form-control" placeholder="Discout" value={invoice.supplier_discount} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_discount', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">SC</label>
                                                    <input type="number" class="form-control" placeholder="SC" value={invoice.supplier_sc} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_sc', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">

                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Purchase</label>
                                                    <input type="number" class="form-control" placeholder="Purchase" value={invoice.sale_purchase} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'sale_purchase', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Taxable</label>
                                                    <input type="number" class="form-control" placeholder="Taxable" value={invoice.supplier_taxable} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_taxable', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Tax %</label>
                                                    <input type="number" class="form-control" placeholder="Tax %" value={invoice.supplier_tax} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_tax', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">CGST</label>
                                                    <input type="number" class="form-control" placeholder="CGST" value={invoice.supplier_cgst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_cgst', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">SGST</label>
                                                    <input type="number" class="form-control" placeholder="SGST" value={invoice.supplier_sgst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_sgst', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">IGST</label>
                                                    <input type="number" class="form-control" placeholder="IGST" value={invoice.supplier_igst} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_igst', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Purchase</label>
                                                    <input type="number" class="form-control" placeholder="Purchase" value={invoice.tax_purchase} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'tax_purchase', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Commission</label>
                                                    <input type="number" class="form-control" placeholder="Commission" value={invoice.commission} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'commission', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">TDS %</label>
                                                    <input type="number" class="form-control" placeholder="TDS %" value={invoice.tds_percent} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'tds_percent', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">TDS</label>
                                                    <input type="number" class="form-control" placeholder="TDS" value={invoice.tds} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'tds', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">

                                                </div>
                                                <div class="col-md-2 mb-3">

                                                </div>
                                                <div class="col-md-2 mb-3">
                                                    <label class="form-label">Purchase</label>
                                                    <input type="number" class="form-control" placeholder="Purchase" value={invoice.net_purchase} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'net_purchase', e.target.value)} />
                                                </div>

                                                <div class="col-md-5 mb-3">
                                                    <label class="form-label">Paid By</label>
                                                    <input type="number" class="form-control" placeholder="Paid By" value={invoice.paid_by} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'paid_by', e.target.value)} />
                                                </div>
                                                <div class="col-md-2 mb-3">

                                                </div>
                                                {/* <div class="col-md-2 mb-3">
                                                    <label class="form-label">SAC</label>
                                                    <input type="number" class="form-control" placeholder="SAC" value={invoice.supplier_sac} onChange={(e) =>
                                                        props?.handleInputChangeModel(index, 'supplier_sac', e.target.value)} />
                                                </div> */}
                                                <div class="col-md-2 mb-3">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" checked={invoice.is_tax} onChange={(e) => props?.handleInputChangeModel(index, 'is_tax', e.target.checked)} />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            Round Off
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mb-3">
                                                    <label class="form-label">Remark</label>
                                                    <textarea class="form-control" rows="2" placeholder="Remarks"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                onClick={() => props?.deleteInvoice(index)}
                                            >
                                                Delete Invoice
                                            </button>
                                        </div>
                                    </form>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={props?.addInvoice}
                                >
                                    Add Invoice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.ModalAllFildData}>Ok</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default InvoiceFormModal