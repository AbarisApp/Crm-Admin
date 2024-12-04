// import React from 'react'

// function ExpenseList() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ExpenseList

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FaFileAlt } from "react-icons/fa";
import { Pagination, Popconfirm } from "antd";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdUpload } from "react-icons/md";
import BatchPayments from "../../sales/invoices/batchPayments/BatchPayments";

function ExpenseList() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Expenses List</h4>
                    <div>
                      <Link
                        className="btn btn-primary btn-sm"
                        to="add-expense"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        + Add Expense
                      </Link>

                      <Link
                        className="btn btn-primary btn-sm"
                        to="#"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <MdUpload className="fs-4" /> Import Expenses
                      </Link>

                      {/* <Button
                        className="btn btn-primary btn-sm bg-primary"
                        type="button"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={() => setShow(true)}
                      >
                        <FaFileAlt className="mb-1 me-1" />
                        Batch Payments
                      </Button> */}
                    </div>
                  </div>
                  <div
                    id="banner-tblwrapper_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <div className="dt-buttons">
                      <button
                        className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                        tabIndex={0}
                        aria-controls="banner-tblwrapper"
                        type="button"
                      >
                        <span>
                          <i className="fa-solid fa-file-excel" /> Export Report
                        </span>
                      </button>
                    </div>
                    <table
                      id="banner-tblwrapper"
                      className="table dataTable no-footer"
                      role="grid"
                      aria-describedby="banner-tblwrapper_info"
                    >
                      <thead>
                        <tr role="row">
                          <th style={{ width: "50px" }}>
                            <input type="checkbox" className="" />
                          </th>
                          <th style={{ width: "150px" }}>Category</th>
                          <th style={{ width: "150px" }}>Subcategory</th>
                          <th style={{ width: "150px" }}>Amount</th>
                          <th style={{ width: "150px" }}>Total Tax</th>
                          <th style={{ width: "150px" }}>Total without tax</th>
                          <th style={{ width: "150px" }}>Name</th>
                          <th style={{ width: "150px" }}>Reciept</th>
                          <th style={{ width: "150px" }}>Date</th>
                          <th style={{ width: "150px" }}>Project</th>
                          <th style={{ width: "150px" }}>Customer</th>
                          <th style={{ width: "150px" }}>Invoice</th>
                          <th style={{ width: "150px" }}>Reference</th>
                          <th style={{ width: "150px" }}>Payment Mode</th>

                          <th style={{ width: "100px" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Vehicle Expenses</td>

                          <td>Transportation</td>
                          <td>$267.75</td>
                          <td>$0.00</td>
                          <td>$342.00</td>
                          <td style={{ width: "150px" }}>
                            I don't know,' he went on at last, and.
                          </td>
                          <td>LIPOSUCTION 360 + BBL AM.xlsx</td>
                          <td>2024-04-03</td>
                          <td>Dummy Project</td>
                          <td>
                            <span className="text-primary">IOC TEST</span>
                          </td>
                          <td>INV-000273</td>
                          <td>internet00</td>
                          <td>Debit / Credit Card</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to=""
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Popconfirm
                                title="Delete banner!"
                                description="Are you sure to delete?"
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-danger shadow btn-xs sharp"
                                >
                                  <i className="fa fa-trash" />
                                </Link>
                              </Popconfirm>
                            </div>
                          </td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Vehicle Expenses</td>

                          <td>Transportation</td>
                          <td>$267.75</td>
                          <td>$0.00</td>
                          <td>$342.00</td>
                          <td style={{ width: "150px" }}></td>
                          <td></td>
                          <td>2024-04-03</td>
                          <td>Dummy Project</td>
                          <td>
                            <span className="text-primary">IOC TEST</span>
                          </td>
                          <td>INV-000273</td>
                          <td>internet00</td>
                          <td>Debit / Credit Card</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to=""
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Popconfirm
                                title="Delete banner!"
                                description="Are you sure to delete?"
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-danger shadow btn-xs sharp"
                                >
                                  <i className="fa fa-trash" />
                                </Link>
                              </Popconfirm>
                            </div>
                          </td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Vehicle Expenses</td>

                          <td>Transportation</td>
                          <td>$267.75</td>
                          <td>$0.00</td>
                          <td>$342.00</td>
                          <td></td>
                          <td>LIPOSUCTION 360 + BBL AM.xlsx</td>
                          <td>2024-04-03</td>
                          <td>Dummy Project</td>
                          <td>
                            <span className="text-primary">IOC TEST</span>
                          </td>
                          <td>INV-000273</td>
                          <td></td>
                          <td>Debit / Credit Card</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to=""
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Popconfirm
                                title="Delete banner!"
                                description="Are you sure to delete?"
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-danger shadow btn-xs sharp"
                                >
                                  <i className="fa fa-trash" />
                                </Link>
                              </Popconfirm>
                            </div>
                          </td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Vehicle Expenses</td>

                          <td>Transportation</td>
                          <td>$267.75</td>
                          <td>$0.00</td>
                          <td></td>
                          <td>I don't know,' he went on at last, and.</td>
                          <td>LIPOSUCTION 360 + BBL AM.xlsx</td>
                          <td>2024-04-03</td>
                          <td></td>
                          <td>
                            <span className="text-primary">IOC TEST</span>
                          </td>
                          <td></td>
                          <td>internet00</td>
                          <td>Debit / Credit Card</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to=""
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Popconfirm
                                title="Delete banner!"
                                description="Are you sure to delete?"
                                okText="Yes"
                                cancelText="No"
                              >
                                <Link
                                  to="#"
                                  className="btn btn-danger shadow btn-xs sharp"
                                >
                                  <i className="fa fa-trash" />
                                </Link>
                              </Popconfirm>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
                      Total {"0"} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers">
                      <Pagination defaultCurrent={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add Payments
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BatchPayments />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>{" "}
          <Button variant="primary">Apply</Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpenseList;
