import {
  FaShoppingCart,
  FaWarehouse,
  FaDoorClosed,
  FaMoneyBillWave,
  FaRegEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import Loader from "../../../common/loader/Loader";

const breadCrumbsTitle = {
  id: "1",
  title_2: "Live Stock List",
};

function BuyList() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(5); // Total entries
  const [loading, setLoading] = useState(false);

  // Dummy Data
  const dummyData = [
    {
      _id: "1",
      flowName: "Cattle A",
      totalPurchased: 500,
      variant: "Variant 1",
    },
    {
      _id: "2",
      flowName: "Cattle B",
      totalPurchased: 300,
      variant: "Variant 2",
    },
    {
      _id: "3",
      flowName: "Cattle C",
      totalPurchased: 700,
      variant: "Variant 3",
    },
    {
      _id: "4",
      flowName: "Cattle D",
      totalPurchased: 600,
      variant: "Variant 4",
    },
    {
      _id: "5",
      flowName: "Cattle E",
      totalPurchased: 400,
      variant: "Variant 5",
    },
  ];

  useEffect(() => {
    // Set the dummy data for now
    setData(dummyData);
  }, []);

  const confirm = (id) => {
    message.success(`Deleted item with ID: ${id}`);
    // Remove the deleted item from the data array
    setData(data.filter((item) => item._id !== id));
  };

  const cancel = () => {
    message.error("Cancel Successful!");
  };

  const onChangeVal = (page) => {
    setPage(page);
  };

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <div className="row m-4">
        {loading && <Loader />}

        {/* Summary Cards */}
        <div className="table-responsive active-projects style-1">
          <div
            className="tbl-caption d-flex justify-content-between align-items-center"
            style={{ marginBottom: "10px" }}
          >
            <h4 className="heading    mb-0">Livestock Shopping List</h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>
                      Total Purchased: <strong>89061</strong>
                    </h6>
                    <p>
                      Reproduction: <strong>3334995</strong>
                    </p>
                  </div>
                  <FaShoppingCart size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>
                      Total Purchased: <strong>214</strong>
                    </h6>
                    <p>
                      Reproduction: <strong>3334995</strong>
                    </p>
                  </div>
                  <FaWarehouse size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>
                      Total Purchased: <strong>214</strong>
                    </h6>
                    <p>
                      Reproduction: <strong>3334995</strong>
                    </p>
                  </div>
                  <FaDoorClosed size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>
                      Total Purchased: <strong>214</strong>
                    </h6>
                    <p>
                      Reproduction: <strong>3334995</strong>
                    </p>
                  </div>
                  <FaMoneyBillWave size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div
                  className="tbl-caption d-flex justify-content-between align-items-center"
                  style={{ marginBottom: "10px" }}
                >
                  <h4 className="heading mb-0">Livestock Shopping List</h4>
                  <div>
                    <Link
                      className="btn btn-primary btn-sm"
                      to="/purchase/add-new-purchase"
                      role="button"
                      aria-controls="offcanvasExample"
                    >
                      + Add New Purchase
                    </Link>
                    <Link
                      className="btn btn-warning btn-sm"
                      to="/purchase/assign-to-shed"
                      role="button"
                      aria-controls="offcanvasExample"
                    >
                      + Assign To The Shed
                    </Link>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <select className="form-select">
                      <option value="10">10 records per page</option>
                      <option value="20">20 records per page</option>
                      <option value="30">30 records per page</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                  </div>
                </div>
                <table
                  id="flow-category-tblwrapper"
                  className="table dataTable no-footer"
                  role="grid"
                  aria-describedby="flow-category-tblwrapper_info"
                >
                  <thead>
                    <tr role="row">
                      <th style={{ width: "50px" }}>SL. No.</th>
                      <th style={{ width: "300px" }}> By Invoice</th>
                      <th style={{ width: "300px" }}>Buy Date</th>
                      <th style={{ width: "300px" }}>Supplier</th>
                      <th style={{ width: "300px" }}>Total Purchased (head)</th>
                      <th style={{ width: "300px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr role="row" className="odd" key={item._id}>
                        <td>{i + 1}</td>
                        <td>{item.flowName}</td>
                        <td>{item.totalPurchased}</td>
                        <td>{item.variant}</td>
                        <td>{item.variant}</td>
                        <td>
                          <div className="d-flex">
                            <button className="btn btn-info btn-sm">
                              <span>
                                <i class="fas fa-file-alt"></i>
                              </span>
                              &nbsp;
                              <span>Bill</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  className="dataTables_info"
                  id="flow-category-tblwrapper_info"
                  role="status"
                  aria-live="polite"
                >
                  Total {totalCount} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="flow-category-tblwrapper_paginate"
                >
                  <Pagination
                    current={page + 1}
                    onChange={onChangeVal}
                    total={totalCount}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyList;
