import { Empty, Pagination } from 'antd';
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-bootstrap';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function ShopAddons() {
    const breadCrumbsTitle = {
        title_1: "Addons",
        title_1: "AtoZ SEO Tools Addons",
    }
    const tableData = [
        {
            id: 1,
            Name: 'AtoZ SEO Tools Addon Bundle - All Addons 	{Including PDF Tool}',
            price: 760,

        },
        {
            id: 2,
            Name: 'AtoZ SEO Tools Addon Bundle - All Addons	{without PDF Tool}',
            price: 760,

        },
        {
            id: 3,
            Name: 'Adsense Calculator"		',
            price: 980
        },
        {
            id: 4,
            Name: 'Advance Plagiarism Checker	',
            price: 760,

        },
        {
            id: 5,
            Name: 'Age Calculator	"		',
            price: 980
        },
        {
            id: 6,
            Name: 'All in One Website Reviewer		',
            price: 760,

        },
        {
            id: 7,
            Name: 'Directory - "/admin/addons"		',
            price: 980
        },
        {
            id: 8,
            Name: 'AtoZ SEO Tools Addon Bundle - All Addons	',
            price: 760,

        },
        {
            id: 9,
            Name: 'Directory - "/admin/addons"		',
            price: 980
        },
        {
            id: 10,
            Name: 'AtoZ SEO Tools Addon Bundle - All Addons	',
            price: 760,

        },
        {
            id: 11,
            Name: 'Article Scraper	"		',
            price: 980
        },
        {
            id: 12,
            Name: 'Article Spinner Pro (Multiple Languages)		',
            price: 760,

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
                                                    <th className="text-center"> Tool Name</th>
                                                    <th className="text-center">Price</th>
                                                    <th className="text-center">Tool Link</th>
                                                    <th className="text-center">Buy Now</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {tableData.length > 0 ? (
                                                    tableData.map((item, index) => (
                                                        <tr role="row" className="odd" key={index}>
                                                            <td>{item?.id}</td>
                                                            <td>{item?.Name}</td>
                                                            <td><span>₹{item?.price}</span></td>
                                                            <td><button className=" btn btn-success">Details</button></td>
                                                            <td><button className=" btn btn-warning">Buy now</button></td>
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

export default ShopAddons
