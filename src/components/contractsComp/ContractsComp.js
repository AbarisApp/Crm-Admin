import { Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { BarChart, Area, XAxis, Bar, AreaChart, YAxis, CartesianGrid, Tooltip, } from 'recharts';

function ContractsComp() {
    const data = [
        {
            name: 'Under Seal',
            uv: 30,

        },
        {
            name: 'Implied Contracts',
            uv: 25,

        },
        {
            name: 'Bilateral & unilateral',
            uv: 142,

        },
        {
            name: 'Adhesion',
            uv: 152,

        },
        {
            name: 'Void & Voidable',
            uv: 95,

        },
        {
            name: 'Void & Voidable',
            uv: 85,

        },
        {
            name: 'Void & Voidable',
            uv: 90,

        },

    ];
    const data2 = [
        {
            name: 'Under Seal',
            uv: 25,

        },
        {
            name: 'Implied Contracts',
            uv: 30,

        },
        {
            name: 'Bilateral & unilateral',
            uv: 142,

        },
        {
            name: 'Adhesion',
            uv: 162,

        },
        {
            name: 'Void & Voidable',
            uv: 90,

        },

    ];
    return (
        <>
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className='row mt-3 mb-3'>
                                    <div className='col-lg-12 mt-3 mb-3'>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/contract/create" role="button" aria-controls="offcanvasExample">+ New Contract</Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <h3>Contract Summary</h3>
                                    </div>
                                </div>

                                <div className='row mt-5 mb-5'>
                                    <div className='col-lg-2'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRight: '1px solid black' }}>
                                            <p style={{ fontWeight: '700' }}>11</p>
                                            <p className='text-primary ms-3'>Active</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRight: '1px solid black' }}>
                                            <p style={{ fontWeight: '700' }}>0</p>
                                            <p className='text-danger ms-3'>Expired</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRight: '1px solid black' }}>
                                            <p style={{ fontWeight: '700' }}>6</p>
                                            <p className='text-danger ms-3'>About To Expire</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', borderRight: '1px solid black' }}>
                                            <p style={{ fontWeight: '700' }}>11</p>
                                            <p className='text-success ms-3'>Recently Added</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <p style={{ fontWeight: '700' }}>0</p>
                                            <p className='text-secondary ms-3'>Trash</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-5 mb-5'>
                                    <div className='col-lg-5'>
                                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Contracts by Type</h5>
                                        <hr className=' border-primary m-auto pt-2' />

                                        <BarChart width={500} height={300} data={data}>
                                            <XAxis dataKey='name' />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="uv" fill="#8884d8" />
                                        </BarChart>
                                    </div>

                                    <div className='col-lg-7'>
                                        <h5 className='m-0 p-0' style={{ color: '#006666' }}>Contracts Value by Type (USD)</h5>
                                        <hr className=' border-primary m-auto pt-2' />

                                        <AreaChart
                                            width={700}
                                            height={300}
                                            data={data2}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area type="line" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                        </AreaChart>
                                    </div>

                                </div>



                                <div className="table-responsive active-projects style-1">

                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>#</th>
                                                    <th style={{ width: '150px' }}>Subject</th>
                                                    <th style={{ width: '150px' }}>Customer</th>
                                                    <th style={{ width: '150px' }}>Contract Type</th>
                                                    <th style={{ width: '150px' }}>Contract Value</th>
                                                    <th style={{ width: '150px' }}>Start Date</th>
                                                    <th style={{ width: '150px' }}>End Date</th>
                                                    <th style={{ width: '150px' }}>Project</th>
                                                    <th style={{ width: '150px' }}>Signature</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <span className='text-primary'>Gryphon; Before Alice Could not answer withought a.</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Kilback, Botsford and Kub</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <span className='text-primary'>Mine; The Queen Turned Angrily.</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Koelpin-Thompson</span>
                                                    </td>
                                                    <td>Adhesion Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        <span className='text-primary'>That your eye was a long as it was very well as she.</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Kilback, Botsford and Kub</span>
                                                    </td>
                                                    <td>Implied Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>
                                                        <span className='text-primary'>Cat; as soon as there was enough of me let to make.</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Walter-Cummerata</span>
                                                    </td>
                                                    <td>Bilateral and Unilateral Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Void and Voidable Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Shanahan LLC</span>
                                                    </td>
                                                    <td>Adhesion Contracts</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>
                                                        <span className='text-primary'>Caterpillar; and it set to work very deligently to write</span>
                                                    </td>
                                                    <td>
                                                        <span className='text-primary'>Kutch Inc</span>
                                                    </td>
                                                    <td>Contracts under Seal</td>
                                                    <td>$1,747.00</td>
                                                    <td>2024-10-08</td>
                                                    <td>2024-10-03</td>
                                                    <td></td>
                                                    <td>Not Signed</td>
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

export default ContractsComp