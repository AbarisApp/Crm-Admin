import React from 'react'
import { message, Pagination, Popconfirm } from "antd"
import { Link } from "react-router-dom";
import Loadar from "../../../../common/loader/Loader";
import { deleteSubModulee, deleteSubSubModulee } from "../../../../api/login/Login";


function ListSubSubModule({ onChangeVal, dmtTtxn, loading, dmtExcelTtxn, getDmtTxnData, total,page }) {
    const curdmtTtxn = dmtTtxn

    
    const curdmtexcelTtxn = dmtExcelTtxn?.dmtTransaction


    const deleteMainModule = async (id) => {
        try {
            const res = await deleteSubSubModulee(id)
            getDmtTxnData(page)
        } catch (error) {

        }
    }


    const confirm = (id) => {
        deleteMainModule(id)
        message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b> List Sub Sub Module </b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-sub-sub-module" role="button" aria-controls="offcanvasExample">+  ADD SUB SUB MODULES </Link>
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Date
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Slug	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Front Route	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Sub module	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Backend Point	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action	</th>
                                                </tr>
                                            </thead>
                                            {loading && <Loadar />}
                                            <tbody>
                                                {curdmtTtxn?.map((item, i) => {
                                                    return <tr role="row" className="odd" key={i}>
                                                        <td> {item?.createdAt}</td>
                                                        <td> {item?.name}</td>
                                                        <td> {item?.slug}</td>
                                                        <td> {item?.frontRoute}</td>
                                                        <td> {item?.main_module}</td>
                                                        <td> {item?.back_end_point?.map((item) => {
                                                            return <>
                                                                <span>{item}</span>
                                                            </>
                                                        })}</td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`/update-sub-sub-module/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  Sub Sub Module !"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {total} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={total}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}
export default ListSubSubModule
