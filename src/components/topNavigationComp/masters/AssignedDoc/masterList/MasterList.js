import { Pagination, Popconfirm, Input, Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Shareable from './Shareable'
import UploadNewVer from './UploadNewVer'
import VersionHistory from './VersionHistory'
import Comments from './Comments'
import AddRemainder from './AddRemainder'
import SendEmail from './SendEmail'
function MasterList({ data, totalCount, page, count, onChangeVal, confirm, cancel, categories }) {
    const [filters, setFilters] = useState({
        name: '',
        metaTag: '',
        category: '',
        storage: ''
    })
    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [modalShow4, setModalShow4] = useState(false);
    const [modalShow5, setModalShow5] = useState(false);

    // Handle filter change
    const handleFilterChange = (field, value) => {
        setFilters({
            ...filters,
            [field]: value
        })
    }

    const handleSearch = () => {
        // Add logic to apply filters
        console.log('Applying filters:', filters)
    }

    return (
        <>
            <div>
                <div className="row m-2">
                    {/* Filter Section */}
                    <div className="col-xl-12 mb-3" style={{ marginTop: "20px" }}>
                        <div className="row">
                            <div className="col-md-3">
                                <Input
                                    placeholder="Search by Name"
                                    value={filters.name}
                                    onChange={(e) => handleFilterChange('name', e.target.value)}
                                />
                            </div>
                            <div className="col-md-3">
                                <Input
                                    placeholder="Search by Meta Tag"
                                    value={filters.metaTag}
                                    onChange={(e) => handleFilterChange('metaTag', e.target.value)}
                                />
                            </div>
                            <div className="col-md-3">
                                <select
                                    className="form-select"
                                    value={filters.category}
                                    onChange={(e) => handleFilterChange('category', e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    {categories?.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select
                                    className="form-select"
                                    value={filters.storage}
                                    onChange={(e) => handleFilterChange('storage', e.target.value)}
                                >
                                    <option value="">Storage</option>
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-12 text-right">
                                <Button type="primary" onClick={handleSearch}>
                                    Apply Filters
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0" style={{ padding: "10px 0" }}>Assigned Documents List</h4>
                                        <div>
                                            <Link className="btn btn-primary btn-sm" to="/add-assigned-doc" role="button" aria-controls="offcanvasExample">+ Add Documents</Link>
                                        </div>
                                    </div>
                                    <table className="table dataTable no-footer" role="grid">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ textAlign: 'center' }}>S.No</th>
                                                <th style={{ textAlign: 'center' }}>Name</th>
                                                <th style={{ textAlign: 'center' }}>Category Name</th>
                                                <th style={{ textAlign: 'center' }}>Storage</th>
                                                <th style={{ textAlign: 'center' }}>Created Date</th>
                                                <th style={{ textAlign: 'center' }}>Expired Date</th>
                                                <th style={{ textAlign: 'center' }}>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[{ name: '' }]?.map((item, i) => (
                                                <tr key={item._id} role="row">
                                                    <td>{(i + 1) + (page * count)}</td>
                                                    <td>{item?.name}</td>
                                                    <td>{item?.categoryName}</td>
                                                    <td>{item?.storage}</td>
                                                    <td>{item?.createdDate}</td>
                                                    <td>{item?.expiredDate}</td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button
                                                                className="btn btn-secondary dropdown-toggle"
                                                                type="button"
                                                                id="dropdownMenuButton1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                Action
                                                            </button>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow(true)}>
                                                                        Shareable Link
                                                                    </a>
                                                                    <Shareable
                                                                        show={modalShow}
                                                                        onHide={() => setModalShow(false)}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow1(true)}>
                                                                        Upload New Version file
                                                                    </a>
                                                                    <UploadNewVer
                                                                        show={modalShow1}
                                                                        onHide={() => setModalShow1(false)}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow2(true)}>
                                                                        Version History
                                                                    </a>
                                                                    <VersionHistory
                                                                        show={modalShow2}
                                                                        onHide={() => setModalShow2(false)}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow3(true)}>
                                                                        Comment
                                                                    </a>
                                                                    <Comments
                                                                        show={modalShow3}
                                                                        onHide={() => setModalShow3(false)}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow4(true)}>
                                                                        Add Reminder
                                                                    </a>
                                                                    <AddRemainder
                                                                        show={modalShow4}
                                                                        onHide={() => setModalShow4(false)}
                                                                    />
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#" onClick={() => setModalShow5(true)}>
                                                                        Send Email
                                                                    </a>
                                                                    <SendEmail
                                                                        show={modalShow5}
                                                                        onHide={() => setModalShow5(false)}
                                                                    />
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        {/* <div className="d-flex">
                                                            <Link to={`/add-assigned-doc/${item._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete !"
                                                                description="Are you sure to delete ?"
                                                                onConfirm={() => confirm(item._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                            </Popconfirm>
                                                        </div> */}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
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
            </div>
            <ToastContainer className="text-center" />
        </>
    )
}

export default MasterList
