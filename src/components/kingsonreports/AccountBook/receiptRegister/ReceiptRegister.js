import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Pagination, Popconfirm } from "antd";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdUpload } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { PDFViewer } from "@react-pdf/renderer";
import ReceiptRegisterPrint from "./receiptRegisterPrint/ReceiptRegisterPrint";

function ReceiptRegister() {
  const [show, setShow] = useState(false);
  const [pdf, setPdf] = useState(false)

  const pdfGenerateDefault = () => {
    setPdf(!pdf)
  }
  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">Receipt Register</h4>
                    <button
                      className="btn btn-primary btn-sm"
                      type="button"
                      onClick={pdfGenerateDefault}
                    >
                      Print
                    </button>
                    {/* <div>
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
                        to="import-expenses"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <MdUpload className="fs-4" /> Import Expenses
                      </Link>

                      <Button
                        className="btn btn-primary btn-sm bg-primary"
                        type="button"
                        role="button"
                        aria-controls="offcanvasExample"
                        onClick={() => setShow(true)}
                      >
                        <FaFileAlt className="mb-1 me-1" />
                        Batch Payments
                      </Button>
                    </div> */}
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
                          <th style={{ width: "150px" }}>Bank</th>

                          <th style={{ width: "150px" }}>Party Name</th>
                          <th style={{ width: "150px" }}>Doc Date</th>
                          <th style={{ width: "150px" }}>Doc No</th>
                          <th style={{ width: "150px" }}>Amount</th>

                          <th style={{ width: "100px" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Hsfc Bank</td>
                          <td>Demo TEST</td>

                          <td></td>
                          <td></td>
                          <td>10,000.00</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to="/kng-receiptregister/editBank-receipt"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>
                              <Link
                                to=""
                                className="btn btn-secondary shadow btn-xs sharp me-1"
                              >
                                <IoEyeSharp className="fa fa-pencil" />
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

                          <td>Hsfc Bank</td>
                          <td>Demo Dmeo</td>
                          <td>Cr</td>
                          <td></td>

                          <td>500.00</td>

                          <td>
                            <div className="d-flex">
                              <Link
                                to="/kng-receiptregister/editBank-receipt"
                                className="btn btn-primary shadow btn-xs sharp me-1"
                              >
                                <i className="fa fa-pencil" />
                              </Link>

                              <Link
                                to=""
                                className="btn btn-secondary shadow btn-xs sharp me-1"
                              >
                                <IoEyeSharp className="fa fa-pencil" />
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

      {pdf && <div className="pdfcs">
        <div className="loader-overlay">
          <PDFViewer style={{ width: '100%', height: '100vh' }}>
            <ReceiptRegisterPrint />
          </PDFViewer>
        </div>

      </div>}
    </>
  );
}

export default ReceiptRegister;
