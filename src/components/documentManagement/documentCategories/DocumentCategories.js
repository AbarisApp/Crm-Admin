import { Pagination, Popconfirm } from "antd"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { Link } from "react-router-dom";
import DocumentCategoriesFilter from "./documentCategoriesFilter/DocumentCategoriesFilter";
import { useEffect, useState } from "react";
import { AiFillForward } from "react-icons/ai";
import { doc_management_add_doc_catagory, doc_management_doc_category_delete_type, doc_management_docAdmin } from "../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";


const DocumentCategories = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Document Management",
        title_2: 'Document Categories',
        path_2: ``
    };

    const [childcat, setChildCat] = useState(false)

    const opentd = (id) => {
        setChildCat(!id)
    }

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    // console.log(page);
    const [totalCount, setTotalCount] = useState(null)
    // console.log(totalCount);
    const [data, setData] = useState(null)


    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        min_amt: 0,
        max_amt: 0,
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
        is_archieve: '',
        parent_id: '',
        search: ''
        // type: '',
        // trans_type: '',
        // order_id: '',
        // txn_id: '',
        // sortType: '',
        // sortType: ''
    })

    console.log(filterInitial);




    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const [parentId, setParentId] = useState([])
    // console.log(parentId);


    const parentIdgetApi = async () => {
        try {
            const res = await doc_management_docAdmin()
            setParentId(res?.data)
        } catch (error) {

        }
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await doc_management_add_doc_catagory(clone)
            // console.log(res);
            setTotalCount(res?.totalCount)
            setData(res?.data)
            allDataWalletReport()
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        console.log(e - 1);

        setPage(e - 1)
        getTransitionReport(e - 1)
    };


    const ResetData = async () => {
        setLoading(true)
        const obj = {
            count: 10,
            page: 0,
            min_amt: 0,
            max_amt: 0,
            end_date: '',
            start_date: '',
            type: '',
            trans_type: '',
            order_id: '',
            txn_id: '',
            sortType: '',
            sortType: '',
            user_id: window.localStorage.getItem('userIdToken')
        }
        try {
            // const res = await walletsREports(obj)
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // setFilterInitial({
            //     end_date: '',
            //     start_date: '',
            //     type: '',
            //     trans_type: '',
            //     order_id: '',
            //     txn_id: '',
            // })
        } catch (error) {

        }
        setLoading(false)
    }


    const [sortDirection, setSortDirection] = useState();
    // console.log(sortDirection);

    const [assending, setDecending] = useState(1)

    const sortByColumn = async (key) => {
        if (sortDirection == 'asc') {
            setDecending(1)
        } else {
            setDecending(-1)
        }

        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');

        setLoading(true)

        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, sortType: +assending, sortKey: key, user_id: window.localStorage.getItem('userIdToken') }
        // console.log(clone);
        try {
            // const res = await walletsREports(clone)
            // // console.log(res?.data?.data?.wallet);
            // setTotalCount(res?.data?.data?.total)
            // setData(res?.data?.data?.wallet)
            // // getTransitionReport()
        } catch (error) {

        }
        setLoading(false)
    };

    const allDataWalletReport = async () => {
        const clone = { ...filterInitial, count: count, page: page, min_amt: +filterInitial.min_amt, max_amt: +filterInitial.max_amt, user_id: window.localStorage.getItem('userIdToken') }
        try {
            // const res = await allDataWallets(clone)
            // setAllData(res?.data?.data?.wallet);
        } catch (error) {

        }
    }

    useEffect(() => {
        getCurrentDate()
        parentIdgetApi()
    }, [])

    useEffect(() => {
        allDataWalletReport()
        getTransitionReport(0)

    }, [])

    const confirm = (id) => {
        // console.log(id);
        deleteaData(id)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const deleteaData = async (id) => {
        try {
            const res = await doc_management_doc_category_delete_type(id)
            if (res?.error == false) {
                toastSuccessMessage(res?.message)
                getTransitionReport()
            }
        } catch (error) {

        }
    }




    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <DocumentCategoriesFilter parentId={parentId} getTransitionReport={getTransitionReport} handleChange={handleChange} filterInitial={filterInitial} />
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b> Document Categories </b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/document-categories-add" role="button" aria-controls="offcanvasExample">+  ADD DOCUMENT CATEGORY </Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                            {/* <ExportPdf />
                                            {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                            </CSVLink>) : ""} */}

                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}

                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Parent
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Is  Parent
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Status
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action	</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {data && data?.map((item) => {
                                                    return <tr role="row" className="odd" key={item?._id}>
                                                        {/* <td onClick={() => opentd(item?._id)}> <AiFillForward /> </td> */}
                                                        <td>{item?.name}</td>
                                                        <td>
                                                            {item?.parent_id?.name}
                                                        </td>
                                                        <td>{item?.is_parent == true ? "Yes" : 'No'}</td>
                                                        <td>{item?.isActive == true ? 'Active' : 'In Active'}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/document-categories-update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  Sub Module  !"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
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
                                        {childcat && <div className="hesingtablechild">
                                            <div className="hesingtablechilds-set">
                                                <h3>Child Categories</h3>
                                                <Link className="btn btn-primary btn-sm" to="/children-categories-add" role="button" aria-controls="offcanvasExample">Add Child Category</Link>
                                            </div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>mustafa</td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  Sub Module  !"
                                                                    description="Are you sure to delete ?"
                                                                    // onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>}
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {totalCount} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                // defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
            <ToastContainer />
        </>
    )
}

export default DocumentCategories