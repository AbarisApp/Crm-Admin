import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import Print from "../../../../common/print/Print";

import ViewProductionEntryForm from "./ViewProductionEntryForm";
import { Pagination } from "react-bootstrap";
import { Popconfirm } from "antd";

function ViewProductionEntry() {
  return (
    <>
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">
                      <IoEyeSharp className="me-1" />
                      View Production Entry
                    </h4>
                    <div
                      className="d-flex"
                      style={{ alignItems: "center", justifyContent: "end" }}
                    >
                      <Link
                        className="btn btn-primary btn-sm"
                        to="userLog"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        Log
                      </Link>

                      <Print />

                      <Link
                        className="btn btn-primary btn-sm"
                        to="productionReport"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <GoArrowLeft className="fs-4 mb-1" /> Back
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
                  <div>
                    <ViewProductionEntryForm />

                    {/* -----here stated table ---- */}
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
                            <i className="fa-solid fa-file-excel" /> Export
                            Report
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
                            <th style={{ width: "150px" }}> Type</th>
                            <th style={{ width: "150px" }}> Stock</th>
                            <th style={{ width: "150px" }}>Box</th>
                            <th style={{ width: "150px" }}>Item</th>
                            <th style={{ width: "150px" }}>Batch No</th>
                            <th style={{ width: "150px" }}>
                              Location Live Stock
                            </th>
                            <th style={{ width: "150px" }}>Quantity 2</th>
                            <th style={{ width: "150px" }}>Quantity </th>
                            <th style={{ width: "150px" }}>Rate </th>
                            <th style={{ width: "150px" }}>Amount </th>

                            <th style={{ width: "100px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td></td>
                            <td>Bank Payment</td>

                            <td>JNF024</td>
                            <td>2</td>
                            <td>433432</td>
                            <td>43</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="d-flex">
                                {/* <Link
                                  to=""
                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                >
                                  <i className="fa fa-pencil" />
                                </Link> */}
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
                            <td></td>
                            <td>Bank Payment</td>

                            <td>JNF024</td>
                            <td>2</td>
                            <td>433432</td>
                            <td>43</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="d-flex">
                                {/* <Link
                                  to=""
                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                >
                                  <i className="fa fa-pencil" />
                                </Link> */}
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
                            <td></td>
                            <td>Bank Payment</td>

                            <td>JNF024</td>
                            <td>2</td>
                            <td>433432</td>
                            <td>43</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="d-flex">
                                {/* <Link
                                  to=""
                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                >
                                  <i className="fa fa-pencil" />
                                </Link> */}
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
                            <td></td>
                            <td>Bank Payment</td>

                            <td>JNF024</td>
                            <td>2</td>
                            <td>433432</td>
                            <td>43</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="d-flex">
                                {/* <Link
                                  to=""
                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                >
                                  <i className="fa fa-pencil" />
                                </Link> */}
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
                            <td></td>
                            <td>Bank Payment</td>

                            <td>JNF024</td>
                            <td>2</td>
                            <td>433432</td>
                            <td>43</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td>
                              <div className="d-flex">
                                {/* <Link
                                  to=""
                                  className="btn btn-primary shadow btn-xs sharp me-1"
                                >
                                  <i className="fa fa-pencil" />
                                </Link> */}
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

                    {/* ----end table---- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />
    </>
  );
}

export default ViewProductionEntry;
