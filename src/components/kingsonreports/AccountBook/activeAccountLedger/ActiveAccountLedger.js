


// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Pagination, Popconfirm } from "antd";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ActiveAccountLedgerPdf from "./activeAccountLedgerPdf/ActiveAccountLedgerPdf";
import { PDFViewer } from "@react-pdf/renderer";
// import { Button } from "react-bootstrap";
// import { MdUpload } from "react-icons/md";


function ActiveAccountLedger() {
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
                    <h4 className="heading mb-0">Active A/c Ledger</h4>
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary "
                        onClick={pdfGenerateDefault}
                      >
                        + print
                      </button>

                      {/* <Link
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
                          <th style={{ width: "150px" }}>A</th>
                          <th style={{ width: "150px" }}>Account Name</th>
                          <th style={{ width: "150px" }}>City</th>
                          <th style={{ width: "150px" }}>Opening</th>
                          <th style={{ width: "150px" }}>Op. D/C</th>
                          <th style={{ width: "150px" }}>Closing Balance</th>
                          <th style={{ width: "150px" }}>Cl.Cr/Db</th>

                          {/* <th style={{ width: "100px" }}>Actions</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td></td>

                          <td>A K Agro Center</td>
                          <td></td>
                          <td>43,952.10</td>
                          <td>Db</td>
                          <td style={{ width: "150px" }}>43,952.10</td>
                          <td>Db</td>

                          {/* <td>
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
                          </td> */}
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td></td>

                          <td>A K Agro Center</td>
                          <td></td>
                          <td>10,23,886.00</td>
                          <td>Cr</td>
                          <td style={{ width: "150px" }}>10,23,886.00</td>
                          <td>Cr</td>

                          {/* <td>
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
                          </td> */}
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td></td>

                          <td>ABC PARTY</td>
                          <td>TELG</td>
                          <td>0.00</td>
                          <td>Db</td>
                          <td style={{ width: "150px" }}>0.00</td>
                          <td>Db</td>

                          {/* <td>
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
                          </td> */}
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td></td>

                          <td>ABARIS SOFTCH PVT. LTD..</td>
                          <td>AHMEDABAD</td>
                          <td>1,76,323.36</td>
                          <td>Cr</td>
                          <td style={{ width: "150px" }}>1,76,323.36</td>
                          <td>Cr</td>

                          {/* <td>
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
                          </td> */}
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td></td>

                          <td>A K Agro Center</td>
                          <td></td>
                          <td>43,952.10</td>
                          <td>Db</td>
                          <td style={{ width: "150px" }}>43,952.10</td>
                          <td>Db</td>

                          {/* <td>
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
                          </td> */}
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
            <ActiveAccountLedgerPdf />
          </PDFViewer>
        </div>

      </div>}
    </>
  );
}

export default ActiveAccountLedger;
