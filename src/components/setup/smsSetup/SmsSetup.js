import { ToastContainer } from "react-toastify";
import { FaPlus } from "react-icons/fa6";
import SmsSetupForm from "./SmsSetupForm";
import { FaFileAlt } from "react-icons/fa";

function SmsSetup() {
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
                      <FaFileAlt className="me-1 mb-1" />
                      S.M.S Setup
                    </h4>
                    {/* <div
                      className="d-flex"
                      style={{ alignItems: "center", justifyContent: "end" }}
                    >
                      <Link
                        className="btn btn-primary btn-sm"
                        to="#"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <GoArrowLeft className="fs-4 mb-1" /> Back
                      </Link>
                    </div> */}
                  </div>
                  <div>
                    <SmsSetupForm />

                    {/* -----here stated table ---- */}
                    {/* <div
                      id="banner-tblwrapper_wrapper"
                      className="dataTables_wrapper no-footer"
                    >
                      <div className="bg-dark mb-2 py-1 px-2">
                        <b className="text-white"></b>
                      </div>
                      <table
                        id="banner-tblwrapper"
                        className="table dataTable no-footer"
                        role="grid"
                        aria-describedby="banner-tblwrapper_info"
                      >
                        <thead>
                          <tr role="row">
                            <th style={{ width: "150px" }}>+</th>
                            <th style={{ width: "150px" }}>Schedule Type</th>
                            <th style={{ width: "150px" }}>Repeat</th>
                            <th style={{ width: "150px" }}>Reminder Type</th>
                            <th style={{ width: "150px" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td>
                              <input type="checkbox" />
                            </td>
                            <td>Reminder Type</td>
                            <td>Daily</td>
                            <td>Email</td>

                            <td>
                              <div className="d-flex">
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
                            <td>Reminder Type</td>
                            <td>Daily</td>
                            <td>Email</td>

                            <td>
                              <div className="d-flex">
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
                    </div> */}

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
export default SmsSetup;
