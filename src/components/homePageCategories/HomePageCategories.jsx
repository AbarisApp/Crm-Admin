import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../common/CustomInputField";
import { Empty, Pagination } from "antd";

function HomePageCategories({ selectAll, handleSelectAll, handleCheckboxChange, apesData, selectedUsers }) {
  const breadCrumbsTitle = {
    title_1: "Categories",
    title_1: "Manage Categories",
  }
  const tableData = [
    {
      id: 1,
      Name: 'Keywords',
      Status: 'C001',

    },
    {
      id: 2,
      Name: 'Text Content	',
      Status: 'C001'
    },
    {
      id: 3,
      Name: 'Backlink',
      Status: 'C001',

    },
    {
      id: 4,
      Name: 'Website Management',
      Status: 'C001'
    },
    {
      id: 5,
      Name: 'ABC Corp',
      Status: 'C001',

    },
    {
      id: 6,
      Name: 'ABC Corp',
      Status: 'C001'
    },
    {
      id: 7,
      Name: 'ABC Corp',
      Status: 'C001',

    },
    {
      id: 8,
      Name: 'ABC Corp',
      Status: 'C001'
    },
    // Add more rows as needed
  ];
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [initialValues, setIntialValues] = useState({
    txn_id: "",
    count: count,
    page: page,
    start_date: getCurrentDate(),
    end_date: getCurrentDate(),
    adhaar_no: "",
    customer_mobile: "",
    userid: "",
  })

  const submitForm = async (values) => {
    setLoading(true)
    try {
      // const res = await ApespaymentReport(values);
      // setAepsData(res?.data);
      // setLoading(false)
    } catch (error) {

    }

  }

  const getDmtTxnData = async () => {
    setLoading(true)
    try {
      // const res = await ApespaymentReport({ ...initialValues });

      // setAepsData(res?.data);
      // setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    // setPage(e - 1)
    getDmtTxnData(e - 1)
  };


  useEffect(() => {
    getDmtTxnData(page)
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

      <section className="ListDistributer exppdf">
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1 ">
                  <div className="tbl-caption mb-3">
                    <h4 className="heading mb-0"><b>Manage Categories</b></h4>
                    <div className="text-white">
                      <Link className= "btn btn-primary text-camelcase" to="">Add Category</Link>
                    </div>
                  </div>
                  <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                    <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                      <thead>
                        <tr role='row'>
                          <th className="text-center">S.No</th>
                          <th className="text-center"> Name</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.length > 0 ? (
                          tableData.map((item, index) => (
                            <tr role="row" className="odd" key={index}>
                              <td>{item?.id}</td>
                              <td>{item?.Name}</td>
                              <td><span className="badge badge-success">Status</span></td>
                              <td>
                                <div className="text-center"><button className="btn btn-info">Edit</button>
                                <button className="btn btn-danger">Delete</button></div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={12}>
                              <Empty />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>

                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                      Total {tableData.length} entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                      <Pagination
                        defaultCurrent={1}
                        onChange={onChangeVal}
                        total={tableData.length}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <ToastContainer />
    </>
  )
}

export default HomePageCategories
