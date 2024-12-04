import React from 'react'
import ExportPdf from '../../../../../../common/exportPdf/ExportPdf';

function Purchasewisesalepurchaselist() {
    const tableHeaders = [
        'Account Group', 'Party', 'City', 'State',
        'Sales Man', 'Area',
        '(2024-2025)Qty', '(2024-2025)', 'per', 'R(2024-2025)', 'R per',
        '(2023-2024)Qty', '(2023-2024)', 'per', 'R(2023-2024)', 'R per',
        '(2022-2023)Qty', '(2022-2023)', 'per', 'R(2022-2023)', 'R per',
    ];

    const data = [
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 128.00,
                "Per": 46095.00,
                "R": 576.19,
                "RPer": 3000.00
            },
            "2022-2023": {
                "Qty": 37.50,
                "Per": 611.00,
                "R": 112124.00,
                "RPer": 96.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "Abc New",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 120.00,
                "Per": 8507886.30,
                "R": 106348.58,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 10000.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Creditors (A/cs Payable)",
            "Party": "Ambalal And Company",
            "City": "Rajkot",
            "State": "GUJARAT",
            "Salesman": "MAYUR SHILU",
            "Area": "GUJARAT",
            "2024-2025": {
                "Qty": 1.00,
                "Per": 11484.37,
                "R": 143.55,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 0.00,
                "Per": 35.00,
                "R": 13990.00,
                "RPer": 2.49
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": null
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 128.00,
                "Per": 46095.00,
                "R": 576.19,
                "RPer": 3000.00
            },
            "2022-2023": {
                "Qty": 37.50,
                "Per": 611.00,
                "R": 112124.00,
                "RPer": 96.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "Abc New",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 120.00,
                "Per": 8507886.30,
                "R": 106348.58,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 10000.00
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
        },
        {
            "AccountGroup": "Sundry Creditors (A/cs Payable)",
            "Party": "Ambalal And Company",
            "City": "Rajkot",
            "State": "GUJARAT",
            "Salesman": "MAYUR SHILU",
            "Area": "GUJARAT",
            "2024-2025": {
                "Qty": 1.00,
                "Per": 11484.37,
                "R": 143.55,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 0.00,
                "Per": 35.00,
                "R": 13990.00,
                "RPer": 2.49
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": null
            }
        },
        {
            "AccountGroup": "Sundry Debtors (A/cs Receivable)",
            "Party": "A K Agro Center",
            "City": "Ashish",
            "State": null,
            "Salesman": null,
            "Area": null,
            "2024-2025": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            },
            "2023-2024": {
                "Qty": 100.00,
                "Per": 10000.00,
                "R": 125.00,
                "RPer": null
            },
            "2022-2023": {
                "Qty": 0.00,
                "Per": 0.00,
                "R": 0.00,
                "RPer": 0.00
            }
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
                                    <table className="table dataTable no-footer exppdf">
                                        <thead>
                                            <tr>
                                                {tableHeaders.map((header, index) => (
                                                    <th key={index}>{header}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row, index) => (
                                                <tr key={index}>
                                                    <td>{row.AccountGroup}</td>
                                                    <td>{row.Party}</td>
                                                    <td>{row.City}</td>
                                                    <td>{row.State || '-'}</td>
                                                    <td>{row.Salesman || '-'}</td>
                                                    <td>{row.Area || '-'}</td>
                                                    <td>{row['2024-2025'].Qty}</td>
                                                    <td>{row['2024-2025'].Per}</td>
                                                    <td>{row['2024-2025'].R}</td>
                                                    <td>{row['2024-2025'].RPer || '-'}</td>
                                                    <td>{row['2023-2024'].Qty}</td>
                                                    <td>{row['2023-2024'].Per}</td>
                                                    <td>{row['2023-2024'].R}</td>
                                                    <td>{row['2023-2024'].RPer || '-'}</td>
                                                    <td>{row['2022-2023'].Qty}</td>
                                                    <td>{row['2022-2023'].Per}</td>
                                                    <td>{row['2022-2023'].R}</td>
                                                    <td>{row['2022-2023'].RPer || '-'}</td>
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
        </section>)
}

export default Purchasewisesalepurchaselist