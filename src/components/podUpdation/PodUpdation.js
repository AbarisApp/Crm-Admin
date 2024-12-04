import { useState } from "react";

const PodUpdation = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <h2>POD UPDATION</h2>
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
                  <th scope="col">WAREHOUSE</th>
                  <th scope="col">INV.NO</th>
                  <th scope="col">INV.Date</th>
                  <th scope="col">OUTWARD NO</th>
                  <th scope="col">OUTWAR DATE</th>
                  <th scope="col">PARTY</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">NAME OF TRANSPORTER</th>
                  <th scope="col">MOBILE NO. OF TRANSPORTER</th>
                  <th scope="col">POD STATUS</th>
                  <th scope="col">
                    <i onClick={() => setFilter(prev => !prev)} className="fa-solid fa-filter"></i>
                  </th>
                </tr>
                {/* {filter && (
                  <tr>
                    {Array.from({ length: 11 }, (_, index) => (
                      <td key={index}>
                        <input type="text" className="form-control input-width" />
                      </td>
                    ))}
                  </tr>
                )} */}
              </thead>
              <tbody className="w-100">
                <tr key="1">
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
                  <td><a href="#">No</a></td>
                </tr>
                <tr key="2">
                  <td scope="row">2</td>
                  <td>MP212204R0120</td>
                  <td>06-Apr-2021</td>
                  <td>KGM</td>
                  <td>CHOLWODY MOHECH</td>
                  <td>8976431455</td>
                  <td>PLASTIC STAND REF. (BIG)</td>
                  <td>1.00</td>
                  <td>0.00</td>
                  <td>No GSTIN Detail</td>
                  <td>No GSTIN Detail</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodUpdation;
