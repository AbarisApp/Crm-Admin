import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BatchStockList() {
    const data = [
        {
            batchNo: 1,
            products: [
                { product: 'Batch', batchNo: 1, openingQty: 1, closingQty: 1 }
            ]
        },
        {
            batchNo: 100,
            products: [
                { product: 'TAKAT PRO PLUS 250 ML', batchNo: 100, openingQty: 510, closingQty: 510 }
            ]
        },
        {
            batchNo: 100200,
            products: [
                { product: 'AGRI PRODUCT 100 ML', batchNo: 100200, openingQty: 10, closingQty: 10 }
            ]
        },
        {
            batchNo: 12,
            products: [
                { product: 'ACID SLURY', batchNo: 12, openingQty: 5, closingQty: 5 },
                { product: 'MONOCROTO', batchNo: 12, warrantyDate: '01/01/2021', guaranteeDate: '31/03/2022', openingQty: 10, closingQty: 10 }
            ]
        },
        {
            batchNo: 123,
            products: [
                { product: 'Abc', batchNo: 123, warrantyDate: '22/03/2024', guaranteeDate: '26/07/2025', openingQty: 100, closingQty: 100 }
            ]
        },
        {
            batchNo: 1234,
            products: [
                { product: '228', batchNo: 1234, openingQty: 250, closingQty: 250 }
            ]
        }
    ];

    const [expanded, setExpanded] = useState([0]); 

    const toggleAccordion = (index) => {
        if (expanded.includes(index)) {
            return;
        } else {
            setExpanded([...expanded, index]);
        }
    };

    return (
        <section>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Batch Stock</b></h4>
                                        <div>
                                            <Link
                                                className="btn btn-primary btn-sm"
                                                to="/kng-stocksheet/ledgerview"
                                                role="button"
                                                aria-controls="offcanvasExample"
                                            >
                                                <span><i className="fa-solid fa-square-caret-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                    {data.map((batch, index) => (
                                        <div key={index} className="accordion-item">
                                            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                                <span>{expanded.includes(index) ? '-' : '+'}</span>
                                                <span>Batch No: {batch.batchNo}</span>
                                            </div>
                                            {expanded.includes(index) && (
                                                <div className="accordion-body">
                                                    <table className="accordion-table">
                                                        <thead>
                                                            <tr>
                                                                <th></th>
                                                                <th>Product</th>
                                                                <th>Batch No</th>
                                                                <th>Warranty Date</th>
                                                                <th>Guarantee Date</th>
                                                                <th>Opening Qty</th>
                                                                <th>Closing Qty</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {batch.products.map((product, idx) => (
                                                                <tr key={idx}>
                                                                    <td><input type="checkbox" /></td>
                                                                    <td>{product.product}</td>
                                                                    <td>{product.batchNo}</td>
                                                                    <td>{product.warrantyDate || ''}</td>
                                                                    <td>{product.guaranteeDate || ''}</td>
                                                                    <td>{product.openingQty}</td>
                                                                    <td>{product.closingQty}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BatchStockList;
