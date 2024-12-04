import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Empty, Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../common/CustomInputField";

function ManageAddons({ selectAll, handleSelectAll, handleCheckboxChange, apesData, selectedUsers }) {
    const breadCrumbsTitle = {
        title_1: "Addons",
        title_1: "Mange Addons",
    }
    const tableData = [
        {
            id: 1,
            Name: 'ZipArchive Extension	',
            Status: 'Found',

        },
        {
            id: 2,
            Name: 'Directory - "/admin/addons"		',
            Status: 'Writable'
        },

    ];
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [aepsData, setAepsData] = useState()
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState(false)
    const token = window.localStorage.getItem('userToken')
    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [initialValues, setIntialValues] = useState({
        txn_id: "",
        count: count,
        page: page,
        start_date: getCurrentDate(),
        end_date: getCurrentDate(),
        adhaar_no: "",
        customer_mobile: "",
        userid: "",
    })

    const submitForm = async (values) => {
        setLoading(true)
        try {
            // const res = await ApespaymentReport(values);
            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }

    }

    const getDmtTxnData = async () => {
        setLoading(true)
        try {
            // const res = await ApespaymentReport({ ...initialValues });

            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }
    }


    const onChangeVal = (e) => {
        // setPage(e - 1)
        getDmtTxnData(e - 1)
    };


    useEffect(() => {
        getDmtTxnData(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1 ">
                                    <div className="tbl-caption mb-3">
                                        <h4 className="heading mb-0"><b>Manage Addons</b></h4>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>
                                                <tr role='row'>
                                                    <th className="text-center">S.No</th>
                                                    <th className="text-center"> Name</th>
                                                    <th className="text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.length > 0 ? (
                                                    tableData.map((item, index) => (
                                                        <tr role="row" className="odd" key={index}>
                                                            <td>{item?.id}</td>
                                                            <td>{item?.Name}</td>
                                                            <td><span className="badge badge-success">{item?.Status}</span></td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={12}>
                                                            <Empty />
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {tableData.length} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={tableData.length}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <label className=""><small>
                                                Select a addon package:
                                            </small></label>
                                            <CustomInputField
                                                type="file"
                                                value={""}
                                                onChange={""}
                                                id="smtpUsername"
                                                name="smtpUsername"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <button className="btn btn-primary">Upload</button>
                                        </div>
                                    </div>
                                    <div classname="row">
                                        <div className="col-md-8">
                                            <div className="callout bg-success rounded text-white p-3">
                                            <div className="border  border-light p-3 rounded">
                                                <h4>Note!</h4>
                                                <p className="text-white">1) Don't upload unknown addons and make sure it is downloaded from authorized websites.</p>
                                                <p className="text-white">2) Unauthorized addons may crash the website and we weren't responsible for that.</p>
                                                <p className="text-white">3) Make sure the PHP upload limit is greater than file size.</p>
                                                <p className="text-white">4) Upload only "<b>addonpk</b>" file format. You have ZIP package file then extract and find "addonpk" file.</p>
                                            </div>
                                            </div>
                                            
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ToastContainer />
        </>
    )
}

export default ManageAddons
