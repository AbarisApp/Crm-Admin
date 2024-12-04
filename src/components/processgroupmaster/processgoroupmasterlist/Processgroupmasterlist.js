import React from 'react'
import { Link } from 'react-router-dom';
import ExportPdf from '../../../common/exportPdf/ExportPdf';

function Processgroupmasterlist() {
    const tableHeaders = [
        'Process Group', 'Notes', 'Action',
    ];

    const data = [
        { product: 'New', notes: "" },
        { product: 'New', notes: "" },
        { product: 'Abaris', notes: "" }
    ];
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0"><b>List Of Process Group</b></h4>
                                    <div>
                                        <ExportPdf />
                                        <Link className="btn btn-primary btn-sm" to="/create-process-group-master" role="button" aria-controls="offcanvasExample">
                                            + CREATE PROCESS GROUP
                                        </Link>
                                    </div>
                                </div>
                                <div className="dataTables_wrapper no-footer">

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
                                                    <td>{item.notes}</td>

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

export default Processgroupmasterlist