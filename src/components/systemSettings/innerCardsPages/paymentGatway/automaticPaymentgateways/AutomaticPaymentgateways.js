import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";

function AutomaticPaymentgateways({ setShowUpdateGateway,showUpdateGateway }) {  // Fixed prop name
  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState();
  const [loading, setLoading] = useState(false);
  
  const datas = [
    {
      Gateway: "Aamarpay",
      Supported: 1,
      Enabled: 0,
      Currency: "Enabled",
      Status: "Enabled"
    }
  ];

  const getTemplateCategoryListData = async (num) => {
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    getTemplateCategoryListData(0);
  }, []);

  const deleteTemplateCategoryItem = async (id) => {
    // Simulate deletion process
    message.success('Delete Successful!');
  };

  const confirm = (id) => {
    deleteTemplateCategoryItem(id);
  };

  const cancel = () => {
    message.error('Cancel Successful!');
  };

  const onChangeVal = (page) => {
    setPage(page);
    getTemplateCategoryListData(page - 1);
  };

  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <div className="tbl-caption">
                <h4 className="heading mb-0">Automatic Gateways</h4>
              </div>
              <div id="template-category-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                <div className="dt-buttons">
                  <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0">
                    <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                  </button>
                </div>
                <table id="template-category-tblwrapper" className="table dataTable no-footer" role="grid">
                  <thead>
                    <tr role="row">
                      <th>Gateway</th>
                      <th>Supported</th>
                      <th>Enabled Currency</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas && datas.map((item, i) => (
                      <tr key={i}>
                        <td>{item?.Gateway}</td>
                        <td>{item?.Supported}</td>
                        <td>{item?.Currency}</td>
                        <td>{item?.Status}</td>
                        <td>
                          <div className="d-flex">
                            <button className="btn btn-primary shadow btn-xs sharp me-1" onClick={()=>setShowUpdateGateway(!showUpdateGateway)}>
                              <FaRegEdit />
                            </button>
                            <Popconfirm
                              title="Delete Template Category"
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
                <div className="dataTables_info" role="status">
                  Total {totalCount} entries
                </div>
                <div className="dataTables_paginate paging_simple_numbers">
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
    </div>
  );
}

export default AutomaticPaymentgateways;
