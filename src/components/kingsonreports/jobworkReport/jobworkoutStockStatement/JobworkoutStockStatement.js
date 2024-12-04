import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { useState } from "react";
import { IoEyeSharp, IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function JobworkoutStockStatement() {
  const [receipts, setReceipts] = useState([]);

  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Jobwork Out Stock Statement</h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    {/* <Link
                      className="btn btn-danger btn-sm"
                      to="/receiptregister"
                    >
                      <IoSettingsOutline className="fs-4 mb-1" /> GSTR Integrity
                    </Link> */}

                    <span className="btn btn-primary btn-sm">
                      <IoSearch />
                      <input
                        type="text"
                        className="from-control"
                        placeholder="Search..."
                      />
                    </span>

                    <span>
                      <ExportFile />
                    </span>

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
                <div className="dataTables_wrapper no-footer">
                  <table className="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row">
                        <th>
                          <input type="checkbox" />
                        </th>
                        <th>Account Name</th>
                        <th>Product </th>
                        <th>Opening Qty</th>
                        <th>Issue Qty</th>
                        <th>Consumed Qty</th>
                        <th>Closing Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td colSpan={7} className="text-center">
                          <p>No data Available</p>
                        </td>

                        {/* <td>
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
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    role="status"
                    aria-live="polite"
                  >
                    Total {receipts.length} entries
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

export default JobworkoutStockStatement;
