import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function PartyCrossReport() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Party Cross Report</h4>
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

                        <th>Party</th>

                        <th>City </th>
                        <th>Sales man</th>
                        <th>Opening</th>
                        <th>BRct</th>
                        <th>CRct</th>
                        <th>C.N</th>
                        <th>C/N</th>
                        <th>CPmt</th>
                        <th>jrnl</th>
                        <th>Purc</th>
                        <th>Sret</th>
                        <th>Total Credit</th>
                        <th>Sales</th>
                        <th>Bpmt</th>
                        <th>D.N</th>
                        <th>D/N</th>
                        <th>Jrnl</th>
                        <th>Pret</th>
                        <th>TotalDebit</th>
                        <th>Total</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>A K Agro Center</td>

                        <td></td>
                        <td>Ashish</td>
                        <td>NaN</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>-10,23,886.00</td>
                        <td>Nan</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>A K Agro Center</td>

                        <td></td>
                        <td>Ashish</td>
                        <td>NaN</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>43,952.10</td>
                        <td>Nan</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>AGRI COMPANY PVT. LTD.</td>
                        <td></td>
                        <td>Kishan</td>
                        <td>NaN</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>-1,76,323.36</td>
                        <td>NaN</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Bhalala Agro Center</td>

                        <td></td>
                        <td>N 1</td>
                        <td>NaN</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>-2,74,31,775.00</td>
                        <td>NaN</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>BHARAT TRAD</td>

                        <td></td>
                        <td>MAYUR SHILU</td>
                        <td>NaN</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>10,000.00</td>
                        <td>NaN</td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>
                          <b>5</b>
                        </td>

                        <td>
                          <b></b>
                        </td>

                        <td>
                          <b></b>
                        </td>

                        <td>
                          <b>Nan</b>
                        </td>

                        <td>
                          <b>15,500.00</b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>
                        <td>
                          <b>0.00 </b>
                        </td>
                        <td>
                          <b>0.00 </b>
                        </td>
                        <td>
                          <b>10,000.00 </b>
                        </td>
                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>15,000.00 </b>
                        </td>

                        <td>
                          <b>35,400.00 </b>
                        </td>

                        <td>
                          <b>1,100.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>0.00 </b>
                        </td>

                        <td>
                          <b>46,500.00 </b>
                        </td>

                        <td>
                          <b>-2,21,88,580.90 </b>
                        </td>

                        <td>
                          <b>NaN </b>
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

export default PartyCrossReport;
