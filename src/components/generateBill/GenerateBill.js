import { useState } from 'react';

export const GenerateBill = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <h2>Generate E Invoice / eway Bill</h2>
          <div
            id="empoloyees-tblwrapper_wrapper"
            className="dataTables_wrapper no-footer"
          >
            <table
              id="table-to-xls"
              className="table dataTable no-footer table-striped table-hover"
              role="grid"
              aria-describedby="empoloyees-tblwrapper_info"
            >
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Sales Invoice No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Delivery From</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Mobile 1 & 2</th>
                  <th scope="col">Delivery / Hold</th>
                  <th scope="col">Barcode</th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty.</th>
                  <th scope="col">Final Total</th>
                  <th scope="col">Elnv</th>
                  <th scope="col">Fill Transport for eway</th>
                  <th scope="col">EwayBill</th>
                  <th scope="col">
                    <i onClick={() => setFilter(prev => !prev)} className="fa-solid fa-filter"></i>
                  </th>
                </tr>
                {/* {filter && (
                  <tr>
                    {Array.from({ length: 14 }, (_, index) => (
                      <td key={index}>
                        <input type="text" className="form-control input-width" />
                      </td>
                    ))}
                  </tr>
                )} */}
              </thead>
              <tbody className="w-100">
                <tr>
                  <td scope="row">1</td>
                  <td>SG STORE</td>
                  <td>SG212212R0010</td>
                  <td>31-Dec-2024</td>
                  <td>SGSOUT000090</td>
                  <td>31-Dec-2024</td>
                  <td>MOTKORY MODHUKOR</td>
                  <td>PHLIPS HT SPAB140B/94-4567</td>
                  <td>SELF</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><a href="#">No</a></td>
                </tr>
                <tr>
                  <td scope="row">2</td>
                  <td>SG STORE</td>
                  <td>SG212212R0010</td>
                  <td>31-Dec-2024</td>
                  <td>SGSOUT000090</td>
                  <td>31-Dec-2024</td>
                  <td>MOTKORY MODHUKOR</td>
                  <td>PHLIPS HT SPAB140B/94-4567</td>
                  <td>SELF</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><a href="#">No</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='d-flex justify-content-between my-4'>
            <span>1|</span>
            <span>Showing 0-0 of 0 record(s)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
