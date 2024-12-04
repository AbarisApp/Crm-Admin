import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoEyeSharp, IoSearch, IoSettingsOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function Gstr3b() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">GSTR 3B</h4>
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
                        <th>Details </th>
                        <th>Total Taxable value</th>

                        <th>Integrated Tax</th>
                        <th>Central Tax</th>
                        <th>State/UT Tax</th>
                        <th>Cess </th>
                        <th>Sr No</th>

                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 3.1 Details of Outward Supplies and inward
                            supplies liable to reverse charge
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.1(d)</td>
                        <td>Inward supplies (liable to reverse charge)</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.1 Details of Outward Supplies and inward supplies
                          liable to reverse charge
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
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.1(c)</td>
                        <td>
                          Other than Outward supplies (Nil rated, exempted)
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.1 Details of Outward Supplies and inward supplies
                          liable to reverse charge
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
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.1(d)</td>
                        <td>Non-GST outward supplies</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.1 Details of Outward Supplies and inward supplies
                          liable to reverse charge
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
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.1(d)</td>
                        <td>Inward supplies (liable to reverse charge)</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.1 Details of Outward Supplies and inward supplies
                          liable to reverse charge
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
                      <tr role="row">
                        <td></td>
                        <td colSpan={10}>
                          <p className="fw-bold mt-0 mb-0">5</p>
                        </td>
                      </tr>
                      {/* --first-table--row-end- */}

                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 3.2 Details of supplies shown in 3.1(a)
                            above,Details of inter-state supplies made to
                            unregistered persons,composition taxable persons &
                            UIN holders
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.2(a)</td>
                        <td>Supplies made to unregistered persons</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.2 Details of supplies shown in 3.1(a) above,Details
                          of inter-state supplies made to unregistered
                          persons,composition taxable persons & UIN holders
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
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.2(b)</td>
                        <td>Supplies made to composition taxable persons</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          SrNo : 3.2 Details of supplies shown in 3.1(a)
                          above,Details of inter-state supplies made to
                          unregistered persons,composition taxable persons & UIN
                          holders
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
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>3.2(c)</td>
                        <td>Supplies made to UIN holders</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          3.2 Details of supplies shown in 3.1(a) above,Details
                          of inter-state supplies made to unregistered
                          persons,composition taxable persons & UIN holders 3
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
                      <tr role="row">
                        <td></td>
                        <td colSpan={10}>
                          <p className="fw-bold mt-0 mb-0">3</p>
                        </td>
                      </tr>

                      {/* --2nd-table--row-end- */}
                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 4. Eligible ITC
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>4A(1)</td>
                        <td>
                          ITC Available (whether in full or part) Import of
                          goods
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>4. Eligible ITC</td>

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

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>4A(2)</td>
                        <td>
                          ITC Available (whether in full or part) Import of
                          Services
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>4. Eligible ITC</td>

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

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>4A(3)</td>
                        <td>
                          ITC Available (whether in full or part) Inward
                          supplies liable to reverse charge (other than 1 & 2
                          above)
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>4. Eligible ITC</td>

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

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>4A(3)</td>
                        <td>
                          ITC Available (whether in full or part) Inward
                          supplies liable to reverse charge (other than 1 & 2
                          above)
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>4. Eligible ITC</td>

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

                      <tr role="row">
                        <td></td>
                        <td colSpan={10}>
                          <p className="fw-bold mt-0 mb-0">4</p>
                        </td>
                      </tr>
                      {/* --3rd-table--row-end- */}

                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 5.1 Values of expemt,Nil rated & non-GST
                            inward supplies (Inter State)
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>5.1(a)</td>
                        <td>
                          From a supplier under composition scheme, Exempt & Nil
                          rated supply
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5.1 Values of expemt,Nil rated & non-GST inward
                          supplies (Inter State)
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

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>5.1(b)</td>
                        <td>Non GST supply</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5.1 Values of expemt,Nil rated & non-GST inward
                          supplies (Inter State)
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

                      <tr role="row">
                        <td></td>
                        <td colSpan={10}>
                          <p className="fw-bold mt-0 mb-0">2</p>
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

export default Gstr3b;
