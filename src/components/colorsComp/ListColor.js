import React from 'react'
import { Link } from 'react-router-dom'
import ExportPdf from '../../common/exportPdf/ExportPdf'
import { ToastContainer } from 'react-toastify'
import { Popconfirm } from 'antd'
function ListColor({ data, cancel, confirm }) {
    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-end">

                </div>
                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>All Colors</b></h4>
                                        <div>
                                            <ExportPdf />
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer ">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">

                                                    <th style={{ textAlign: 'center' }}>#</th>
                                                    <th style={{ textAlign: 'center' }}>Name</th>
                                                    <th style={{ textAlign: 'center' }}>Code</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {data?.map((item, i) => {
                                                    return <tr role="row" className="odd">
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{i + 1}</td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item.name}</td>
                                                      
                                                      
                                                        <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                            <Link to={`/product_color/${item.uid}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item?.uid)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                        {/* <Pagination className="pagination_gutter pagination_primary pagination_sm" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ListColor