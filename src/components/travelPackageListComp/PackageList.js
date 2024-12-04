import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExportPdf from '../../common/exportPdf/ExportPdf'
import { toast, ToastContainer } from 'react-toastify'
import { Pagination } from 'antd';
import Swal from 'sweetalert2';
import { deleteTravelPackage } from '../../api/login/Login';

function PackageList({ listData, totalCount, page, count, onChangeVal, pageIndex, countToShowInTable }) {
    const [loading, setLoading] = useState(false);


    const toastSuccessMessage = (msg) => {
        toast.success(msg, {
            position: "top-center",
        });
    };
    const toastErrorMessage = (msg) => {
        toast.error(msg, {
            position: "top-center",
        });
    };

    const deleteData = async (id) => {
        setLoading(true)
        try {
            const res = await deleteTravelPackage(id)
            if (res?.error === false) {
                toastSuccessMessage('Package Deleted');
            } else if (res?.error === true) {
                toastErrorMessage('Package Not Deleted');
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    };


    const openDeleteModal = (id) => {
        Swal.fire({
            title: 'Are Sure To Delete',
            text: `It Will  Permanently Delete The Data`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Proceed',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Hit the API here
                deleteData(id)
            }
        });
    };

    return (
        <>
            {loading && (
                <div className="preloaderCount">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
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
                                        <h4 className="heading mb-0"><b>All Packages</b></h4>
                                        <div>
                                            <ExportPdf />
                                            <Link className='btn btn-primary btn-sm' to={"/travel-package/create"} role="button" aria-controls="offcanvasExample">+ Create Package</Link>
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
                                                    <th style={{ textAlign: 'center' }}>Package Name</th>
                                                    <th style={{ textAlign: 'center' }}>Countries</th>
                                                    <th style={{ textAlign: 'center' }}>Days/Night</th>
                                                    <th style={{ textAlign: 'center' }}>Created By</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listData && listData?.map((item, i) => {
                                                    return <tr key={i} role="row" className="odd">
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                            {(pageIndex * countToShowInTable) + i + 1}
                                                        </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.package}</td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                            {item?.cities?.map((cityItem, indx) => (
                                                                <React.Fragment key={indx}>
                                                                    {cityItem?.country}
                                                                    {indx < item.cities.length - 1 && ','}
                                                                    <br />
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                            {item?.cities?.map((cityItem, indx) => (
                                                                <React.Fragment key={indx}>
                                                                    {cityItem?.stay}
                                                                    {indx < item.cities.length - 1 && ','}
                                                                    <br />
                                                                </React.Fragment>
                                                            ))}
                                                        </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.createdBy?.name}</td>
                                                        <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                            <Link to={`edit/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Link to={"#"} onClick={() => openDeleteModal(item?._id)} className="btn btn-danger shadow btn-xs sharp me-1"><i className="fa fa-trash" /></Link>
                                                        </td>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                        {/* <Pagination className="pagination_gutter pagination_primary pagination_sm" /> */}
                                        < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}
                                                defaultCurrent={1}
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

            </section>
        </>
    )
}

export default PackageList