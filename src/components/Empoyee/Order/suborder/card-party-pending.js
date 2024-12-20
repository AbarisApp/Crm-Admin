import React from 'react';
import { Pagination, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function CardParty({listTitleD}) {
  return (
    <div className='card' style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }}>
      {/* <div  style={{ marginTop: "10px" }}> */}
      <div className='text-center' style={{ border: "solid black 1px", margin: "1px" }}>
        <p>Party Wise Pending Order Details</p>
        <p>From Date: 12-Dec-2024 To Date: 12-Dec-2024</p>
      </div>
      <div className='table-responsive active-projects style-1 pe-0' >
        <h3 className='tbl-caption text-light'>
          Name of party: GJ1249 - Maruti Agro Center - Patdi
        </h3> </div>
      <div className="col-6 mb-3">
        <label for="exampleFormControlInput1" className="form-label mb-0">Email To  </label>
        <input type="text" class="form-control" id="exampleFormControlInput1"
          placeholder="" />
      </div>

      <div>
        <div className="table-responsive active-projects style-1">
          <div className="tbl-caption">
            <h4 className="heading mb-0">{listTitleD}</h4>
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
                  <td>
                    <div className="d-flex">
                      <Link
                        // to={`/create-pickup-point/${item?._id}`}
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
          {/* </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CardParty;