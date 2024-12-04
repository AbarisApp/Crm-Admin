import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import UpdateExtention from './updateExtention/UpdtateExtention'
// import NeedHelp from './needHelp/NeedHelp'

function PolicyPages() {
    const [showModal, setShowModal] = useState(false)
    const [showLg, setShowLg] = useState(false)
    return (
        <>
            <div className="container my-4">
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Policy Pages
                                        </h4>
                                        <div className=''>
                                            <button className='bg-primary btn btn-sm'>Add New</button>
                                        </div>
                                    </div>
                                    <div className="search-add-new ">
                                        <div className='row align-items-center'>
                                            {/*  <div className='col-xl-6'>
                                                <label for="search2">Search</label>
                                                <input
                                                    type="search"
                                                    className="form-control search-box"
                                                    placeholder="Search..."
                                                    id='search2'
                                                />
                                            </div> */}
                                            <div className='col-xl-6'>
                                                <div>
                                                    {/*  <Button variant="primary" className="ms-2 mt-3">
                                                        <i className="fas fa-search" />
                                                    </Button>
                                                    <Button variant="primary" className="ms-2 mt-3" onClick={() => setShowUpdateMGateway(!showUpdateMGateway)}>+ Add New</Button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Table Section */}
                                    <Table striped bordered hover responsive style={{ width: '100%' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#3F00FF', color: '#fff' }}>
                                                <th style={{ width: '25%', textAlign: 'center' }}>S.No</th>
                                                <th style={{ width: '25%', textAlign: 'center' }}>Title</th>
                                                <th style={{ width: '50%', textAlign: 'center' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* First Row */}
                                            <tr>
                                                <td style={{ textAlign: 'center' }}>
                                                    1
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                  Refund Policy	
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                <Link to="/seoconfigration"  className="btn btn-sm btn-primary me-2" /* onClick={() => setShowModal(!showModal)} */>
                                                    <i class="fa-sharp fa-solid fa-gear"></i>&nbsp;Seo Configure
                                                    </Link>
                                                    <Button variant="outline-warning" className="me-2" onClick={() => setShowLg(!showLg)}>
                                                    <i class="fa-solid fa-pen"></i> Edit
                                                    </Button>
                                                    <Button variant="outline-danger">
                                                    <i class="fa-sharp fa-solid fa-trash"></i> Remove
                                                    </Button>
                                                </td>
                                            </tr>

                                            {/* Second Row */}
                                            <tr>
                                                <td style={{ textAlign: 'center' }}>
                                                    2
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    Terms of Service	
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <Link to=""  className="btn btn-sm btn-primary me-2" /* onClick={() => setShowModal(!showModal)} */>
                                                    <i class="fa-sharp fa-solid fa-gear"></i>&nbsp;Seo Configure
                                                    </Link>
                                                    <Button variant="outline-warning" className="me-2" /* onClick={() => setShowLg(!showLg)} */>
                                                    <i class="fa-solid fa-pen"></i> &nbsp;Edit
                                                    </Button>
                                                    <Button variant="outline-danger">
                                                    <i class="fa-sharp fa-solid fa-trash"></i>&nbsp; Remove
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <UpdateExtention showModal={showModal} setShowModal={setShowModal} />
            <NeedHelp showLg={showLg} setShowLg={setShowLg} /> */}
        </>
    )
}

export default PolicyPages

