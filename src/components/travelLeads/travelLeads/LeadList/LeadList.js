import { Pagination, Popconfirm } from "antd"
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import { CiSliderVertical } from "react-icons/ci"
import { FaFileInvoice, FaGift } from "react-icons/fa"
import { Link } from "react-router-dom"

export function LeadList({ data, totalCount, onChangeVal, confirm }) {
    const item = true
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                                <h4 className="heading mb-0">Travel Lead Report</h4>
                                <div>
                                    {/* <Link className="btn btn-primary btn-sm" to="/newreport" role="button" aria-controls="offcanvasExample"></Link> */}
                                </div>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Lead No.
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                            Contact Name
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                            Phone
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Email Address: activate to sort column ascending" style={{ width: '141.087px' }}>
                                            Lead Source
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Lead Status
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Current
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Destinaton
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Trip type
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Enquiry
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Tags
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Tour Start
                                        </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Created
                                        </th>
                                        {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                            Status
                                        </th> */}
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                            Note </th>
                                        <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                            Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data?.map((item) => {
                                        return <tr role="row" className="odd" >
                                            <td>
                                                <Link to={`/leads-details/${item?.refer_code}/${item?._id}`}>{item?.refer_code}</Link>
                                            </td>
                                            <td>
                                                {item?.first_name} {item?.last_name}
                                            </td>
                                            <td>
                                                {item?.mobile_number}
                                            </td>
                                            <td>
                                                {item?.lead_source?.name}
                                            </td>
                                            <td>
                                                {item?.lead_status?.name}
                                            </td>
                                            <td>
                                                {item?.assigned_to?.name}
                                            </td>
                                            <td>
                                                {item?.address}
                                            </td>
                                            <td>
                                                {item?.trip_type?.trip_type}
                                            </td>
                                            <td>
                                                {item?.trip_type?.tour_start_date}
                                            </td>
                                            <td>
                                                {item?.tag?.trip_type}
                                            </td>
                                            <td>
                                                {item?.enquiry_type_package[0]?.tour_start_date}
                                            </td>
                                            <td>
                                                {item?.createdAt}
                                            </td>
                                            {/* <td>
                                                <span className="badge badge-success text-light border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : '#bc3922ab'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'ACTIVE' : 'IN ACTIVE'}</span>
                                            </td> */}
                                            <td style={{ width: "200rem" }}>
                                                <span className='text-nowrap' >{item?.notes}</span>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <Link to={``} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <FaGift style={{ marginBottom: '8px' }} />
                                                    </Link>
                                                    <Link to={``} className="btn btn-primary shadow btn-xs sharp me-1">
                                                        <FaFileInvoice style={{ marginBottom: '8px' }} />
                                                    </Link>
                                                    <button type="button" className="btn btn-primary shadow btn-xs sharp me-1" onClick={handleShow}>
                                                        <CiSliderVertical style={{ marginBottom: '8px' }} />
                                                    </button>
                                                    <Link to={`/travel-leads-update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                    <Popconfirm
                                                        title="Delete Leads!"
                                                        description="Are you sure to delete ?"
                                                        onConfirm={() => confirm(item?._id)}
                                                        onCancel=""
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
                                < div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        // showSizeChanger
                                        // onShowSizeChange={''}
                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Note List Lead No: SOF0000565751</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-between">
                        <p>ABDUL QUADIR</p>
                        <p> 15/11/2024 05:58 PM</p>
                    </div>
                    <p>Good to talk to him</p>
                </Modal.Body>

            </Modal>
        </div >
    )
}