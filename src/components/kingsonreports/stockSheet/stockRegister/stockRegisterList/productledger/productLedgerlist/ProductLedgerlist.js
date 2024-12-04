import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductLedgerList() {
  // Sample data array
  const ledgerData = [
    {
      date: '25/04/2024',
      type: 'Production',
      no: '1',
      salesQty: '10.00',
      purchaseQty: '0.00',
      rate: '100.00'
    },
    {
      date: '25/04/2024',
      type: 'Production',
      no: '1',
      salesQty: '10.00',
      purchaseQty: '0.00',
      rate: '100.00'
    },
    {
      date: '25/04/2024',
      type: 'Production',
      no: '1',
      salesQty: '10.00',
      purchaseQty: '0.00',
      rate: '100.00'
    },
    {
      date: '25/04/2024',
      type: 'Production',
      no: '1',
      salesQty: '10.00',
      purchaseQty: '0.00',
      rate: '100.00'
    },
  ];

  // State to manage selected rows
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Handle individual checkbox change
  const handleCheckboxChange = (index) => {
    const updatedSelectedRows = [...selectedRows];
    if (updatedSelectedRows.includes(index)) {
      updatedSelectedRows.splice(updatedSelectedRows.indexOf(index), 1);
    } else {
      updatedSelectedRows.push(index);
    }
    setSelectedRows(updatedSelectedRows);
    setSelectAll(updatedSelectedRows.length === ledgerData.length);
  };

  // Handle "Select All" checkbox change
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(ledgerData.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <section className=''>
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="cards">
              <div className="card-body p-0">
                <div className="row m-4">
                  <div className="col-xl-1">
                    <p><b>Product</b></p>
                    <p>1001</p>
                  </div>
                  <div className="col-xl-1">
                    <p><b>Group</b></p>
                    <p>Group 1</p>
                  </div>
                  <div className="col-xl-1">
                    <p><b>Branch</b></p>
                    <p>1001</p>
                  </div>
                  <div className="col-xl-1">
                    <p><b>Opening</b></p>
                    <p>1001</p>
                  </div>
                  <div className="col-xl-1">
                    <p><b>Closing</b></p>
                    <p>1001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0">Product Ledger</h4>
                    <Link
                      className="btn btn-primary btn-sm"
                      to="/kng-stocksheet"
                      role="button"
                      aria-controls="offcanvasExample"
                    >
                      <i className="fa-solid fa-square-caret-left"></i>
                    </Link>
                  </div>
                  <div
                    id="employees-tblwrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <table
                      id="table-to-xls"
                      className="table dataTable no-footer"
                      role="grid"
                      aria-describedby="employees-tblwrapper_info"
                    >
                      <thead>
                        <tr role="row">
                          <th>
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                            />
                          </th>
                          <th>Date</th>
                          <th>Type</th>
                          <th>No</th>
                          <th>Sales Qty</th>
                          <th>Purchase Qty</th>
                          <th>Rate</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ledgerData.map((item, index) => (
                          <tr key={index} role="row">
                            <td>
                              <input
                                type="checkbox"
                                checked={selectedRows.includes(index)}
                                onChange={() => handleCheckboxChange(index)}
                              />
                            </td>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.no}</td>
                            <td>{item.salesQty}</td>
                            <td>{item.purchaseQty}</td>
                            <td>{item.rate}</td>
                            <td className="text-center">
                              <Link
                                to=""
                                className="btn btn-sm btn-light mx-1"
                                title="View Details"
                              >
                                <i className="fa-regular fa-eye text-primary"></i>
                              </Link>
                              <Link
                                to=""
                                className="btn btn-sm btn-light mx-1"
                                title="Edit"
                              >
                                <i className="fa-solid fa-pen-to-square text-primary"></i>
                              </Link>
                              <button
                                className="btn btn-sm btn-light mx-1"
                                title="Delete"
                              >
                                <i className="fa-solid fa-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div
                      className="dataTables_info"
                      id="employees-tblwrapper_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to {ledgerData.length} of {ledgerData.length} entries
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

export default ProductLedgerList;
