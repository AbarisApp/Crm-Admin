import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Pagination } from 'antd';
import Swal from 'sweetalert2';
import axios from 'axios';

function MasterPackageListComp() {


    const handleDuplicateClick = () => {
        Swal.fire({
            title: 'Duplicate Selected Packages',
            text: `Are you sure you want to duplicate the selected packages?`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Proceed',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Hit the API here
                axios.post('https://your-api-endpoint.com/duplicate', {
                    // Add the data to send in the request body
                    packageIds: [1, 2, 3], // Example data
                })
                    .then((response) => {
                        Swal.fire('Duplicated!', 'The selected packages have been duplicated.', 'success');
                        console.log('API Response:', response.data); // Handle the response as needed
                    })
                    .catch((error) => {
                        Swal.fire('Error!', 'An error occurred while duplicating the packages.', 'error');
                        console.error('API Error:', error);
                    });
            }
        });
    };



    return (
        <>
            <ToastContainer />
            <section className="ListDistributer mx-4 expdf ">
                <div className="text-center">
                    <p>Total Number of Package Selected: 0</p>
                </div>
                <div className="row">
                    <div className="col-xl-12" >
                        <div className="card" >
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>All Master Packages</b></h4>
                                        <div>
                                            <Link className='btn btn-primary btn-sm' to={"#"} role="button" aria-controls="offcanvasExample">Select All Packages</Link>
                                            {/* <Link className='btn btn-primary btn-sm' to={"#"} role="button" aria-controls="offcanvasExample">Duplicate Selected Packages</Link> */}

                                            <Link
                                                className="btn btn-primary btn-sm"
                                                to="#"
                                                role="button"
                                                aria-controls="offcanvasExample"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent the default link behavior
                                                    handleDuplicateClick();
                                                }}
                                            >
                                                Duplicate Selected Packages
                                            </Link>

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
                                                    <th>Select</th>
                                                    <th style={{ textAlign: 'center' }}>Package Name</th>
                                                    <th style={{ textAlign: 'center' }}>Countries</th>
                                                    <th style={{ textAlign: 'center' }}>Days/Night</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                        {/* {(pageIndex * countToShowInTable) + i + 1} */}1
                                                    </td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                        <div className="form-check">
                                                            <input style={{ border: '1px solid black', textAlign: 'center' }} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                        </div>
                                                    </td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>ABC</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>India</td>
                                                    <td className="sorting_1" style={{ textAlign: 'center' }}>1</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                        <Link to={`detail/1`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-eye" />
                                                        </Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-copy" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            {/* Total {totalCount} entries */}
                                            Total 1 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
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
                    </div>
                </div>

            </section>
        </>
    )
}

export default MasterPackageListComp