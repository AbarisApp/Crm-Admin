


import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Pagination, Popconfirm } from "antd";

import { IoSearch } from "react-icons/io5";
import ExportFile from "../../../../common/exportFile/ExportFile";


function BatchWiseProfit() {
  return (
    <>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0">Batch Wise Profit</h4>
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

                        <th> Product</th>
                        <th>Batch No</th>

                        <th> Opening</th>
                        <th>Purch. Qty </th>
                        <th>P. Amount </th>
                        <th>Sales Qty</th>
                        <th>S. Amount</th>
                        <th>Stock</th>
                        <th>S.Amount</th>
                        <th>Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>1001</td>
                        <td></td>
                        <td>500.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>500.00</td>
                        <td>14,70,560.00</td>
                        <td>0.00</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>228</td>
                        <td></td>
                        <td>330.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>330.00</td>
                        <td>57,000.00</td>
                        <td>0.00</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>Abc</td>
                        <td></td>
                        <td>99,532.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>99,532.00</td>
                        <td>27,88,828.30</td>
                        <td>0.00</td>
                      </tr>

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>ACID SLURY</td>
                        <td></td>
                        <td>98,707.00</td>
                        <td>20.00</td>
                        <td>20,000.00</td>
                        <td>2.00</td>
                        <td>30,000.00</td>
                        <td>98,485.00</td>
                        <td>37,84,616.48</td>
                        <td>20,747.60</td>
                      </tr>

                      <tr role="row" className="text-danger">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-danger">AGRI PRODUCT 100 ML</td>
                        <td></td>
                        <td className="text-danger">-1,250.00</td>
                        <td className="text-danger">20.00</td>
                        <td className="text-danger">0.00</td>
                        <td className="text-danger">0.00</td>
                        <td className="text-danger">0.00</td>
                        <td className="text-danger">-1,250.00</td>
                        <td className="text-danger">8.30</td>
                        <td className="text-danger">0.00</td>
                      </tr>

                     

                      <tr role="row">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>228</td>
                        <td></td>
                        <td>330.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>0.00</td>
                        <td>330.00</td>
                        <td>57,000.00</td>
                        <td>0.00</td>
                      </tr>

                      <tr role="row" className="text-danger">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td className="text-success">FERROUS SULPHETE</td>
                        <td></td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">0.00</td>
                        <td className="text-success">78234957.30</td>
                        <td className="text-success">0.00</td>
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

export default BatchWiseProfit;
