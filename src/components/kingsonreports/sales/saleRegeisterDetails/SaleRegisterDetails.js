import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SaleRegisterDetails() {
    const heading = {
        accountName: "Account Name",
        accountName1: "Account Name 1",
        address: "Address",
        accountName2: "Account Name 2",
    };

    const data = {
        invoices: [
            {
                invNo: "Demo Name",
                supplier: "Demo Name 1",
                productName: "Demo Address",
                barcode: "Demo Name 2",
            },
            {
                invNo: "Demo Name",
                supplier: "Demo Name 1",
                productName: "Demo Address",
                barcode: "Demo Name 2",
            },
        ],
    };

    // State to manage selected rows
    const [selectedRows, setSelectedRows] = useState([]);

    // Function to handle "select all"
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            // Select all rows
            const allRowIds = data.invoices.map((_, index) => index);
            setSelectedRows(allRowIds);
        } else {
            // Deselect all rows
            setSelectedRows([]);
        }
    };

    // Function to handle individual row selection
    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    // Check if all rows are selected
    const isAllSelected = data.invoices.length > 0 && selectedRows.length === data.invoices.length;

    return (
        <>
            <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0">Sale Register (Details)</h4>
                                    </div>
                                    <div
                                        id="empoloyees-tblwrapper_wrapper"
                                        className="dataTables_wrapper no-footer"
                                    >
                                        <table
                                            id="table-to-xls"
                                            className="table dataTable no-footer"
                                            role="grid"
                                            aria-describedby="empoloyees-tblwrapper_info"
                                        >
                                            <thead>
                                                <tr role="row">
                                                    <th style={{ width: "50px" }}>
                                                        <span> <small>Sellect All</small></span>
                                                        &nbsp;
                                                        <input
                                                            type="checkbox"
                                                            checked={isAllSelected}
                                                            onChange={handleSelectAll}
                                                        />
                                                    </th>
                                                    <th style={{ width: "122.312px" }}>
                                                        {heading.accountName}
                                                    </th>
                                                    <th style={{ width: "122.312px" }}>
                                                        {heading.accountName1}
                                                    </th>
                                                    <th style={{ width: "203.45px" }}>
                                                        {heading.address}
                                                    </th>
                                                    <th style={{ width: "156.475px" }}>
                                                        {heading.accountName2}
                                                    </th>
                                                    <th style={{ width: "156.475px" }}>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.invoices.map((invoice, index) => (
                                                    <tr
                                                        role="row"
                                                        key={index}
                                                        className={index % 2 === 0 ? "even" : "odd"}
                                                    >
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedRows.includes(index)}
                                                                onChange={() => handleSelectRow(index)}
                                                            />
                                                        </td>
                                                        <td>{invoice.invNo}</td>
                                                        <td>{invoice.supplier}</td>
                                                        <td>{invoice.productName}</td>
                                                        <td>{invoice.barcode}</td>
                                                        <td className="text-center">
                                                            <Link to="/vehicle-details" className="btn btn-sm btn-light showBtn mx-1" title="View Details">
                                                                <i className="fa-regular fa-eye text-primary"></i>
                                                            </Link>
                                                            <Link to="/kng-update-sale-register-" className="btn btn-sm btn-light showBtn mx-1" title="Edit">
                                                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                                                            </Link>
                                                            <button className="btn btn-sm btn-light showBtn mx-1" title="Delete">
                                                                <i className="fa-solid fa-trash text-danger"></i>
                                                            </button>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div
                                            className="dataTables_info"
                                            id="empoloyees-tblwrapper_info"
                                            role="status"
                                            aria-live="polite"
                                        >
                                            Showing 1 to {data.invoices.length} of {data.invoices.length} entries
                                        </div>
                                        <div
                                            className="dataTables_paginate paging_simple_numbers"
                                            id="empoloyees-tblwrapper_paginate"
                                        >
                                            <a
                                                className="paginate_button previous disabled"
                                                aria-controls="empoloyees-tblwrapper"
                                                data-dt-idx={0}
                                                tabIndex={0}
                                                id="empoloyees-tblwrapper_previous"
                                            >
                                                <i className="fa-solid fa-angle-left" />
                                            </a>
                                            <span>
                                                <a
                                                    className="paginate_button current"
                                                    aria-controls="empoloyees-tblwrapper"
                                                    data-dt-idx={1}
                                                    tabIndex={0}
                                                >
                                                    1
                                                </a>
                                            </span>
                                            <a
                                                className="paginate_button next disabled"
                                                aria-controls="empoloyees-tblwrapper"
                                                data-dt-idx={2}
                                                tabIndex={0}
                                                id="empoloyees-tblwrapper_next"
                                            >
                                                <i className="fa-solid fa-angle-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SaleRegisterDetails;
