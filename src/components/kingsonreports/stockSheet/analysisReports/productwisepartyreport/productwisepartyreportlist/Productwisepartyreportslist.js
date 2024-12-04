import React from 'react'
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf';

function Productwisepartyreportslist() {
    const data = [
        {
            Product: "ACID SLURRY",
            SalesQty: 2.00,
            RetQty: 0.00,
            NetQty: 2.00,
            Point: 4,
            Amount: 30000.00,
            Salesman: null,
            Party: "Demo Dmeo ()",
            Packing: null,
        },
    ];
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>Party Wise Sales Analysis
                                    </b></h4>
                                    <div>
                                        <ExportPdf />
                                        {/* <Link className="btn btn-primary btn-sm" to="/ele-purchase-order/create" role="button" aria-controls="offcanvasExample">
                                            + CREATE PURCHASE ORDER
                                        </Link> */}
                                    </div>
                                </div>
                                <div className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Download Distributer</span>
                                        </button>
                                    </div>
                                    <table className="custom-table" border="1" cellPadding="5" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input type="checkbox" />
                                                </th>
                                                <th>Product</th>
                                                <th>Sales Qty</th>
                                                <th>Ret. Qty</th>
                                                <th>Net Qty</th>
                                                <th>Point</th>
                                                <th>Amount</th>
                                                <th>Salesman</th>
                                                <th>Party</th>
                                                <th>Packing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <input type="checkbox" />
                                                    </td>
                                                    <td>{row.Product}</td>
                                                    <td>{row.SalesQty}</td>
                                                    <td>{row.RetQty}</td>
                                                    <td>{row.NetQty}</td>
                                                    <td>{row.Point}</td>
                                                    <td>{row.Amount.toFixed(2)}</td>
                                                    <td>{row.Salesman || '-'}</td>
                                                    <td>{row.Party}</td>
                                                    <td>{row.Packing || '-'}</td>
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

export default Productwisepartyreportslist