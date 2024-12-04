import { Pagination } from 'antd';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function ProposalList({ style }) {
    const parems = useParams()
    return (
        <>
            <div style={style && { width: "1000px" }}>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Proposal List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to={`/customer-view/${parems.id}/proposal/create`} role="button" aria-controls="offcanvasExample">+ New Proposal</Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '200px' }}>Proposal</th>
                                                    <th style={{ width: '150px' }}>Subject</th>
                                                    <th style={{ width: '150px' }}>To</th>
                                                    <th style={{ width: '150px' }}>Total</th>
                                                    <th style={{ width: '150px' }}>Date</th>
                                                    <th style={{ width: '150px' }}>Open Till</th>
                                                    <th style={{ width: '150px' }}>Project</th>
                                                    <th style={{ width: '150px' }}>Tags</th>
                                                    <th style={{ width: '150px' }}>Date Created</th>
                                                    <th style={{ width: '100px' }}>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <span className='text-primary'>PRO-000002</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Web Design Proposal</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Schaden-Watsica</span>
                                                    </td>
                                                    <td>$5,900.00</td>
                                                    <td>2024-10-01</td>
                                                    <td>2024-10-08</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2024-10-01 02:00:06</td>
                                                    <td>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'gainsboro', color: 'black' }}>
                                                            Draft
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <span className='text-primary'>PRO-000001</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>SEO Proposal</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Stehr,Kuhic and Klocko</span>
                                                    </td>
                                                    <td>$1,932.00</td>
                                                    <td>2024-10-01</td>
                                                    <td>2024-10-08</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2024-10-01 02:00:06</td>
                                                    <td>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'green', color: 'black' }}>
                                                            Accepted
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <span className='text-primary'>PRO-000001</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>SEO Proposal</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Stehr,Kuhic and Klocko</span>
                                                    </td>
                                                    <td>$1,932.00</td>
                                                    <td>2024-10-01</td>
                                                    <td>2024-10-08</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2024-10-01 02:00:06</td>
                                                    <td>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'green', color: 'black' }}>
                                                            Accepted
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <span className='text-primary'>PRO-000001</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>SEO Proposal</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Stehr,Kuhic and Klocko</span>
                                                    </td>
                                                    <td>$1,932.00</td>
                                                    <td>2024-10-01</td>
                                                    <td>2024-10-08</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>2024-10-01 02:00:06</td>
                                                    <td>
                                                        <span style={{ padding: '5px 10px', borderRadius: '5px', backgroundColor: 'green', color: 'black' }}>
                                                            Accepted
                                                        </span>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 00 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default ProposalList