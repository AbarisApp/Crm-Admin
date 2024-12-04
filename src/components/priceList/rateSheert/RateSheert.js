import { Link } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { message, Pagination, Popconfirm } from "antd";
import { FaPlus } from "react-icons/fa";
import { deleteAccRateSheetById, getAccRateSheetByPage } from "../../../api/login/Login";
import { useEffect, useState } from "react";


const RateSheert = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'List Of Rate Sheet',
        path_2: ``
    };
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()


    // ----------list Api----------
    const getFloorMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getAccRateSheetByPage(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area




    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteAccRateSheetById(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
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



    useEffect(() => {
        getFloorMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Rate Sheet</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/ratesheet/add" role="button" aria-controls="offcanvasExample">+  Add Rate Sheet</Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    S.No
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Name
                                                </th>
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px', textAlign: 'center' }}>
                                                    Status
                                                </th>



                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px', textAlign: 'center' }}>
                                                    Actions </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map((item, i) => {
                                                return <tr role="row" className="odd">
                                                    <td>
                                                        {(i + 1) + (page * count)}
                                                    </td>

                                                    <td>
                                                        {item?.name}
                                                    </td>
                                                    <td>
                                                        {item?.isActive ? 'Active' : 'InActive'}
                                                    </td>


                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/ratesheet/add/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            <Popconfirm
                                                                title="Delete !"
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
                </div >
            </div>
        </>
    )
}

export default RateSheert