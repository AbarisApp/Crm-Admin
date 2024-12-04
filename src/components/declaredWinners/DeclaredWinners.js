import { Pagination } from "antd";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { DeclaredWinnersFilter } from "./DeclaredWinnersFilter";



const breadCrumbsTitle = {
    id: "1",
    title_1: "Declared Winners",
    title_2: "",
    path_2: ""
};

export const DeclaredWinners = () => {

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <DeclaredWinnersFilter />

            {/* {loading && <Loadar />} */}
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Declared Raffles</h4>
                                {/* <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog" role="button" aria-controls="offcanvasExample">+ Blog Master</Link>
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
                                            <th style={{ width: '50px' }}>Winner</th>
                                            <th style={{ width: '150px' }}>Raffle Name</th>
                                            <th style={{ width: '150px' }}>Ticket NO</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr role="row" className="odd" >
                                            <td>Sonya Duffy <br /> <a href="#">@palanol</a></td>
                                            <td>Win Rollex 200</td>
                                            <td>19</td>

                                            {/* <td>{item?.description}</td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.attachment}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <img style={{ width: "100px" }} src={`${baseUrlImage}${item?.meta_image}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-blog/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Blog Category"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?.blog_id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td> */}
                                        </tr>

                                        <tr role="row" className="odd" >
                                            <td>Sonya Duffy <br /> <a href="#">@palanol</a></td>
                                            <td>Win Rollex 200</td>
                                            <td>19</td>


                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td>Sonya Duffy <br /> <a href="#">@palanol</a></td>
                                            <td>Win Rollex 200</td>
                                            <td>19</td>


                                        </tr>
                                        <tr role="row" className="odd" >
                                            <td>Sonya Duffy <br /> <a href="#">@palanol</a></td>
                                            <td>Win Rollex 200</td>
                                            <td>19</td>
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
