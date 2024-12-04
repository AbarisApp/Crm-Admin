import { Pagination } from "antd";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const ProductionIssueDetails = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Productions Planning',
        title_3: 'Production Issue Details',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            {/* <GroupSummaryFilter /> */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">
                                    Production Issue Details
                                </h4>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="detaisIssue">
                                            <h2>Data :</h2>
                                            <h3>19 Oct 2024</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="detaisIssue">
                                            <h2>Voucher No :</h2>
                                            <h3>4</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="detaisIssue">
                                            <h2>Process</h2>
                                            <h3>XYZ</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="detaisIssue">
                                            <h2>Quantity :</h2>
                                            <h3>16</h3>
                                        </div>
                                    </div>


                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">

                                                <th style={{ width: '150px' }}>Type</th>
                                                <th style={{ width: '150px' }}>Stock</th>
                                                <th style={{ width: '150px' }}>Item</th>
                                                <th style={{ width: '150px' }}>Batch No</th>
                                                <th style={{ width: '150px' }}>Location LiveStock	</th>
                                                <th style={{ width: '150px' }}>Quantity2</th>
                                                <th style={{ width: '150px' }}>Quantity</th>
                                                <th style={{ width: '150px' }}>Rate</th>
                                                <th style={{ width: '150px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd" >
                                                <td colSpan={9}>
                                                    No Data Found
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductionIssueDetails