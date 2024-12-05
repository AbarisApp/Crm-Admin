import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { Link } from 'react-router-dom'
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf'
import TravelQuotationAddComp from './travelQuotationAdd/TravelQuotationAddComp';
import { deleteTRCRM_tr_quotation_master, getTRCRM_tr_quotation_master } from '../../../../../../api/login/Login';
import { message, Popconfirm } from 'antd';

function TravelQuoteListComp() {
    const [addShow, setAddShow] = useState(false);
    const [actionType, setActionType] = useState("add");
    const [editData, setEditData] = useState(null);

    const [mainListcom, setMainListCom] = useState(true)
    const funAddShow = () => {
        setActionType("add");
        setEditData(null);
        setAddShow(true);
        setMainListCom(false);
    };

    const funEditShow = (traveller) => {
        setActionType("edit");
        setEditData(traveller);
        setAddShow(true);
        setMainListCom(false);
    };

    const cancelForm = () => {
        setAddShow(false);
        setMainListCom(true);
        setEditData(null);
    };

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
    const [data, setData] = useState([])
    const [allData, setAllData] = useState(null)
    const [filterInitial, setFilterInitial] = useState({
        user_id: '',
        count: '',
        page: '',
        end_date: getCurrentDate(),
        start_date: getCurrentDate(),
    })



    const handleChange = (e) => {
        const clone = { ...filterInitial }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFilterInitial(clone)
    }

    const getTransitionReport = async (input) => {
        // console.log('iojijip');
        setLoading(true)
        const clone = { ...filterInitial, count: count, page: input, user_id: window.localStorage.getItem('userIdToken') }
        try {
            const res = await getTRCRM_tr_quotation_master(clone)
            // console.log(res?.data);
            if (res?.data && res?.data) {
                setTotalCount(res?.totalCount)
                setData(res?.data)
            }
        } catch (error) {

        }
        setLoading(false)
    }
    const onChangeVal = (e) => {
        // console.log(e - 1);
        setPage(e - 1)
        getTransitionReport(e - 1)
    };

    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteTRCRM_tr_quotation_master(id)
            // let backList = totalCount % 11 === 0 ? page - 1 : page
            getTransitionReport(0)
        } catch (error) {
            // toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        // console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };

    useEffect(() => {
        getCurrentDate()
    }, [])

    useEffect(() => {
        getTransitionReport(0)

    }, [])


    return (
        <>
            <ToastContainer />
            {addShow && (
                <TravelQuotationAddComp
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                    getTransitionReport={getTransitionReport}
                />
            )}
            {mainListcom && (
                <section className="ListDistributer mx-4 expdf ">
                    <div className="text-end">
                    </div>
                    <div className="row">
                        <div className="col-xl-12" >
                            <div className="card" >
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        <div className="tbl-caption">
                                            <h4 className="heading mb-0"><b>Quotation Details</b></h4>
                                            <div>
                                                <ExportPdf />
                                                <button className="btn btn-primary btn-sm" onClick={funAddShow}>+ Create Quotation</button>
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

                                                        <th style={{ textAlign: 'center' }}>No. Of Day/Night</th>
                                                        <th style={{ textAlign: 'center' }}>Tour Date</th>
                                                        <th style={{ textAlign: 'center' }}>Customer</th>
                                                        <th style={{ textAlign: 'center' }}>User</th>
                                                        <th style={{ textAlign: 'center' }}>Cities</th>
                                                        <th style={{ textAlign: 'center' }}>Created Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data && data?.map((item) => {
                                                        return <tr role="row" className="odd" key={item?._id}>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>
                                                                {item?.cities?.map((item) => {
                                                                    return <p key={item?._id}>{item?.stay}</p>
                                                                })}
                                                                /
                                                                {item?.options?.map((item) => {
                                                                    return <p key={item?._id}>{item?.nights}</p>
                                                                })}
                                                            </td>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.tour_start_date}</td>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.customer ? item?.customer : ''}</td>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.createdBy?.Goatx}</td>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>Ooty,Mysore</td>
                                                            <td className="sorting_1" style={{ textAlign: 'center' }}>{item?.createdAt}</td>

                                                            <td>
                                                                <div className="d-flex">
                                                                    <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={() => funEditShow(item)}><i className="fa fa-pencil" /></button>
                                                                    <Popconfirm
                                                                        title="Delete Quotation!"
                                                                        description="Are you sure to delete ?"
                                                                        onConfirm={() => confirm(item?._id)}
                                                                    // onCancel=""
                                                                    // okText="Yes"
                                                                    // cancelText="No"
                                                                    >
                                                                        <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                    </Popconfirm>
                                                                </div>
                                                            </td>
                                                            {/* <td style={{ position: 'relative' }} className="d-flex align-item-center" >
                                                                <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                                <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                            </td> */}
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
            )}
        </>
    )
}

export default TravelQuoteListComp