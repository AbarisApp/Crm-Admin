import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { MdOutlineEventNote } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function Gstr2() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">
                    {/* <MdOutlineEventNote className="fs-4 mb-1 me-1" /> */}
                    GSTR - 2 - B2B
                  </h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <Link className="btn btn-danger btn-sm" to="#">
                      <IoSettingsOutline className="fs-4 me-1 mb-1" />
                      GSTR Integrity
                    </Link>

                    <ExportFile />
                  </div>
                </div>
                <div className="dataTables_wrapper no-footer">
                  <table className="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row">
                        <th>
                          <input type="checkbox" />
                        </th>

                        <th> GSTIN/UIN of Recipient </th>
                        <th> Invoice Number</th>
                        <th> Invoice Date</th>
                        <th> Invoice Value</th>
                        <th>Place Of Supply</th>
                        <th>Reverse Charge </th>
                        <th> Invoice Type </th>

                        <th> Rate</th>

                        <th>Taxable Value</th>
                        <th>Integrated Tax Paid</th>
                        <th>Central Tax Paid</th>
                        <th>State/UT Tax Paid</th>
                        <th>Cess Amount</th>
                        <th>Eligibility For ITC</th>
                        <th>Availed ITC Integrated Tax</th>
                        <th>Availed ITC State/UT Tax</th>
                        <th>Availed ITC Cess</th>
                        <th>GST Status</th>
                        <th>GST Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td colSpan={20} className="text-center">
                          <p>No Records Available</p>
                        </td>
                        <td>
                          <div className="d-flex">
                            <Link
                              to="#"
                              className="btn btn-primary shadow btn-xs sharp me-1"
                            >
                              <i className="fa fa-pencil" />
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-secondary shadow btn-xs sharp me-1"
                            >
                              <IoEyeSharp className="fa fa-pencil " />
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
                    Total {0} entries
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
      <ToastContainer className="text-center" />
    </>
  );
}

export default Gstr2;
