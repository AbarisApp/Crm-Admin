import React from 'react';
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf';
import { Link } from 'react-router-dom';

function ProfitRegisterlist() {
    const tableHeaders = [
        'Product', 'Batch No', 'Opening', 'Purchase Quantity',
        'P.Amount', 'Sale Quantity', 'Sale Amount', 'Stock',
        'Stock Amount', 'Profit', 'Action'
    ];

    const data = [
        { product: '1001', batchNo: 'HO212212CN0042', opening: '500.00', purchaseQuantity: '0.00', pAmount: '0.00', saleQuantity: '0.00', saleAmount: '0.00', stock: '0.00', stockAmount: '20,000.00', profit: '2.00' },
        { product: '228', batchNo: 'HO212212CN0042', opening: '500.00', purchaseQuantity: '0.00', pAmount: '0.00', saleQuantity: '0.00', saleAmount: '0.00', stock: '0.00', stockAmount: '20,000.00', profit: '2.00' },
        { product: 'ABC', batchNo: 'HO212212CN0042', opening: '500.00', purchaseQuantity: '0.00', pAmount: '0.00', saleQuantity: '0.00', saleAmount: '0.00', stock: '0.00', stockAmount: '20,000.00', profit: '2.00' },
        { product: 'ACID SLURY', batchNo: 'HO212212CN0042', opening: '500.00', purchaseQuantity: '0.00', pAmount: '0.00', saleQuantity: '0.00', saleAmount: '0.00', stock: '0.00', stockAmount: '20,000.00', profit: '2.00' },
        { product: 'AGRI PRODUCT 100 ML', batchNo: 'HO212212CN0042', opening: '500.00', purchaseQuantity: '0.00', pAmount: '0.00', saleQuantity: '0.00', saleAmount: '0.00', stock: '0.00', stockAmount: '20,000.00', profit: '2.00' }
    ];
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Profit Register</b></h4>
                                    <div>
                                        <ExportPdf />
                                        <Link className="btn btn-primary btn-sm" to="/ele-purchase-order/create" role="button" aria-controls="offcanvasExample">
                                            + CREATE PURCHASE ORDER
                                        </Link>
                                    </div>
                                </div>
                                <div className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                        </button>
                                    </div>
                                    <table className="table dataTable no-footer exppdf">
                                        <thead>
                                            <tr>
                                                {tableHeaders.map((header, index) => (
                                                    <th key={index}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.product}</td>
                                                    <td>{item.batchNo}</td>
                                                    <td>{item.opening}</td>
                                                    <td>{item.purchaseQuantity}</td>
                                                    <td>{item.pAmount}</td>
                                                    <td>{item.saleQuantity}</td>
                                                    <td>{item.saleAmount}</td>
                                                    <td>{item.stock}</td>
                                                    <td>{item.stockAmount}</td>
                                                    <td>{item.profit}</td>
                                                    <td style={{ position: 'relative' }} className="d-flex align-items-center">
                                                        <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-refresh" />
                                                        </Link>
                                                        <Link to="#" className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfitRegisterlist;
