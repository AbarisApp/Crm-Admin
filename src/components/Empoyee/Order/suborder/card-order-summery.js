import React from 'react';
import { Pagination, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function CardOrder() {
  return (
    <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      <div className='text-center' style={{ border: "solid black 1px", margin: "1px" }}>
        <p>Order Summary Report From Date: 12-Dec-2024 To Date: 12-Dec-2024</p>
      </div>
      <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>
          GROUPING
        </h3> </div>
      <div class="mb-3 col-6">
        <label for="exampleFormControlInput1" class="form-label">Email To  </label>
        <input type="text" class="form-control" id="exampleFormControlInput1"
          placeholder="" />
      </div>


      <div>
        <div className="table-responsive active-projects style-1">
          <div className="tbl-caption">
            <h4 className="heading mb-0">Order Summary List</h4>
          </div>
          <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
            <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
              <thead>
                <tr role="row">
                  <th style={{ width: '50px' }}>S.No</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Depot</th>
                  <th>Customer</th>
                  <th>Employee</th>
                  <th>Category</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>DownLine</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row">
                  <td>1</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>ABC</td>
                  <td>
                    <div className="d-flex">
                      <Link
                        to={`#`}
                        className="btn btn-primary shadow btn-xs sharp me-1"
                      >
                        <i className="fa fa-pencil" />
                      </Link>
                      <Popconfirm
                        title="Delete Pickup Point!"
                        description="Are you sure to delete?"
                        // onConfirm={() => confirm("1")}
                        // onCancel={cancel}
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
              </tbody>
            </table>
            <div className="dataTables_info" role="status" aria-live="polite">
              Total {'0'} entries
            </div>
            <div className="dataTables_paginate paging_simple_numbers">
              <Pagination
              // defaultCurrent={1}
              // onChange={onChangeVal}
              // total={totalCount}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardOrder;