import { message, Pagination, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import Loadar from "../../../../common/loader/Loader";
import { listRoleDelete } from "../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

function ListRole({ onChangeVal, dmtTtxn, loading, dmtExcelTtxn, getDmtTxnData, total, page }) {
    const curdmtTtxn = dmtTtxn
    const curdmtexcelTtxn = dmtExcelTtxn?.dmtTransaction

    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };
    const deleteMainModule = async (id) => {
        try {
            const res = await listRoleDelete(id)
            if (res?.statusCode == "200") {
                message.success('Delete Successfull!');

            } else {
                toastErrorMessage(res?.message)
            }
            getDmtTxnData(page)
        } catch (error) {

        }
    }


    const confirm = (id) => {
        deleteMainModule(id)
        // message.success('Delete Successfull!');
    };
    const cancel = (e) => {
        message.error('Cancle Successfull!');
    };
    const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]); 
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        console.log("Selected Option:", e.target.value);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log("Input Value:", e.target.value);
    };
    return (
        <>
            <section className="ListDistributer exppdf">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>  Role Filter </b></h4>
                                        <form className="row">
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label htmlFor="dynamicSelector" className="form-label">
                                                        Select an Option
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        id="dynamicSelector"
                                                        name="dynamicSelector"
                                                        onChange={handleSelectChange}
                                                        value={selectedOption}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {options.map((option, index) => (
                                                            <option key={index} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label htmlFor="inputField" className="form-label">
                                                        Enter Value
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputField"
                                                        name="inputField"
                                                        placeholder="Enter text"
                                                        onChange={handleInputChange}
                                                        value={inputValue}
                                                    />
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b> List Role  Main Module  Company Name </b></h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-role" role="button" aria-controls="offcanvasExample">+ ADD ROLE</Link>
                                            {/* <button type="button" className="btn btn-secondary btn-sm" >
                    + Invite Employee
                </button> */}
                                            {/* <ExportPdf />
                                            {curdmtexcelTtxn ? (<CSVLink className="btn btn-warning" data={curdmtexcelTtxn} >Export Excel <CiSaveDown1 className='fs-4 fw-bold text-white' />
                                            </CSVLink>) : ""} */}

                                        </div>
                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                        {/* <div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Download Retailer</span></button> </div> */}
                                        <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                            <thead>

                                                <tr role="row">
                                                    {/* <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                    S.NO
                                                </th> */}
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Date & Time
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                        Company Name
                                                    </th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Slug	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Main Module	</th>
                                                    <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                        Action	</th>
                                                </tr>
                                            </thead>
                                            {loading && <Loadar />}
                                            <tbody>
                                                {curdmtTtxn?.map((item, i) => {
                                                    return <tr role="row" className="odd" key={i}>
                                                        <td> {item?.createdAt}</td>
                                                        {/*  <td>
                                                            {(() => {
                                                                if (!item?.createdAt) return "";

                                                                const dateTimeParts = item.createdAt.split(' ');
                                                                const dateParts = dateTimeParts[0].split('-');
                                                                const timeParts = dateTimeParts[1].split(':');

                                                                const day = parseInt(dateParts[0], 10);
                                                                const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based in JavaScript
                                                                const year = parseInt(dateParts[2], 10);
                                                                const hours = parseInt(timeParts[0], 10);
                                                                const minutes = parseInt(timeParts[1], 10);
                                                                const seconds = parseInt(timeParts[2], 10);

                                                                const date = new Date(year, month, day, hours, minutes, seconds);

                                                                return `${hours}:${minutes}:${seconds}`;
                                                            })()}
                                                        </td> */}
                                                        <td> {item?.name}</td>
                                                        <td> {item?.company_name}</td>
                                                        <td> {item?.slug}</td>
                                                        <td>
                                                            {item?.mainModules?.map((module, index) => (
                                                                <span key={index} className="me-2">
                                                                    {module?.name}
                                                                    <br />
                                                                </span>
                                                            ))}
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">

                                                                <Link to={`/update-role/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                                <Popconfirm
                                                                    title="Delete  List Role  Main Module  Company Name !"
                                                                    description="Are you sure to delete ?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })}

                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                            Total {total} entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                            <Pagination
                                                // showSizeChanger
                                                // onShowSizeChange={''}

                                                defaultCurrent={1}
                                                onChange={onChangeVal}
                                                total={total}

                                            />

                                        </div>
                                    </div>
                                    {/* <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        <h4> Total Amount : {dmtTtxn?.totalAmount} </h4>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <ToastContainer className={"text-center"} />
            </section>
        </>
    )
}
export default ListRole