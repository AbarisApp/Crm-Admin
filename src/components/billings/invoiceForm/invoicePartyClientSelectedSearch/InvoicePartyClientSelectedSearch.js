import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaSearch } from 'react-icons/fa';
function InvoicePartyClientSelectedSearch(props) {
    const data = [
        { name: "AKBAR TRAVELS OF INDIA PVT. LTD.", group: "Sundry creditors - Supplier" },
        { name: "BILL OF SUPPLY", group: "Indirect Expenses" },
        { name: "CASH IN HAND A/C", group: "Cash-in-hand" },
        { name: "CGST", group: "Gst" },
        { name: "COMMISSION A/C", group: "Indirect Incomes" },
        { name: "COMMISSION INVOICE", group: "Indirect Incomes" },
        { name: "COMMISSION PAID", group: "Indirect Expenses" },
        { name: "COMMISSION RECEIVABLE", group: "Indirect Expenses" },
        { name: "DISCOUNT A/C", group: "Indirect Expenses" },
        
    ];
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 15;

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

    const totalPages = Math.ceil(filteredData.length / pageSize);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ padding: "8px", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                    </div>

                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "10px" }}>
                        <thead>
                            <tr>
                                <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Select</th>
                                <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Name</th>
                                <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                        <button
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "blue",
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                        >
                                        <FaSearch />
                                        </button>
                                    </td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.name}</td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>{item.group}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </Modal.Body>
                <Modal.Footer>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                style={{
                                    padding: "8px 12px",
                                    marginRight: "5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    cursor: page === 1 ? "not-allowed" : "pointer",
                                }}
                            >
                                «
                            </button>
                            <span style={{ padding: "8px" }}>
                                {page} of {totalPages}
                            </span>
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                                style={{
                                    padding: "8px 12px",
                                    marginLeft: "5px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    cursor: page === totalPages ? "not-allowed" : "pointer",
                                }}
                            >
                                »
                            </button>
                        </div>

                        <div>
                            Size:
                            <select
                                value={pageSize}
                                style={{ marginLeft: "8px", padding: "5px", border: "1px solid #ccc", borderRadius: "4px" }}
                            >
                                <option value="15">15</option>
                                {/* Additional options can be added */}
                            </select>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default InvoicePartyClientSelectedSearch