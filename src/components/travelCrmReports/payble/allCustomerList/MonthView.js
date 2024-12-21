
import { Empty, Pagination } from 'antd';
import React, { useState } from 'react';

function MonthView() {
    // Sample data for one entry
    const data1 = [
        {
            id: 1,
            accountName: 'John Doe',
            alias: 'JDoe',
            closing: 1500,
            clDC: 'D',
            mobile: '123-456-7890',
            city: 'New York',
            state: 'NY',
        },
    ];
    return (
        <>
            <section className='mx-4'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Month View</h4>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '150px' }}># </th>
                                                    <th style={{ width: '150px' }}>Month Name</th>
                                                    <th style={{ width: '150px' }}>Cramt</th>
                                                    <th style={{ width: '150px' }}>Dbamt</th>
                                                    <th style={{ width: '150px' }}>Closing</th>
                                                    <th style={{ width: '150px' }}>Cl D/C</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data1.length > 0 ? (
                                                    data1.map((item) => (
                                                        <tr key={item.id} role="row">
                                                            <td>{item.id}</td>
                                                            <td>{item.accountName}</td>
                                                            <td>{item.alias}</td>
                                                            <td>{item.closing}</td>
                                                            <td>{item.clDC}</td>
                                                            <td>{item.clDC}</td>
                                                           
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr role="row">
                                                        <td colSpan="8" className="text-center">
                                                            <Empty />
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total {data1.length} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                                total={data1.length}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MonthView;
