import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExportPdf from '../../../../../common/exportPdf/ExportPdf';

function RecordLevelList() {
    const data = [
        {
            id: 1, product: 'Agri Product 100 ML', brand: 'FERTICHEM CALCIUMNITRATE 25 KG', group: 'AGRI PRODUCT', openingQty: '-1,250.00', close: '-1,250.00'
        },
        {
            id: 2, product: 'Coriander Seeds', brand: 'Sonal', group: '', openingQty: '-12.00', close: '-12.00'
        },
        {
            id: 3, product: 'MONOCROTO', brand: 'BUYER', group: 'PESTICIDES', openingQty: '-2.00', close: '-2.00'
        },
        {
            id: 4, product: 'ZINC SULPHATE', brand: '', group: '21%', openingQty: '-507.50', close: '-507.50'
        }
    ];

    const [selectedItems, setSelectedItems] = useState([]);


    const isAllSelected = data.length > 0 && selectedItems.length === data.length;

    const handleRowSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedItems([]);
        } else {
            setSelectedItems(data.map((item) => item.id));
        }
    };

    return (
        <>
            <section className='m-4'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0"><b>Record Level</b></h4>
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
                                            <tr role="row">
                                                <th>
                                                    <input
                                                        type="checkbox"
                                                        checked={isAllSelected}
                                                        onChange={handleSelectAll}
                                                    />
                                                    <span> Select All</span>
                                                </th>
                                                <th>Product</th>
                                                <th>Brand Name</th>
                                                <th>Group Name</th>
                                                <th>Opening Qty</th>
                                                <th>Close</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr key={item.id} role="row">
                                                    <td>
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedItems.includes(item.id)}
                                                            onChange={() => handleRowSelection(item.id)}
                                                        />
                                                    </td>
                                                    <td>{item.product}</td>
                                                    <td>{item.brand}</td>
                                                    <td>{item.group}</td>
                                                    <td>{item.openingQty}</td>
                                                    <td>{item.close}</td>
                                                    <td className="d-flex align-item-center">
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-refresh" /></Link>
                                                        <Link to={`#`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
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
            </section>
        </>
    );
}

export default RecordLevelList;
