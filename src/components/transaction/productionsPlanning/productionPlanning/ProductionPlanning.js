import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const ProductionPlanning = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Productions Planning',
        title_3: 'Production Planning',
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
                                    Production Planning List
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="/productionplanning/add" role="button" aria-controls="offcanvasExample">+ Add New</Link>
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <div className="dt-buttons">
                                    <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                        <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                    </button>
                                </div>
                                <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr>
                                            <th className="bg-light-pink">Required To Start</th>
                                            <th className="bg-light-yellow">In Process</th>
                                            <th className="bg-light-green">QC Required</th>
                                            <th className="bg-light-green">On Hold</th>
                                            <th className="bg-light-green">Done</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="bg-light-pink"><h3>0</h3></td>
                                            <td className="bg-light-yellow"><h3>0</h3></td>
                                            <td className="bg-light-green"><h3>0</h3></td>
                                            <td className="bg-light-green"><h3>0</h3></td>
                                            <td className="bg-light-green"><h3>0</h3></td>
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

export default ProductionPlanning