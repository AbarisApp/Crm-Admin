import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoEyeSharp, IoSearch, IoSettingsOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function GstSummary() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">GST Summary</h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <Link className="btn btn-danger btn-sm" to="gstrIntegrity">
                      <IoSettingsOutline className="fs-4 mb-1" /> GSTR Integrity
                    </Link>

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

                        <th> Type</th>
                        <th>Voucher</th>

                        <th> Tax</th>
                        <th>TaxableAmount </th>
                        <th>CGST  </th>
                        <th>SGST</th>
                        <th>IGST</th>

                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                     
                      <tr role="row">
                        <td colSpan={8} className="text-center">
                          <p>No Records Available</p>
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

export default GstSummary;
