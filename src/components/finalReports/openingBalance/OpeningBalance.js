import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function OpeningBalance() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Openinig Balance</h4>
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

                        <th>Account Name</th>
                        <th>Group</th>

                        <th>City </th>

                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Branch</th>
                        <th>Op. Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>A K Agro Center</td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>TELG</td>
                        <td>0.00</td>
                        <td>43,952.10</td>
                        <td>KANT IT SOLUTION 1</td>
                        <td>43952.10 Db</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>BALAJI MARKETING</td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td></td>
                        <td>0.00</td>
                        <td>43,952.10</td>
                        <td>KANT IT SOLUTION 1</td>
                        <td>0.00 Db</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>AGRI COMPANY PVT. LTD.</td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td>Rajkot</td>
                        <td>25,96,167.68</td>
                        <td>0.00</td>

                        <td>KANT IT SOLUTION 1</td>
                        <td>2596167.68 Cr</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>CISTRONICS PESTICIDES LLP</td>
                        <td>Sundry Debtors (A/cs Receivable)</td>
                        <td></td>
                        <td>0.00</td>
                        <td>43,952.10</td>
                        <td>KANT IT SOLUTION 1</td>
                        <td>43952.10 Db</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Hsfc Bank</td>
                        <td>Bank Accounts (Banks)</td>
                        <td>Rajkot</td>
                        <td>2,84,937.00</td>
                        <td>43,952.10</td>
                        <td>KANT IT SOLUTION 1</td>
                        <td>43952.10 Db</td>
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

export default OpeningBalance;
