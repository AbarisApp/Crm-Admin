import { useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";


const ProductionPlanningAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transaction",
        title_2: 'Add Production Planning',
        path_2: ``
    };

    const [formData, setFormData] = useState({
        voucher: '',
        date: '',
        voucherAmount: '',
        taxType: ''
    });



    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });


    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Add Production Planning</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="voucher">Date </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="voucher"
                                            value={formData.voucher}
                                            onChange={handleInputChange}
                                            placeholder="Enter Voucher"
                                        />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Type :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Planning No:
                                        </label>
                                        <input type="number" className="form-control" placeholder="Enter Planning No " />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Planning Date:
                                        </label>
                                        <input type="date" className="form-control" placeholder="Enter Planning No " />
                                    </div>

                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Process Group :</label>
                                        <select
                                            className="form-control"
                                            name="taxType"

                                        >
                                            <option value="">Select Tax Type</option>
                                            <option value="GST 5%">GST 5%</option>
                                            <option value="GST 12%">GST 12%</option>
                                            <option value="GST MULTIPLE">GST MULTIPLE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="taxType">Quantity:
                                        </label>
                                        <input type="text" className="form-control" placeholder="Enter Quantity " />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <table border="1" cellPadding="10">
                                            <thead>
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Itme</th>
                                                    <th>Stock</th>
                                                    <th>Quantity</th>
                                                    <th>Stock</th>
                                                    <th>Req Less Stock</th>
                                                    <th>Rate</th>
                                                    <th>Amount</th>
                                                    <th>Provisional Charqe</th>
                                                    <th>Estimate Time</th>
                                                    <th>Process</th>

                                                </tr>
                                            </thead>
                                            <tbody className="text-align-center">
                                                No data Found
                                            </tbody>
                                        </table>
                                        {/* <button type="button" onClick={handleAddRow}>Add Row</button>    */}
                                    </div>
                                </div>


                                {/* Expense and Taxes Table */}

                                {/* Total Amount */}

                                <div className="col-lg-12 text-center">
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductionPlanningAdd