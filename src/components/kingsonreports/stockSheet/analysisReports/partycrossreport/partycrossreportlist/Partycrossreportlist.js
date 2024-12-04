import React from 'react'
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf';
import { Link } from 'react-router-dom';

function Partycrossreportlist() {
    const data = [
        {
            Party: "Kishan Agro",
            City: null,
            SalesMan: "Ashish",
            Opening: null,
            BRct: 0.00,
            CRct: 0.00,
            "C/N": 0.00,
            Cpmt: 0.00,
            "J/R": 0.00,
            Purc: 0.00,
            Sret: 0.00,
            TotalCredit: 0.00,
            Sales: 0.00,
            Bpmt: 0.00,
            "D/N": 0.00,
            "D...": 0.00,
            Pret: 0.00,
            TotalDebit: 0.00,
            Total: 0.00,
            Balance: null
        },
        {
            Party: "KRUSHI INDIA CORPORATION",
            City: null,
            SalesMan: null,
            Opening: null,
            BRct: 0.00,
            CRct: 0.00,
            "C/N": 0.00,
            Cpmt: 0.00,
            "J/R": 0.00,
            Purc: 0.00,
            Sret: 0.00,
            TotalCredit: 0.00,
            Sales: 0.00,
            Bpmt: 0.00,
            "D/N": 0.00,
            "D...": 0.00,
            Pret: 0.00,
            TotalDebit: 0.00,
            Total: 1000.00,
            Balance: null
        }
        // More rows can be added
    ];
    return (
        <>
            <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Party Cross Report</b></h4>
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
                                                    <th>Party</th>
                                                    <th>City</th>
                                                    <th>Sales Man</th>
                                                    <th>Opening</th>
                                                    <th>BRct</th>
                                                    <th>CRct</th>
                                                    <th>C/N</th>
                                                    <th>Cpmt</th>
                                                    <th>J/R</th>
                                                    <th>Purc</th>
                                                    <th>Sret</th>
                                                    <th>Total Credit</th>
                                                    <th>Sales</th>
                                                    <th>Bpmt</th>
                                                    <th>D/N</th>
                                                    <th>D...</th>
                                                    <th>Pret</th>
                                                    <th>Total Debit</th>
                                                    <th>Total</th>
                                                    <th>Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <input type="checkbox" />
                                                        </td>
                                                        <td>{row.Party}</td>
                                                        <td>{row.City || '-'}</td>
                                                        <td>{row.SalesMan || '-'}</td>
                                                        <td>{row.Opening || '-'}</td>
                                                        <td>{row.BRct.toFixed(2)}</td>
                                                        <td>{row.CRct.toFixed(2)}</td>
                                                        <td>{row["C/N"].toFixed(2)}</td>
                                                        <td>{row.Cpmt.toFixed(2)}</td>
                                                        <td>{row["J/R"].toFixed(2)}</td>
                                                        <td>{row.Purc.toFixed(2)}</td>
                                                        <td>{row.Sret.toFixed(2)}</td>
                                                        <td>{row.TotalCredit.toFixed(2)}</td>
                                                        <td>{row.Sales.toFixed(2)}</td>
                                                        <td>{row.Bpmt.toFixed(2)}</td>
                                                        <td>{row["D/N"].toFixed(2)}</td>
                                                        <td>{row["D..."].toFixed(2)}</td>
                                                        <td>{row.Pret.toFixed(2)}</td>
                                                        <td>{row.TotalDebit.toFixed(2)}</td>
                                                        <td>{row.Total.toFixed(2)}</td>
                                                        <td>{row.Balance || '-'}</td>
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
        </>
    )
}

export default Partycrossreportlist