import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import ContactWiseFilter from "./contactWiseFilter/ContactWiseFilter";


const ContactWise = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'Contact Wise Report',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ContactWiseFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Contact Wise Report</h4>
                                    </div>
                                    <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        <div className="dt-buttons">
                                            <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                                <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                            </button>
                                        </div>
                                        <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: '50px' }}>S.No</th>
                                                    <th style={{ width: '150px' }}>Lead No.</th>
                                                    <th style={{ width: '150px' }}>Contact Name</th>
                                                    <th style={{ width: '150px' }}>Mobile</th>
                                                    <th style={{ width: '150px' }}>Priority</th>
                                                    <th style={{ width: '100px' }}>Status</th>
                                                    <th style={{ width: '100px' }}>Type</th>
                                                    <th style={{ width: '100px' }}>Enquiry</th>
                                                    <th style={{ width: '100px' }}>Destination </th>
                                                    <th style={{ width: '100px' }}>Date Created</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" >
                                                    <td colSpan="11" className="text-center">No data available in table</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
                                            // onChange={onChangeVal}
                                            // total={totalCount}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactWise