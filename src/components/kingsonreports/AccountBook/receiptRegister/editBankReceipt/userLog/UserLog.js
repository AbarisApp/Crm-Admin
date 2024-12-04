import { ToastContainer } from "react-toastify";

import { Pagination, Popconfirm } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import Form from "react-bootstrap/Form";
import Print from "../../../../../../common/print/Print";
import ExportFile from "../../../../../../common/exportFile/ExportFile";

function UserLog() {
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
                    <h4 className="heading mb-0">+ User Log</h4>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                      <Link
                        className="btn btn-primary btn-sm"
                        to="/kng-receiptregister/editBank-receipt"
                        role="button"
                        aria-controls="offcanvasExample"
                      >
                        <GoArrowLeft className="fs-4 mb-1" /> Back
                      </Link>
                      <ExportFile />

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
                  <div className="bg-dark py-1 px-3 text-white">
                    <span>
                      Drag a column header and drop it here to group by that
                      column
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
                          <th>
                            <input type="checkbox" />
                          </th>
                          <th style={{ width: "150px" }}>Date</th>
                          <th style={{ width: "150px" }}>Time</th>
                          <th style={{ width: "150px" }}> User</th>
                          <th style={{ width: "150px" }}> Page</th>
                          <th style={{ width: "150px" }}>State </th>
                          <th style={{ width: "150px" }}>Voucher Date </th>
                          <th style={{ width: "150px" }}>Bvch_No </th>
                          <th style={{ width: "150px" }}>Party Name </th>
                          <th style={{ width: "150px" }}>OppParty Name </th>
                          <th style={{ width: "150px" }}>Amount </th>
                          <th style={{ width: "150px" }}>Note </th>
                          <th style={{ width: "150px" }}>Branch Name </th>
                          <th style={{ width: "150px" }}>Remotel Address </th>
                          <th style={{ width: "150px" }}>PC Browser </th>
                          <th style={{ width: "150px" }}>URL </th>
                          <th style={{ width: "150px" }}>Guidc </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>14/10/2024</td>
                          <td>07:57:20 PM</td>

                          <td>abaris</td>
                          <td>Bank Receipt</td>
                          <td>Edit</td>
                          <td>21/08/2024</td>
                          <td>2</td>
                          <td>Demo Dmeo</td>
                          <td>Hsfc Bank</td>
                          <td>10,000.00</td>
                          <td></td>
                          <td>KANT IT SOLUTION 1</td>
                          <td>223.228.226.136</td>
                          <td>0.4.162109 || Chrome/129.0.0.0 Safari/537.36</td>
                          <td>
                            https://erp.eaccount.in/a/app/myreport/receiptregister/echild
                          </td>
                          <td>72506ea7-89e1-4f6b-9d06-7235c75cbe01</td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>14/10/2024</td>
                          <td>07:57:20 PM</td>

                          <td>abaris</td>
                          <td>Bank Receipt</td>
                          <td>Edit</td>
                          <td>21/08/2024</td>
                          <td>2</td>
                          <td>Demo Dmeo</td>
                          <td>Hsfc Bank</td>
                          <td>10,000.00</td>
                          <td></td>
                          <td>KANT IT SOLUTION 1</td>
                          <td>223.228.226.136</td>
                          <td>0.4.162109 || Chrome/129.0.0.0 Safari/537.36</td>
                          <td>
                            https://erp.eaccount.in/a/app/myreport/receiptregister/echild
                          </td>
                          <td>72506ea7-89e1-4f6b-9d06-7235c75cbe01</td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>14/10/2024</td>
                          <td>07:57:20 PM</td>

                          <td>abaris</td>
                          <td>Bank Receipt</td>
                          <td>Edit</td>
                          <td>21/08/2024</td>
                          <td>2</td>
                          <td>Demo Dmeo</td>
                          <td>Hsfc Bank</td>
                          <td>10,000.00</td>
                          <td></td>
                          <td>KANT IT SOLUTION 1</td>
                          <td>223.228.226.136</td>
                          <td>0.4.162109 || Chrome/129.0.0.0 Safari/537.36</td>
                          <td>
                            https://erp.eaccount.in/a/app/myreport/receiptregister/echild
                          </td>
                          <td>72506ea7-89e1-4f6b-9d06-7235c75cbe01</td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>14/10/2024</td>
                          <td>07:57:20 PM</td>

                          <td>abaris</td>
                          <td>Bank Receipt</td>
                          <td>Edit</td>
                          <td>21/08/2024</td>
                          <td>2</td>
                          <td>Demo Dmeo</td>
                          <td>Hsfc Bank</td>
                          <td>10,000.00</td>
                          <td></td>
                          <td>KANT IT SOLUTION 1</td>
                          <td>223.228.226.136</td>
                          <td>0.4.162109 || Chrome/129.0.0.0 Safari/537.36</td>
                          <td>
                            https://erp.eaccount.in/a/app/myreport/receiptregister/echild
                          </td>
                          <td>72506ea7-89e1-4f6b-9d06-7235c75cbe01</td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>14/10/2024</td>
                          <td>07:57:20 PM</td>

                          <td>abaris</td>
                          <td>Bank Receipt</td>
                          <td>Edit</td>
                          <td>21/08/2024</td>
                          <td>2</td>
                          <td>Demo Dmeo</td>
                          <td>Hsfc Bank</td>
                          <td>10,000.00</td>
                          <td></td>
                          <td>KANT IT SOLUTION 1</td>
                          <td>223.228.226.136</td>
                          <td>0.4.162109 || Chrome/129.0.0.0 Safari/537.36</td>
                          <td>
                            https://erp.eaccount.in/a/app/myreport/receiptregister/echild
                          </td>
                          <td>72506ea7-89e1-4f6b-9d06-7235c75cbe01</td>
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

export default UserLog;
