import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Pagination } from "antd";
import GroupSummaryFilter from "../../../electronicsReports/accountReport/groupSummary/groupSummaryFilter/GroupSummaryFilter";
import BankPaymentForm from "./bankPaymentForm/BankPaymentForm";



const BankPayment = ({ heading }) => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Quick Entry',
        title_3: `${heading}`,
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <BankPaymentForm heading={heading} />

            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    {heading}
                                </h4>
                                {/* <div>
                                    <Link className="btn btn-primary btn-sm" to="/bankpayment/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div> */}
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">

                                            <th style={{ width: '150px' }}>Date</th>
                                            <th style={{ width: '150px' }}>Book Code</th>
                                            <th style={{ width: '150px' }}>Opp. A/C</th>
                                            <th style={{ width: '150px' }}>Voucher No</th>
                                            <th style={{ width: '150px' }}>AccountName</th>
                                            <th style={{ width: '150px' }}>Amount</th>
                                            <th style={{ width: '150px' }}>Narration</th>
                                            <th style={{ width: '150px' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr role="row" className="odd" >
                                            <td >
                                                No Data Found
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total 0 entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        defaultCurrent={1}
                                    // onChange={onChangeVal}
                                    // total={data?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankPayment