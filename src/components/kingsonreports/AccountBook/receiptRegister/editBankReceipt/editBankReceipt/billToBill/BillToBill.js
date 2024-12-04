import { ToastContainer } from "react-toastify";

import { Pagination, Popconfirm } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import Form from "react-bootstrap/Form";

function BillToBill() {
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
                    <h4 className="heading mb-0">+ Bill By Bill</h4>
                    <div>
                      <Link
                        className="btn btn-primary btn-sm"
                        to="/receiptregister/editBank-receipt"
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
                  <div className="bg-dark text-end py-2 px-3 text-white">
                    <span>
                      Adjestment Value : <b>10000 Cr</b>
                    </span>
                  </div>
                  <div
                    id="banner-tblwrapper_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="banner-tblwrapper"
                      className="table dataTable no-footer"
                      role="grid"
                      aria-describedby="banner-tblwrapper_info"
                    >
                      <thead>
                        <tr role="row">
                          <th style={{ width: "150px" }}>Adj. Type</th>
                          <th style={{ width: "150px" }}>Particular</th>
                          <th style={{ width: "150px" }}> Date</th>
                          <th style={{ width: "150px" }}>Credit Days</th>
                          <th style={{ width: "150px" }}>Amount </th>
                          <th style={{ width: "150px" }}>Cr/Db </th>

                          <th style={{ width: "100px" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <Form.Select size="sm">
                              <option>Against Ref</option>
                              <option>New References</option>
                              <option>On Account</option>
                            </Form.Select>
                          </td>
                          <td>GJ2021/1</td>

                          <td>17/08/2024</td>
                          <td></td>
                          <td>10000</td>
                          <td>
                            <Form.Select size="sm">
                              <option>Cr</option>
                              <option>Db</option>
                            </Form.Select>
                          </td>

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
                          <td>
                            <Form.Select size="sm">
                              <option>Against Ref</option>
                              <option>New References</option>
                              <option>On Account</option>
                            </Form.Select>
                          </td>
                          <td>GJ2021/1</td>

                          <td>17/08/2024</td>
                          <td></td>
                          <td>10000</td>
                          <td>
                            <Form.Select size="sm">
                              <option>Cr</option>
                              <option>Db</option>
                            </Form.Select>
                          </td>

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
                          <td>
                            <Form.Select size="sm">
                              <option>Against Ref</option>
                              <option>New References</option>
                              <option>On Account</option>
                            </Form.Select>
                          </td>
                          <td>GJ2021/1</td>

                          <td>17/08/2024</td>
                          <td></td>
                          <td>10000</td>
                          <td>
                            <Form.Select size="sm">
                              <option>Cr</option>
                              <option>Db</option>
                            </Form.Select>
                          </td>

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
                          <td>
                            <Form.Select size="sm">
                              <option>Against Ref</option>
                              <option>New References</option>
                              <option>On Account</option>
                            </Form.Select>
                          </td>
                          <td>GJ2021/1</td>

                          <td>17/08/2024</td>
                          <td></td>
                          <td>10000</td>
                          <td>
                            <Form.Select size="sm">
                              <option>Cr</option>
                              <option>Db</option>
                            </Form.Select>
                          </td>

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
                          <td>
                            <Form.Select size="sm">
                              <option>Against Ref</option>
                              <option>New References</option>
                              <option>On Account</option>
                            </Form.Select>
                          </td>
                          <td>GJ2021/1</td>

                          <td>17/08/2024</td>
                          <td></td>
                          <td>10000</td>
                          <td>
                            <Form.Select size="sm">
                              <option>Cr</option>
                              <option>Db</option>
                            </Form.Select>
                          </td>

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

export default BillToBill;
