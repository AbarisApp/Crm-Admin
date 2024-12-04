import React from "react";
import { Pagination, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";

function CreditNotes() {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <div className="tbl-caption">
                <h4 className="heading mb-0">Credit Notes</h4>
                <div>
                  <Link
                    className="btn btn-primary btn-sm"
                    to="new-credit_notes"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    + New Credit Notes
                  </Link>
                  {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                </div>
              </div>
              <div
                id="empoloyees-tblwrapper_wrapper"
                className="dataTables_wrapper no-footer"
              >
                <div className="dt-buttons">
                  <button
                    className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                    tabIndex={0}
                    aria-controls="empoloyees-tblwrapper"
                    type="button"
                  >
                    <span>
                      <i className="fa-solid fa-file-excel" /> Export Report
                    </span>
                  </button>{" "}
                </div>
                <table
                  id="empoloyees-tblwrapper"
                  className="table dataTable no-footer"
                  role="grid"
                  aria-describedby="empoloyees-tblwrapper_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Employee Name: activate to sort column ascending"
                        style={{ width: "203.45px" }}
                      >
                        Credit Note
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Employee Name: activate to sort column ascending"
                        style={{ width: "203.45px" }}
                      >
                        Credit Note Date
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Department: activate to sort column ascending"
                        style={{ width: "156.475px" }}
                      >
                        Customer
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Email Address: activate to sort column ascending"
                        style={{ width: "141.087px" }}
                      >
                        Status
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Contact Number: activate to sort column ascending"
                        style={{ width: "161.675px" }}
                      >
                        Project
                      </th>

                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: "96.125px" }}
                      >
                        Reference
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: "96.125px" }}
                      >
                        Amount
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Status: activate to sort column ascending"
                        style={{ width: "96.125px" }}
                      >
                        Remaining Amount
                      </th>
                      {/* <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="empoloyees-tblwrapper"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Contact Number: activate to sort column ascending"
                        style={{ width: "161.675px" }}
                      >
                        Action
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" className="odd">
                      <td colSpan={8}>No Entries Found</td>
                    </tr>
                  </tbody>
                </table>
                <div
                  className="dataTables_info"
                  id="empoloyees-tblwrapper_info"
                  role="status"
                  aria-live="polite"
                >
                  Total 1 entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="empoloyees-tblwrapper_paginate"
                >
                  <Pagination
                    // showSizeChanger
                    // onShowSizeChange={''}

                    defaultCurrent={1}
                    onChange={1}
                    total={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditNotes;
