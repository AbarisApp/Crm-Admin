import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoEyeSharp, IoSearch, IoSettingsOutline } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";

function Gstr9() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Gstr 9</h4>
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

                        <th> Details</th>
                        <th>Total Taxable Amount </th>

                        <th>Central Tax</th>
                        <th>State/UT Tax</th>
                        <th>Integrated Tax </th>
                        <th>Sr No</th>

                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 4. Details of advances, inward and outward
                            supplies on which tax is payable as declared in
                            returns filed during the financial year
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          (A) Supplies made to un-registered persons (B2C)
                        </td>
                        <td>30,000.00</td>
                        <td>2,700.00</td>
                        <td>2,700.00</td>
                        <td>0.00</td>

                        <td>
                          4. Details of advances, inward and outward supplies on
                          which tax is payable as declared in returns filed
                          during the financial year
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
                        <td>
                          (A) Supplies made to un-registered persons (B2C)
                        </td>
                        <td>30,000.00</td>
                        <td>2,700.00</td>
                        <td>2,700.00</td>
                        <td>0.00</td>

                        <td>
                          4. Details of advances, inward and outward supplies on
                          which tax is payable as declared in returns filed
                          during the financial year
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
                        <td>
                          (A) Supplies made to un-registered persons (B2C)
                        </td>
                        <td>30,000.00</td>
                        <td>2,700.00</td>
                        <td>2,700.00</td>
                        <td>0.00</td>

                        <td>
                          4. Details of advances, inward and outward supplies on
                          which tax is payable as declared in returns filed
                          during the financial year
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
                        <td>
                          (A) Supplies made to un-registered persons (B2C)
                        </td>
                        <td>30,000.00</td>
                        <td>2,700.00</td>
                        <td>2,700.00</td>
                        <td>0.00</td>

                        <td>
                          4. Details of advances, inward and outward supplies on
                          which tax is payable as declared in returns filed
                          during the financial year
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
                          <p className="fw-bold mt-0 mb-0">4</p>
                        </td>
                      </tr>
                      {/* --first-table--row-end- */}

                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 5 . Details of Outward supplies on which tax
                            is not payable as declared in returns filed during
                            the financial year
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                        <td>
                          (A) Zero rated supply (Export) without payment of tax
                        </td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>
                          5 . Details of Outward supplies on which tax is not
                          payable as declared in returns filed during the
                          financial year
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
                          <p className="fw-bold mt-0 mb-0">6</p>
                        </td>
                      </tr>
                      {/* --2nd-table--row-end- */}

                      <tr style={{ backgroundColor: "black" }}>
                        <td colSpan={10} className="bg-dark py-1">
                          <p className="text-white mt-0 mb-0 fw-bold bg-dark">
                            SrNo : 6 . Details of ITC availed as declared in
                            returns filed during the financial year
                          </p>
                        </td>
                      </tr>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          (A) Total amount of input tax credit availed through
                          FORM GSTR-3B (sum total of Table 4A of FORM GSTR-3B)
                        </td>
                        <td>200.00</td>
                        <td>11.50</td>
                        <td>11.50</td>
                        <td>0.00</td>

                        <td>
                          6 . Details of ITC availed as declared in returns
                          filed during the financial year
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
                        <td>
                          (A) Total amount of input tax credit availed through
                          FORM GSTR-3B (sum total of Table 4A of FORM GSTR-3B)
                        </td>
                        <td>200.00</td>
                        <td>11.50</td>
                        <td>11.50</td>
                        <td>0.00</td>

                        <td>
                          6 . Details of ITC availed as declared in returns
                          filed during the financial year
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
                        <td>
                          (A) Total amount of input tax credit availed through
                          FORM GSTR-3B (sum total of Table 4A of FORM GSTR-3B)
                        </td>
                        <td>200.00</td>
                        <td>11.50</td>
                        <td>11.50</td>
                        <td>0.00</td>

                        <td>
                          6 . Details of ITC availed as declared in returns
                          filed during the financial year
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
                        <td>
                          (A) Total amount of input tax credit availed through
                          FORM GSTR-3B (sum total of Table 4A of FORM GSTR-3B)
                        </td>
                        <td>200.00</td>
                        <td>11.50</td>
                        <td>11.50</td>
                        <td>0.00</td>

                        <td>
                          6 . Details of ITC availed as declared in returns
                          filed during the financial year
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
                          <p className="fw-bold mt-0 mb-0">4</p>
                        </td>
                      </tr>
                      {/* --3rd-table--row-end- */}

                     
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

export default Gstr9;
