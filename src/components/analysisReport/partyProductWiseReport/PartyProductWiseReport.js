import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function PartyProductWiseReport() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Party Product Wise Report</h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
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

                        <th>Product</th>

                        <th>Sales Qty</th>
                        <th>Ret. Qty</th>
                        <th>Net Qty</th>
                        <th>Point</th>
                        <th>Amount</th>
                        <th>Salesman</th>
                        <th>Party</th>
                        <th>Packing</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>ACID SLURY</td>

                        <td>2.00</td>
                        <td>0.00</td>
                        <td>2.00</td>
                        <td>4</td>
                        <td>30,000.00</td>
                        <td></td>
                        <td>Demo Dmeo ()</td>
                        <td></td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>ACID SLURY</td>

                        <td>2.00</td>
                        <td>0.00</td>
                        <td>2.00</td>
                        <td>4</td>
                        <td>30,000.00</td>
                        <td></td>
                        <td>Demo Dmeo ()</td>
                        <td></td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>
                          <b>1</b>
                        </td>

                        <td>
                          <b>2.00</b>
                        </td>

                        <td>
                          <b>0.00</b>
                        </td>

                        <td>
                          <b>2.00</b>
                        </td>

                        <td>
                          <b>4</b>
                        </td>

                        <td>
                          <b>30,000.00 </b>
                        </td>
                        <td colSpan={3}></td>
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

export default PartyProductWiseReport;
