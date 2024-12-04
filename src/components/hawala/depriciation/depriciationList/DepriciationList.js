import { Empty } from 'antd';
import React from 'react';

function DepriciationList() {
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Depriciation</h4>
                                </div>
                                <div className="dataTables_wrapper no-footer">
                                    <div className="card mt-2">
                                        <div className='text-denger'>Set Profit And Loss Account In Branch Setup If Not Set.</div>
                                        <small className='text-info'>The Amount is calculated based on Months</small>
                                    </div>
                                    <div>
                                        <table
                                            id="table-to-xls"
                                            className="table dataTable no-footer"
                                            role="grid"
                                            aria-describedby="empoloyees-tblwrapper_info"
                                        >
                                            <thead>
                                                <tr role="row">
                                                    <th
                                                        className="sorting_asc"
                                                        tabIndex={0}
                                                        aria-controls="empoloyees-tblwrapper"
                                                        rowSpan={1}
                                                        colSpan={1}
                                                        aria-sort="ascending"
                                                        aria-label="Asset Account: activate to sort column descending"
                                                        style={{ width: "122.312px" }}
                                                    >
                                                        Asset Account
                                                    </th>
                                                    <th
                                                        className="sorting_asc"
                                                        tabIndex={0}
                                                        aria-controls="empoloyees-tblwrapper"
                                                        rowSpan={1}
                                                        colSpan={1}
                                                        aria-sort="ascending"
                                                        aria-label="Depreciation Account: activate to sort column descending"
                                                        style={{ width: "122.312px" }}
                                                    >
                                                        Depreciation Account
                                                    </th>
                                                    <th
                                                        className="sorting"
                                                        tabIndex={0}
                                                        aria-controls="empoloyees-tblwrapper"
                                                        rowSpan={1}
                                                        colSpan={1}
                                                        aria-label="Percentage: activate to sort column ascending"
                                                        style={{ width: "203.45px" }}
                                                    >
                                                        Percentage
                                                    </th>
                                                    <th
                                                        className="sorting"
                                                        tabIndex={0}
                                                        aria-controls="empoloyees-tblwrapper"
                                                        rowSpan={1}
                                                        colSpan={1}
                                                        aria-label="Amount: activate to sort column ascending"
                                                        style={{ width: "156.475px" }}
                                                    >
                                                        Amount
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1" colSpan={4}>
                                                        <span>
                                                            <Empty />
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Showing 1 to 10 of 12 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <a className="paginate_button previous disabled" aria-controls="empoloyees-tblwrapper" data-dt-idx={0} tabIndex={0} id="empoloyees-tblwrapper_previous">
                                                <i className="fa-solid fa-angle-left" />
                                            </a>
                                            <span>
                                                <a className="paginate_button current" aria-controls="empoloyees-tblwrapper" data-dt-idx={1} tabIndex={0}>1</a>
                                                <a className="paginate_button" aria-controls="empoloyees-tblwrapper" data-dt-idx={2} tabIndex={0}>2</a>
                                            </span>
                                            <a className="paginate_button next" aria-controls="empoloyees-tblwrapper" data-dt-idx={3} tabIndex={0} id="empoloyees-tblwrapper_next">
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DepriciationList;
