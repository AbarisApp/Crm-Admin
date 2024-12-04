import { useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


function CowSaleAdd() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Cow Sale",
        title_2: 'sale-cow/create',
        path_2: ""
    };
    const [rows, setRows] = useState([
        { id: 1, animalType: '', animalID: '', stallNo: '', sellPrice: '', image: null }
    ]);

    // Function to add a new row
    const addRow = () => {
        setRows([...rows, { id: rows.length + 1, animalType: '', animalID: '', stallNo: '', sellPrice: '', image: null }]);
    };

    // Function to remove a row
    const removeRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    // Handle form input changes
    const handleInputChange = (id, field, value) => {
        setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
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
                                    <h4 className="heading mb-0"> Information :</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject"> Date</label>
                                                <input
                                                    type="date"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Account No"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject"> Customer Name </label>
                                                <input
                                                    type="date"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Customer Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Customer Phone </label>
                                                <input
                                                    type="date"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Customer Phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Customer Email </label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Customer Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Address </label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Note :</label>
                                                <textarea name="" id="" cols={80}></textarea>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"> Cow Selection : </h4>
                                    <button type="button" className="btn btn-sucess" onClick={addRow}>Add New</button>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Animal Type</th>
                                                        <th>Animal ID</th>
                                                        <th>Stall No</th>
                                                        <th>Sell Price</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {rows.map((row) => (
                                                        <tr key={row.id}>
                                                            <td>
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={(e) =>
                                                                        handleInputChange(row.id, 'image', e.target.files[0])
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                <select
                                                                    className="form-control"
                                                                    value={row.animalType}
                                                                    onChange={(e) =>
                                                                        handleInputChange(row.id, 'animalType', e.target.value)
                                                                    }
                                                                >
                                                                    <option value="">-- Select --</option>
                                                                    <option value="cow">Cow</option>
                                                                    <option value="buffalo">Buffalo</option>
                                                                </select>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Animal ID"
                                                                    value={row.animalID}
                                                                    onChange={(e) =>
                                                                        handleInputChange(row.id, 'animalID', e.target.value)
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Stall No"
                                                                    value={row.stallNo}
                                                                    onChange={(e) =>
                                                                        handleInputChange(row.id, 'stallNo', e.target.value)
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    placeholder="Sell Price"
                                                                    value={row.sellPrice}
                                                                    onChange={(e) =>
                                                                        handleInputChange(row.id, 'sellPrice', e.target.value)
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => removeRow(row.id)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Payment Information</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row">

                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Total Price </label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Total Price"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Total Paid </label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Total Price"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group`}>
                                                <label htmlFor="subject">Due Amount </label>
                                                <input
                                                    type="email"
                                                    id="subject"
                                                    name="subject"
                                                    value={''}
                                                    onChange={''}
                                                    className="form-control"
                                                    placeholder="Enter Due Amount"
                                                />
                                            </div>
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
export default CowSaleAdd