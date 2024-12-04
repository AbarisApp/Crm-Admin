import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExportPdf from '../../common/exportPdf/ExportPdf'
import { ToastContainer } from 'react-toastify'
import { message, Popconfirm } from 'antd'
import { deleteProductById } from '../../api/login/Login'
import Loadar from '../../common/loader/Loader'

function ListProduct({ data }) {
    const [loading, setLoading] = useState(false)
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            const res = await deleteProductById(id)
        } catch (error) {

        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };

    return (
        <>
        {loading && <Loadar/>}
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
                                        <h4 className="heading mb-0"><b>All Products</b></h4>
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
                                                    <th style={{ textAlign: 'center' }}>Product</th>
                                                    <th style={{ textAlign: 'center' }}>Variants</th>
                                                    <th style={{ textAlign: 'center' }}>Category</th>
                                                    <th style={{ textAlign: 'center' }}>Brand</th>
                                                    {/* <th style={{ textAlign: 'center' }}>Industry</th> */}
                                                    <th style={{ textAlign: 'center' }}>Seller</th>
                                                    <th >Active</th>
                                                    <th >Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data?.map((item, i) => {
                                                    return <tr role="row" className="odd">
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{1 + i}</td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.product?.name}</td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.product?.variations?.map((it) => { return <span>{it.weight}</span> })} </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.categories?.map((ite) => { return <span>{ite?.name} ,</span> })} </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.product?.brand_id?.map((it) => { return <span>{it.name}</span> })} </td>
                                                        {/* <td className="sorting_1" style={{ textAlign: 'center' }}>Abc </td> */}
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>-- </td>
                                                        <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                            <div className="form-check form-switch">
                                                                <input
                                                                    style={{ border: '1px solid black' }}
                                                                    className="form-check-input"
                                                                    checked={item?.product?.approve}
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id="flexSwitchCheckDefault"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                            <Popconfirm
                                                                title="Delete !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item?._id.uid)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                            <Link to={`/edit-product/${item?._id.uid}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
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

export default ListProduct