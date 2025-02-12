import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function SalesmanWiseReport() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Salesman Wise Report</h4>
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
                        <td className="text-center" colSpan={23}>
                          <p>No Record Available</p>
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

export default SalesmanWiseReport;
