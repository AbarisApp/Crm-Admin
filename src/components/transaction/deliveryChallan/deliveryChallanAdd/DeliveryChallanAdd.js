import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Popconfirm } from "antd";


export const DeliveryChallanAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Add Delivery Challan',
        path_2: ""
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Delivery Challan</h4>
                                </div>
                                <form className="p-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">DC Entry No.</label>
                                            <input type="text" className="form-control" id="projectName" disabled placeholder="Enter DC Entry No." />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">DC Entry Date</label>
                                            <input type="date" className="form-control" id="projectName" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="estimateAmount">Delivery From </label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="estimateAmount">Outward Type</label>
                                            <select className="form-control" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Customer / Vendor Name</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Customer / Vendor Name" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="projectName">Inward Entry No</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Inward Entry No" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Sr. No.</th>
                                                        <th>Product Name </th>
                                                        <th>Product Desc.</th>
                                                        <th>Stock</th>
                                                        <th>Quantity</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>AO SMITH WATERHEATER HSE - SFS 6 LTR</td>
                                                        <td>--</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Blog Category"
                                                                    description="Are you sure to delete?"
                                                                    // onConfirm={() => confirm(item?.blog_id)}
                                                                    // onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="projectName">Product Name</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Product Name" />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="projectName">Product Desc.</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Product Desc." />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="projectName">Stock</label>
                                            <input type="text" className="form-control" id="projectName" disabled placeholder="Enter Stock" />
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <label htmlFor="projectName">Quantity </label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Quantity " />
                                        </div>
                                        <div className="col-md-2 ">
                                            <button type="button" style={{ marginTop: '40px' }} className="btn btn-primary">Add</button>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="projectName">Remark / Narration</label>
                                            <textarea name="" id="" cols={178}></textarea>
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <button type="button" className="btn btn-primary">Save</button>
                                        </div>


                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
