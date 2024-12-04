import React from 'react';
import ExportPdf from '../../../../../common/exportPdf/ExportPdf';
import { Link } from 'react-router-dom';

function StockStatementList() {
    const data = [
        {
            "id": "1001",
            "productGroup": "GROUP - I",
            "subCategoryName1": "",
            "subCategoryName2": "",
            "opQty": 500,
            "opAmount": 1470560.00,
            "purchase": 0,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        },
        {
            "id": "228",
            "productGroup": "GROUP - I",
            "subCategoryName1": "",
            "subCategoryName2": "",
            "opQty": 330,
            "opAmount": 57000.00,
            "purchase": 0,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        },
        {
            "id": "Acid Sulry",
            "productGroup": "GROUP - I",
            "subCategoryName1": "Amino Acid 20%",
            "subCategoryName2": "",
            "opQty": 99532,
            "opAmount": 2795570.00,
            "purchase": 0,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        },
        {
            "id": "AGRI PRODUCT 100 ML",
            "productGroup": "AGRI PRODUCT",
            "subCategoryName1": "Acetamiprid 20% SP",
            "subCategoryName2": "Agro Chemicals",
            "opQty": -1250,
            "opAmount": 0.00,
            "purchase": 20,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        },
        {
            "id": "Coriander Seeds",
            "productGroup": "GROUP - I",
            "subCategoryName1": "",
            "subCategoryName2": "",
            "opQty": 52005,
            "opAmount": 27302625.00,
            "purchase": 0,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        },
        {
            "id": "Total",
            "productGroup": "",
            "subCategoryName1": "",
            "subCategoryName2": "",
            "opQty": 390223.3,
            "opAmount": 37564665.08,
            "purchase": 40,
            "prchAmount": 0,
            "sale": 0,
            "saleAmount": 0,
            "closing": 0,
            "clAmount": 0,
        }
    ];

    return (
        <>
            <section>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <div className="table-responsive active-projects style-1">
                                        <div className="tbl-caption">
                                            <h4 className="heading mb-0"><b>Stock Statement</b></h4>
                                            <div>
                                                <ExportPdf />
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
                                        <table id="empoloyees-tblwrapper" className="table dataTable no-footer exppdf" role="grid">
                                            <thead>
                                                <tr>
                                                    <th><input type="checkbox" /></th>
                                                    <th>Product Name</th>
                                                    <th>Product Group</th>
                                                    <th>SubCategoryName1</th>
                                                    <th>SubCategoryName2</th>
                                                    <th>Op.Qty</th>
                                                    <th>Op. Amount</th>
                                                    <th>Purchase</th>
                                                    <th>Sale</th>
                                                    <th>Sale Amount</th>
                                                    <th>Closing</th>
                                                    <th>Cl Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><input type="checkbox" /></td>
                                                        <td className={item.opQty < 0 ? "text-danger" : ""}>{item.id}</td>
                                                        <td>{item.productGroup}</td>
                                                        <td>{item.subCategoryName1}</td>
                                                        <td>{item.subCategoryName2}</td>
                                                        <td className={item.opQty < 0 ? "text-danger" : ""}>{item.opQty}</td>
                                                        <td className={item.opAmount < 0 ? "text-danger" : ""}>{item.opAmount.toFixed(2)}</td>
                                                        <td>{item.purchase}</td>
                                                        <td>{item.sale}</td>
                                                        <td>{item.saleAmount}</td>
                                                        <td>{item.closing}</td>
                                                        <td>{item.clAmount}</td>
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
    );
}

export default StockStatementList;
