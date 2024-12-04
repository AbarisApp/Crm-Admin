import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";
import { MdOutlineEventNote } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";

function GstrIntegrity() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">
                    <MdOutlineEventNote className="fs-4 mb-1 me-1" />
                    GSTR INTEGRITY
                  </h4>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <Link className="btn btn-primary btn-sm" to="#">
                      Difference
                    </Link>
                    <Link className="btn btn-primary btn-sm" to="/gstr3b">
                      <GoArrowLeft className="fs-4 mb-1 me-1" />
                      Back
                    </Link>
                  </div>
                </div>
                <div className="dataTables_wrapper no-footer">
                  <table className="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row">
                        <th>
                          <input type="checkbox" />
                        </th>

                        <th> Problem</th>
                        <th> Type</th>
                        <th>Date </th>
                        <th>No </th>

                        <th>Particular</th>

                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            Problem : Company GST No Missing
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Company GST No Missing</td>
                        <td>Company Profile</td>
                        <td></td>
                        <td></td>
                        <td>Company GST No Missing</td>
                        <td>
                          Please Write Company GST No in Setup = Report
                          Setup/Company Profile Page
                        </td>
                      </tr>
                      <tr role="row">
                        <td></td>
                        <td colSpan={10}>
                          <p className="fw-bold mt-0 mb-0">1</p>
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

export default GstrIntegrity;
