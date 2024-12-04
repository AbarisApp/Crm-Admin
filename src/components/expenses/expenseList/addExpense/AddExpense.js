import { ErrorMessage, Field, Formik } from "formik";

import CustomInputField from "../../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import React, { useState } from "react";
import Select from "react-select";

function AddExpense() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "vanilla", label: "Vanilla" },
    { value: "strawberry", label: "Strawberry" },
  ];

  const [subtotal, setSubtotal] = useState(0.0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountFixed, setDiscountFixed] = useState(0);
  const [adjustment, setAdjustment] = useState(0);
  const [isDiscountPercent, setIsDiscountPercent] = useState(true);

  // Function to calculate discount based on percentage or fixed amount
  const calculateDiscount = () => {
    return isDiscountPercent
      ? (subtotal * discountPercent) / 100
      : discountFixed;
  };

  // Calculate total after discount and adjustment
  const total = subtotal - calculateDiscount() + adjustment;
  return (
    <>
      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0">Add Expense</h4>
                </div>
                <Formik>
                  {(formik) => {
                    const {
                      values,
                      handleChange,
                      handleSubmit,
                      errors,
                      touched,
                      handleBlur,
                      isValid,
                      dirty,
                    } = formik;
                    return (
                      <form className="tbl-captionn">
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="tbl-caption tbl-caption-2 mb-4">
                              <h4 className="heading mb-0">Add New Expense</h4>
                            </div>

                            <div className="col-xl-12 mb-3">
                              
                            </div>

                            <div className=" mb-3">
                              <Select options={options} class="form-select" />
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <p className="bold">Bill To</p>
                                <address>
                                  <span className="billing_street">--</span>
                                  <br />
                                  <span className="billing_city">--</span>,
                                  <span className="billing_state">--</span>
                                  <br />
                                  <span className="billing_country">--</span>,
                                  <span className="billing_zip">--</span>
                                </address>
                              </div>
                              <div className="col-md-6">
                                <p className="bold">Ship to</p>
                                <address>
                                  <span className="shipping_street">--</span>
                                  <br />
                                  <span className="shipping_city">--</span>,
                                  <span className="shipping_state">--</span>
                                  <br />
                                  <span className="shipping_country">--</span>,
                                  <span className="shipping_zip">--</span>
                                </address>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-xl-6 mb-3">
                                <label htmlFor="date" className="fs-6">
                                  Credit Note Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control form-control_1"
                                />
                              </div>
                              <div className="col-xl-6 mb-3">
                                <label htmlFor="date" className="fs-6">
                                  Credit Note
                                </label>
                                <input
                                  type="text"
                                  className="form-control form-control_1"
                                  placeholder="00001dasf"
                                />
                              </div>
                            </div>

                            <div className="input-group flex-nowrap mt-2 mb-4">
                              <span
                                className="input-group-text"
                                id="addon-wrapping"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                              />
                            </div>

                            <div className="form-group my-2">
                              <div className="checkbox checkbox-danger">
                                <input
                                  type="checkbox"
                                  id="cancel_overdue_reminders"
                                  name="cancel_overdue_reminders"
                                  className="me-1"
                                />
                                <label
                                  htmlFor="cancel_overdue_reminders"
                                  className="text-dark"
                                >
                                  Prevent sending overdue reminders for this
                                  invoice
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 mb-3">
                            <div className="form-group mb-4">
                              <label htmlFor="tags" className="control-label">
                                <i className="fa fa-tag" aria-hidden="true" />
                                Tags
                              </label>

                              <ul className="tagit ui-widget ui-widget-content ui-corner-all">
                                <li className="tagit-new">
                                  <input
                                    type="text"
                                    className="ui-widget-content ui-autocomplete-input border-0"
                                    placeholder="Tag"
                                  />
                                </li>
                              </ul>
                            </div>

                            <div className=" mb-3">
                              <Select
                                options={options}
                                class="form-select"
                                placeholder="Allowed payment modes for this invoice"
                              />
                            </div>

                            <div className="row">
                              <div className="col-xl-6 mb-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  disabled
                                >
                                  <option selected> Currency</option>
                                  <option>Bank Transfer</option>
                                  <option> CDM (Cash Deposite)</option>
                                  <option>Branch (Cash Deposite)</option>
                                </select>
                              </div>

                              <div className="col-xl-6 mb-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected> Sale Agent</option>
                                  <option>Bank Transfer</option>
                                  <option> CDM (Cash Deposite)</option>
                                  <option>Branch (Cash Deposite)</option>
                                </select>
                              </div>

                              <div className="col-xl-6 mb-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Recurring Invoice?</option>
                                  <option>Bank Transfer</option>
                                  <option> CDM (Cash Deposite)</option>
                                  <option>Branch (Cash Deposite)</option>
                                </select>
                              </div>

                              <div className="col-xl-6 mb-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected> Discount Type</option>
                                  <option>Bank Transfer</option>
                                  <option> CDM (Cash Deposite)</option>
                                  <option>Branch (Cash Deposite)</option>
                                </select>
                              </div>

                              <div className="col-12 mb-3">
                                <textarea
                                  name=""
                                  id=""
                                  rows={5}
                                  className="form-control"
                                  placeholder="Admin Note"
                                ></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 mb-3">
                            <CustomInputField
                              type="text"
                              value={values?.bank_name}
                              hasError={errors.bank_name && touched.bank_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.bank_name}
                              autoFocus={true}
                              id="bank_name"
                              name="bank_name"
                              placeholder="Reference "
                            />
                          </div>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>

              <hr className="hr-panel-separator "></hr>
              <div className="row mt-5">
                <div className="col-xl-6 mb-3">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Currency</option>
                    <option value={"Bank Transfer"}>Bank Transfer</option>
                  </select>
                </div>

                <div className="col-xl-6 mb-3">
                  <div className="mtop10 d-flex">
                    <span className="text-black ">Show quantity as: </span>
                    <div className="radio radio-primary radio-inline mx-2">
                      <input
                        type="radio"
                        defaultValue={1}
                        id="sq_1"
                        name="show_quantity_as"
                        data-text="Qty"
                        defaultChecked
                        className="mx-1"
                      />
                      <label htmlFor="sq_1" className="fs-5 text-muted">
                        Qty
                      </label>
                    </div>

                    <div className="radio radio-primary radio-inline mx-2">
                      <input
                        type="radio"
                        defaultValue={2}
                        id="sq_2"
                        name="show_quantity_as"
                        data-text="Hours"
                        className="mx-1"
                      />
                      <label htmlFor="sq_2" className="fs-5 text-muted">
                        Hours
                      </label>
                    </div>
                    <div className="radio radio-primary radio-inline mx-2">
                      <input
                        type="radio"
                        defaultValue={3}
                        id="sq_3"
                        name="show_quantity_as"
                        data-text="Qty/Hours"
                        className="mx-1"
                      />
                      <label htmlFor="sq_3" className="fs-5 text-muted">
                        Qty/Hours
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive s_table">
                <table className="table newcredit_table" border={{}}>
                  <thead>
                    <tr>
                      <th />
                      <th width="20%" align="left">
                        <i
                          className="fa-solid fa-circle-exclamation tw-mr-1"
                          aria-hidden="true"
                          data-toggle="tooltip"
                          data-title="New lines are not supported for item description. Use the item long description instead."
                          data-original-title
                          title
                        />
                        Item
                      </th>
                      <th width="25%" align="left">
                        Description
                      </th>
                      <th width="10%" className="qty" align="right">
                        Qty
                      </th>
                      <th width="15%" align="right">
                        Rate
                      </th>
                      <th width="20%" align="right">
                        Tax{" "}
                      </th>
                      <th width="10%" align="right">
                        Amount
                      </th>
                      <th align="center">
                        <i className="fa fa-cog" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ui-sortable">
                    <tr className="main">
                      <td />
                      <td>
                        <textarea
                          name="description"
                          className="form-control"
                          rows={4}
                          placeholder="Description"
                          defaultValue={""}
                        />
                      </td>
                      <td>
                        <textarea
                          name="long_description"
                          rows={4}
                          className="form-control"
                          placeholder="Long description"
                          defaultValue={""}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="quantity"
                          min={0}
                          defaultValue={1}
                          className="form-control"
                          placeholder="Quantity"
                          fdprocessedid="mkur6t"
                          aria-invalid="false"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="rate"
                          className="form-control"
                          placeholder="Rate"
                          fdprocessedid="b1bqjp"
                        />
                      </td>
                      <td>
                        <div
                          className="dropdown bootstrap-select show-tick display-block tax main-tax bs3 dropup"
                          style={{ width: "100%" }}
                        >
                          <select name="" id="" className="form-select">
                            <option value="">select</option>
                            <option value="">select</option>
                            <option value="">select 1</option>
                          </select>
                          {/* <select
                            className="   form-select form-control"
                            data-width="100%"
                            name="taxname"
                            multiple
                            data-none-selected-text="No Tax"
                            tabIndex={-98}
                          >
                            <option
                              value="TAX3|5.00"
                              data-taxrate={5.0}
                              data-taxname="TAX3"
                              data-subtext="TAX3"
                            >
                              5.00%
                            </option>
                            <option
                              value="TAX2|10.00"
                              data-taxrate={10.0}
                              data-taxname="TAX2"
                              data-subtext="TAX2"
                            >
                              10.00%
                            </option>
                            <option
                              value="TAX1|18.00"
                              data-taxrate={18.0}
                              data-taxname="TAX1"
                              data-subtext="TAX1"
                            >
                              18.00%
                            </option>
                          </select> */}
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-default bs-placeholder"
                            data-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-6"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="No Tax"
                            fdprocessedid="xvt1ar"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  No Tax
                                </div>
                              </div>{" "}
                            </div>
                            <span className="bs-caret">
                              <span className="caret" />
                            </span>
                          </button>
                          <div
                            className="dropdown-menu open"
                            style={{
                              maxHeight: "169.75px",
                              overflow: "hidden",
                              minHeight: 0,
                            }}
                          >
                            <div
                              className="inner open"
                              role="listbox"
                              id="bs-select-6"
                              tabIndex={-1}
                              aria-multiselectable="true"
                              style={{
                                maxHeight: "159.75px",
                                overflowY: "auto",
                                minHeight: 0,
                              }}
                            >
                              <ul
                                className="dropdown-menu inner "
                                role="presentation"
                                style={{ marginTop: 0, marginBottom: 0 }}
                              >
                                <li>
                                  <a
                                    role="option"
                                    id="bs-select-6-0"
                                    tabIndex={0}
                                    aria-selected="false"
                                  >
                                    <span className="glyphicon glyphicon-ok check-mark" />
                                    <span className="text">
                                      5.00%
                                      <small className="text-muted">TAX3</small>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    id="bs-select-6-1"
                                    tabIndex={0}
                                    aria-selected="false"
                                  >
                                    <span className="glyphicon glyphicon-ok check-mark" />
                                    <span className="text">
                                      10.00%
                                      <small className="text-muted">TAX2</small>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    role="option"
                                    id="bs-select-6-2"
                                    tabIndex={0}
                                    aria-selected="false"
                                  >
                                    <span className="glyphicon glyphicon-ok check-mark" />
                                    <span className="text">
                                      18.00%
                                      <small className="text-muted">TAX1</small>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{" "}
                      </td>
                      <td />
                      <td>
                        <button
                          type="button"
                          onclick="add_item_to_table('undefined','undefined',undefined); return false;"
                          className="btn btn-primary pull-right "
                          fdprocessedid="471pgu"
                        >
                          <i className="fa fa-check" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-8 offset-md-4 ">
                <table className="table text-right mt-5 mb-5">
                  <tbody>
                    {/* Subtotal */}
                    <tr id="subtotal">
                      <td>
                        <span className="bold tw-text-neutral-700">
                          Sub Total :
                        </span>
                      </td>
                      <td className="subtotal">
                        ${subtotal.toFixed(2)}
                        <input
                          type="number"
                          name="subtotal"
                          value={subtotal}
                          onChange={(e) =>
                            setSubtotal(parseFloat(e.target.value) || 0)
                          }
                          className="form-control"
                          min="0"
                        />
                      </td>
                    </tr>

                    {/* Discount */}
                    <tr id="discount_area">
                      <td>
                        <div className="row">
                          <div className="col-md-7">
                            <span className="bold tw-text-neutral-700">
                              Discount
                            </span>
                          </div>
                          <div className="col-md-5">
                            <div className="input-group" id="discount-total">
                              {isDiscountPercent ? (
                                <input
                                  type="number"
                                  value={discountPercent}
                                  className="form-control input-discount-percent"
                                  min={0}
                                  max={100}
                                  onChange={(e) =>
                                    setDiscountPercent(
                                      parseFloat(e.target.value) || 0
                                    )
                                  }
                                />
                              ) : (
                                <input
                                  type="number"
                                  value={discountFixed}
                                  className="form-control input-discount-fixed"
                                  min={0}
                                  onChange={(e) =>
                                    setDiscountFixed(
                                      parseFloat(e.target.value) || 0
                                    )
                                  }
                                />
                              )}
                              <div className="input-group-addon border border-muted shadow-sm ">
                                <div className="dropdown">
                                  <a
                                    className="dropdown-toggle"
                                    href="#"
                                    onClick={() =>
                                      setIsDiscountPercent(!isDiscountPercent)
                                    }
                                  >
                                    <span className="discount-total-type-selected">
                                      {isDiscountPercent ? "%" : "Fixed"}
                                    </span>
                                    <span className="caret" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="discount-total">
                        -${calculateDiscount().toFixed(2)}
                      </td>
                    </tr>

                    {/* Adjustment */}
                    <tr>
                      <td>
                        <div className="row">
                          <div className="col-md-7">
                            <span className="bold tw-text-neutral-700">
                              Adjustment
                            </span>
                          </div>
                          <div className="col-md-5">
                            <input
                              type="number"
                              value={adjustment}
                              className="form-control"
                              onChange={(e) =>
                                setAdjustment(parseFloat(e.target.value) || 0)
                              }
                            />
                          </div>
                        </div>
                      </td>
                      <td className="adjustment">${adjustment.toFixed(2)}</td>
                    </tr>

                    {/* Total */}
                    <tr>
                      <td>
                        <span className="bold tw-text-neutral-700">
                          Total :
                        </span>
                      </td>
                      <td className="total">${total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr className="hr-panel-separator "></hr>

              <div className="row mb-4">
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Client Note"
                    rows={5}
                  ></textarea>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Terms & Conditions"
                    rows={5}
                  >
                    I think?' he said do. Alice looked very uncomfortable. The
                    first witness was the first question, you know.' 'I don't
                    even know what to say 'Drink me,' but the cook was leaning
                    over the jury-box with the Queen shouted at the end of the
                    evening, beautiful Soup! Soup of the guinea-pigs cheered,
                    and.
                  </textarea>
                </div>
              </div>
            </div>

            <div>
              <Link to="/bank-master" className="btn btn-danger light ms-1">
                Cancel
              </Link>
              <button className="btn btn-primary me-1" type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AddExpense;
