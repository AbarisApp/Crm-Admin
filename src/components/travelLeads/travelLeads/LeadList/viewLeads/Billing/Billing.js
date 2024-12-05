import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCancleRefund from "./AddCancle";
import AddCancleRefundBill from "./AddCancleRefundBill";
export default function BillingDetail() {
    const [mainList, setMainList] = useState(true)
    const [addFillDeatilsShow, setAddFillDeatilsShow] = useState(false)
    const [addCancelShow, setaddCancelShow] = useState(false)
    const mainListFun = () => {
        setMainList(true)
        setAddFillDeatilsShow(false)
        setaddCancelShow(false)
    }
    const addFillDeatilsFun = () => {
        setAddFillDeatilsShow(true)
        setMainList(false)
    }
    const addCancelFun = () => {
        setaddCancelShow(true)
        setAddFillDeatilsShow(false)
        setMainList(false)
    }


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



    return (
        <>
            {/* {addFillDeatilsShow && <AddCancleRefundBill mainListFun={mainListFun} />} */}

            {addShow && (
                <AddCancleRefundBill
                    actionType={actionType}
                    editData={editData}
                    cancelForm={cancelForm}
                // getTransitionReport={getTransitionReport}
                />
            )}


            {addCancelShow && <AddCancleRefund mainListFun={mainListFun} />}
            {mainListcom && <div className="m-4">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption">
                        <h4 className="heading mb-0">Biiling</h4>
                        <div>
                            <button className="btn btn-primary btn-sm" onClick={addCancelFun}><i class="fa-solid fa-user-plus"></i> Add Cancel/Refund Details</button>
                            <button className="btn btn-primary btn-sm" onClick={funAddShow}><i class="fa-solid fa-magnifying-glass"></i> Add Bill Details</button>
                        </div>
                    </div>
                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                        <thead>
                            <tr role="row">
                                <th style={{ width: '50px' }}>S.No</th>
                                <th style={{ width: '150px' }}>Supplier</th>
                                <th style={{ width: '150px' }}>Enquiry</th>
                                <th style={{ width: '150px' }}>Cost </th>
                                <th style={{ width: '150px' }}>Service Charge</th>
                                <th style={{ width: '150px' }}>Custome</th>
                                <th style={{ width: '150px' }}>Customer Number </th>
                                <th style={{ width: '150px' }}>Description</th>
                                <th style={{ width: '150px' }}>Remark</th>
                                <th style={{ width: '150px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr role="row" >
                                {/* <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td> */}
                                <td valign="top" className="dataTables_empty" colSpan={10}>No Data Found !</td>
                                <td>
                                    {/* <div className="d-flex">
                                        <Link to={`/travel-other-master-update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                            <i className="fa fa-pencil" />
                                        </Link>
                                        <Popconfirm
                                            title="Delete cow feed!"
                                            description="Are you sure to delete?"
                                            onConfirm={() => confirm(item?._id)}
                                            // onCancel={cancel}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                <i className="fa fa-trash" />
                                            </Link>
                                        </Popconfirm>
                                    </div> */}
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div >}

        </>
    )
}