import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteAccPurchaseInvoiceTypeById, getAccPurchaseInvoiceTypeByPage } from "../../api/login/Login";
import { message, Popconfirm } from "antd";

export const PurchaseInvoiceType = () => {
  const sales = [
    {
      id: 1,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
    {
      id: 2,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
    {
      id: 3,
      name: "TEX FREE",
      salesName: "TEX FREE",
      taxType: "FREE",
      formName: "",
    },
  ];
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState()


  // ----------list Api----------
  const getFloorMasters = async (page) => {
    setLoading(true)
    try {
      const res = await getAccPurchaseInvoiceTypeByPage(page, count)
      setTotalCount(res?.totalCount)
      setData(res?.data)
      setPage(page)
    } catch (error) {

    }
    setLoading(false)
  }
  // add Area




  const onChangeVal = (e) => {
    // console.log(e);
    getFloorMasters(e - 1)

  };
  const deleteBlockAdd = async (id) => {
    setLoading(true)
    try {
      await deleteAccPurchaseInvoiceTypeById(id)
      let backList = totalCount % 11 === 0 ? page - 1 : page
      getFloorMasters(backList)
    } catch (error) {
      // toastSuccessMessage(error.message)
    }
    setLoading(false)
  }

  const confirm = (id) => {
    console.log(id);
    deleteBlockAdd(id)
    message.success('Delete Successfull!');

  };
  const cancel = (e) => {
    // console.log(e);
    message.error('Cancle Successfull!');
  };



  useEffect(() => {
    getFloorMasters(page)
  }, [])
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="d-flex flex-col flex-lg-row justify-content-between">
            <h2>List Of Purchase  Invoice</h2>
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
              <Link to="/add-purchase-invoice-type">ADD</Link >
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
                  <th>
                    #
                  </th>
                  <th>
                    <span>Name</span>
                  </th>
                  <th>
                    <span>Sales A/c Name</span>
                  </th>
                  <th>
                    <span>Tax Type</span>
                  </th>
                  <th>
                    <span>Form Name</span>
                  </th>
                  <th>Multi Tax</th>
                  <th>Fixed Amount</th>
                  {/* <th>Tax Calculation</th> */}
                  <th>RCM</th>
                  <th>Reverse Charge</th>
                  <th>Export Type</th>
                  <th>POS Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, i) => (
                  <tr role="row" className="odd" key={item?._id}>
                    <td>{(i + 1) + (page * count)}</td>
                    <td>{item?.name}</td>
                    <td>{item?.sales_acc_id?.name}</td>
                    <td>{item?.tax_master?.name}</td>
                    <td>{item?.form_name}</td>
                    <td>{item?.isMultiTax ? "Yes" : "No"}</td>
                    <td>{item?.fixed_amount ? "Yes" : "No"}</td>
                    <td>{item?.rcm}</td>
                    <td>{item?.reverse_charge ? "Yes" : "No"}</td>
                    <td>{item?.export_type}</td>
                    <td>{item?.pos_type}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          to={`/add-purchase-invoice-type/${item?._id}`}
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
                          <Link to="#" className="btn btn-danger shadow btn-xs sharp">
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
