import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import ExportFile from '../../../../../common/exportFile/ExportFile';
import { ToastContainer } from 'react-toastify';
import { Pagination } from 'antd';

function LocationWiseStockList() {
    const sampleData = [
        { id: 1, location: 'LOCATION 1', product: 'CYPERSIS', group: 'GROUP - I', unit: 'NOS', opening: 2.00, closing: 2.00 },
        { id: 2, location: 'LOCATION 1', product: 'Grog', group: 'GROUP - I', unit: 'NOS', opening: 9991.00, closing: 9991.00 },
        { id: 3, location: 'LOCATION 1', product: 'MONOCROTO', group: 'PESTICIDES', unit: 'NOS', opening: -2.00, closing: -2.00 },
        { id: 4, location: 'LOCATION 1', product: 'ZINC SULPHATE', group: '21%', unit: 'KG', opening: -500.00, closing: -500.00 },
    ];

    const [receipts, setReceipts] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        setReceipts(sampleData);
    }, []);

    // Handle individual checkbox change
    const handleCheckboxChange = (id) => {
        setSelectedIds((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id)
                : [...prevSelected, id]
        );
    };

    // Handle "Select All" checkbox change
    const handleSelectAllChange = () => {
        if (selectedIds.length === receipts.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(receipts.map((item) => item.id));
        }
    };

    // Check if an individual checkbox is selected
    const isChecked = (id) => selectedIds.includes(id);

    // Check if all checkboxes are selected
    const isAllChecked = receipts.length > 0 && selectedIds.length === receipts.length;

    return (
        <>
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Location Wise Stock List</h4>
                                    <div className="d-flex" style={{ alignItems: "center" }}>
                                        <span className="btn btn-primary btn-sm">
                                            {/* <IoSearch /> */}
                                            <input
                                                type="search"
                                                className="form-control"
                                                placeholder="Search..."
                                            />
                                        </span>
                                        <span>
                                            <ExportFile />
                                        </span>
                                    </div>
                                </div>
                                <div className="dataTables_wrapper no-footer">
                                    <table className="table dataTable no-footer" role="grid">
                                        <thead>
                                            <tr role="row">
                                                <th>
                                                    <input
                                                        type="checkbox"
                                                        checked={isAllChecked}
                                                        onChange={handleSelectAllChange}
                                                    />
                                                </th>
                                                <th>Location</th>
                                                <th>Product</th>
                                                <th>Group</th>
                                                <th>Unit</th>
                                                <th>Opening</th>
                                                <th>Closing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {receipts.length > 0 ? (
                                                receipts.map((item) => (
                                                    <tr role="row" key={item.id}>
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                checked={isChecked(item.id)}
                                                                onChange={() => handleCheckboxChange(item.id)}
                                                            />
                                                        </td>
                                                        <td>{item.location}</td>
                                                        <td>{item.product}</td>
                                                        <td>{item.group}</td>
                                                        <td>{item.unit}</td>
                                                        <td style={{ color: item.opening < 0 ? 'red' : 'black' }}>
                                                            {item.opening.toFixed(2)}
                                                        </td>
                                                        <td style={{ color: item.closing < 0 ? 'red' : 'black' }}>
                                                            {item.closing.toFixed(2)}
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr role="row">
                                                    <td colSpan={7} className="text-center">
                                                        <p>No data available</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {receipts.length} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination defaultCurrent={1} total={receipts.length} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default LocationWiseStockList;
