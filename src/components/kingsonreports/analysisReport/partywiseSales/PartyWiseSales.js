import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function PartyWiseSalesAnalysis() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Party Wise Sales Analysis</h4>
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

                        <th> Account Group </th>
                        <th>Party</th>

                        <th> City</th>
                        <th>State </th>
                        <th>Salesman </th>
                        <th> Area</th>
                        <th>(2024 - 2025) Qty</th>
                        <th>(2024 - 2025)</th>
                        <th>Per</th>
                        <th>R (2024 - 2025)</th>
                        <th>R Per</th>
                        <th>(2023 - 2024) Qty</th>
                        <th>(2023 - 2024)</th>
                        <th>Per</th>
                        <th>R (2023 - 2024)</th>
                        <th>R Per</th>

                        <th>(2022 - 2023) Qty</th>
                        <th> (2022 - 2023)</th>
                        <th>Per</th>
                        <th>R (2022 - 2023)</th>
                        <th>R Per</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-success">
                          Sundry Debtors (A/cs Receivable)
                        </td>
                        <td className="text-success">A K Agro Center</td>
                        <td className="text-success"></td>
                        <td className="text-success"></td>
                        <td className="text-success">Ashish</td>
                        <td className="text-success"></td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">100.00</td>
                        <td className="text-success">10,000.00</td>
                        <td className="text-success">125.00</td>

                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>A K Agro Center</td>
                        <td></td>
                        <td></td>
                        <td>Ashish</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>128.00</td>
                        <td>46,095.00</td>
                        <td>576.19</td>

                        <td>3,000.00</td>
                        <td>37.50</td>
                        <td>611.00</td>
                        <td>1,12,124.00</td>
                        <td>20.00</td>
                        <td>96,001.00</td>
                        <td>17.12</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>A K Agro Center</td>
                        <td></td>
                        <td></td>
                        <td>Ashish</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>128.00</td>
                        <td>46,095.00</td>
                        <td>576.19</td>

                        <td>3,000.00</td>
                        <td>37.50</td>
                        <td>611.00</td>
                        <td>1,12,124.00</td>
                        <td>20.00</td>
                        <td>96,001.00</td>
                        <td>17.12</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>A K Agro Center</td>
                        <td></td>
                        <td></td>
                        <td>Ashish</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>128.00</td>
                        <td>46,095.00</td>
                        <td>576.19</td>

                        <td>3,000.00</td>
                        <td>37.50</td>
                        <td>611.00</td>
                        <td>1,12,124.00</td>
                        <td>20.00</td>
                        <td>96,001.00</td>
                        <td>17.12</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>A K Agro Center</td>
                        <td></td>
                        <td></td>
                        <td>Ashish</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>128.00</td>
                        <td>46,095.00</td>
                        <td>576.19</td>

                        <td>3,000.00</td>
                        <td>37.50</td>
                        <td>611.00</td>
                        <td>1,12,124.00</td>
                        <td>20.00</td>
                        <td>96,001.00</td>
                        <td>17.12</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>A K Agro Center</td>
                        <td></td>
                        <td></td>
                        <td>Ashish</td>
                        <td></td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>128.00</td>
                        <td>46,095.00</td>
                        <td>576.19</td>

                        <td>3,000.00</td>
                        <td>37.50</td>
                        <td>611.00</td>
                        <td>1,12,124.00</td>
                        <td>20.00</td>
                        <td>96,001.00</td>
                        <td>17.12</td>
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

export default PartyWiseSalesAnalysis;
