import { Popconfirm } from "antd"
import { Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import PurchaseReportable from "./PurchaseReportTable"
import PurchaseReturnTable from "./purchaseReturnTable"

export function SalePurchaseList() {
    const [tab, setTab] = useState(0)

    const handleTab =(num)=>{
        setTab(num)
    }
    return (
        <div className="row my-2">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption p-0">
                                <div className="d-flex">                               
                                <button className={`heading p-2 px-4 mb-0 ${tab === 0 ? "bg-light text-black": ""}`} onClick={()=>handleTab(0)}>Purchase Report</button>
                                <button className={`heading p-2 px-4 mb-0 ${tab === 1 ? "bg-light text-black": ""}`} onClick={()=>handleTab(1)}>Purchase Return Report</button>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div>
                               <div className={tab === 0 ? "d-block" : "d-none"}>
                               <PurchaseReportable />
                                </div>
                                <div className={tab === 1 ? "d-block" : "d-none"}>
                                   <PurchaseReturnTable />
                                </div>
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    {/* Total {totalCount} entries */}
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange=""
                                        total=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}