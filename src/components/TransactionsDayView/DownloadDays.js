import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DownloadDays({ show, setShow, handleClose, handleShow, data }) {
    const [tab, SetTab] = useState(0)
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex gap-3'>
                            <button onClick={() => SetTab(0)} className={`btn m-0 ${tab === 0 ? "btn-primary" : "btn-outline-primary"}`}>Table View</button>
                            <button onClick={() => SetTab(1)} className={`btn m-0 ${tab === 1 ? "btn-primary" : "btn-outline-primary"}`}>Picot View</button>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={tab === 0 ? "d-block" : "d-none"}>
                        <p className='text-info'>Move the card below to change the sequence on the table</p>
                        <div className='d-flex gap-1 overflow-auto'>
                            {data && data?.map((item) => {
                                if (item.isActive) {
                                    return (
                                        <button className='btn m-0 btn-outline-secondary text-nowrap'><i class="fa-solid fa-bars"></i> {item.name}</button>
                                    )
                                }
                            })}
                        </div>
                    </div>

                    <div className={`row ${tab === 1 ? "d-block" : "d-none"}`}>
                        <div className='col-6'>
                            <div className='mt-2'>
                                <label className="form-label">Rows</label>
                                <input className='form-control' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='mt-2'>
                                <label className="form-label">pivot Column</label>
                                <select className='form-select'>
                                    <option>City</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='m-2'>
                                <div className='d-flex align-items-center gap-2'>
                                    <div className='form-check form-switch d-felx align-items-center'>
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Quantity</label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                    <div className='form-check form-switch d-felx align-items-center'>
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Value</label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className='m-2 text-info'>
                                Choose Pivot Table option
                            </p>

                            <div className='d-flex gap-2 align-items-center'>
                                <input className='form-check-input' type='radio' name="option" />
                                <label>Option 1</label>
                            </div>
                            <div className='mt-2 col-10'>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <table id="table-to-xlsx" className="table dataTable no-footer border exppdf" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead >
                                            <tr role="row">
                                                <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Columns
                                                </th>
                                                <th className="sorting text-center" colSpan={2} tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Qty
                                                </th>
                                                <th className="sorting text-center" colSpan={2} tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                    Value  </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row" className="odd" >
                                                <td>
                                                    Brand
                                                </td>
                                                <td>
                                                    City 1
                                                </td>
                                                <td>
                                                    city 2
                                                </td>
                                                <td>
                                                    City 1
                                                </td>
                                                <td>
                                                    City 2
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-outline-primary'><i class="fa-solid fa-file-pdf"></i> Download</Button>
                    <Button className='btn btn-outline-primary'><i class="fa-solid fa-file-excel"></i> Download</Button>
                    <Button className='btn btn-outline-primary'>Report</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DownloadDays;