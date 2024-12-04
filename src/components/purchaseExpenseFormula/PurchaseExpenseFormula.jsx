import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteAccPurchaseExpenseFormulaById,
  getAccPurchaseExpenseFormulaByPage,
} from "../../api/login/Login";
import { message, Popconfirm } from "antd";

export const PurchaseExpenseFormula = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState();

  // ----------list Api----------
  const getFloorMasters = async (page) => {
    setLoading(true);
    try {
      const res = await getAccPurchaseExpenseFormulaByPage(page, count);
      setTotalCount(res?.totalCount);
      setData(res?.data);
      setPage(page);
    } catch (error) {}
    setLoading(false);
  };
  // add Area

  const onChangeVal = (e) => {
    // console.log(e);
    getFloorMasters(e - 1);
  };
  const deleteBlockAdd = async (id) => {
    setLoading(true);
    try {
      await deleteAccPurchaseExpenseFormulaById(id);
      let backList = totalCount % 11 === 0 ? page - 1 : page;
      getFloorMasters(backList);
    } catch (error) {
      // toastSuccessMessage(error.message)
    }
    setLoading(false);
  };

  const confirm = (id) => {
    console.log(id);
    deleteBlockAdd(id);
    message.success("Delete Successfull!");
  };
  const cancel = (e) => {
    // console.log(e);
    message.error("Cancle Successfull!");
  };

  useEffect(() => {
    getFloorMasters(page);
  }, []);
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex flex-col flex-lg-row justify-content-between">
            <h2>List Of Purchase Expense</h2>
            <div className="mb-3 d-flex align-items-center gap-2">
              <label
                for="exampleInputPassword1"
                className="form-label text-nowrap"
              >
                Fast Search (F1) :
              </label>
              <input
                type="text"
                className=" form-control"
                id="exampleInputPassword1 "
              />
            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-plus"></i>
              <Link to="/add-purchase-expense-formula">ADD</Link>
            </button>
            {/* <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-pen-to-square"></i>
              <span>EDIT</span>
            </button> */}
            {/* <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-eye"></i>
              <span>VIEW</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-trash"></i>
              <span>DELETE</span>
            </button>
            <button className="btn btn-link d-flex flex-col align-items-center">
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span>REFRESH</span>
            </button> */}
          </div>

          <div className="d-flex gap-4 justify-content-between bg-light">
            <p>Drag a column header and drop it here to group by that column</p>
            <button className="btn btn-link align-items-center d-flex gap-4">
              <i className="fa-solid fa-file-excel"></i>
              <i className="fa-solid fa-file"></i>
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr className="align-items-center">
                  <th>#</th>
                  <th>
                    <span>Name</span>
                  </th>
                  <th>Unique Column Name</th>
                  <th>Acc Effect</th>
                  <th>Type</th>
                  <th>Add/Deduct</th>
                  <th>Tax Type</th>
                  <th>Calculation</th>
                  <th>Calculation % (P)</th>
                  <th>Calculation Based On</th>
                  <th>Expense Name</th>
                  <th>Expense Account</th>
                  <th>Column Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, i) => (
                  <tr role="row" className="odd" key={item?._id}>
                    <td>{i + 1 + page * count}</td>
                    <td>{item?.name}</td>
                    <td>{item?.uniq_column_name?.name}</td>
                    <td>{item?.acc_effect ? "Yes" : "No"}</td>
                    <td>{item?.type}</td>
                    <td>{item?.add_deduct}</td>
                    <td>{item?.tax_type}</td>
                    <td>{item?.calculation}</td>
                    <td>{item?.P}</td>
                    <td>{item?.calculation_based_on}</td>
                    <td>{item?.expense_name}</td>
                    <td>{item?.expense_account}</td>
                    <td>{item?.column_name}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          to={`/add-purchase-expense-formula/${item?._id}`}
                          className="btn btn-primary shadow btn-xs sharp me-1"
                        >
                          <i className="fa fa-pencil" />
                        </Link>
                        <Popconfirm
                          title="Delete!"
                          description="Are you sure to delete?"
                          onConfirm={() => confirm(item?._id)}
                          onCancel={cancel}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
