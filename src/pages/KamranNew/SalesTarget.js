import React from 'react'
import { BiSolidFileJson } from 'react-icons/bi'
import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function SalesTarget() {
    return (
        <div className='card'style={{ marginTop: "10px", marginLeft: "4px", marginRight: "4px" }} >
            <div className=''>
                <div className='table-responsive active-projects style-1' >
                    <h3 className='tbl-caption text-light'>
                        Sale (Product) Planning
                        <div>
                            <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import PDF" style={{ marginLeft: '8px' }}>
                                <FaFilePdf /> PDF
                            </Link>
                            <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import JSON" style={{ marginLeft: '8px' }}>
                                <BiSolidFileJson /> JSON
                            </Link>
                            <Link className="btn btn-primary btn-sm" to="" role="button" aria-controls="offcanvasExample" aria-label="Import Excel" style={{ marginLeft: '8px' }}>
                                <FaFileExcel /> Excel
                            </Link>
                        </div>
                    </h3> </div>
            </div>
            <form className='row'>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Sales Type: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Bugdet</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Country: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">India</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">State: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Punjab</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Month/Year: </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1"
                            placeholder="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Employee: </label>
                        <input type="Text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Search Employee Name/ Code" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Product: </label>
                        <input type="Text" class="form-control" id="exampleFormControlInput1"
                            placeholder="Search Product" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">DownLine: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Self</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Category: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Air</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Payroll: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">None</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">From: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Product</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Collection Type: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Monthly</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className='mt-2'>
                        <label for="exampleFormControlInput1" class="form-label">Achivement Form: </label>
                        <select className='form-control'>
                            <option className='' value="--all country--">--All--</option>
                            <option className='' value="India">Account</option>
                        </select>
                    </div>
                </div>
            </form>
            <div className='text-center mt-2'>
<button type="button" class="btn btn-primary btn-lg">Search</button>
      </div>
        </div>
    )
}

export default SalesTarget
