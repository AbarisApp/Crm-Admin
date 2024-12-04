import React from 'react'

const DcProduct = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <h2>Close DC Product Manually</h2>
          <p>Showing date of : <span style={{color: "orange"}}> BRANCH HEAD OFFICE</span></p>
          <div
            id="empoloyees-tblwrapper_wrapper"
            className="dataTables_wrapper no-footer"
          >
            <table
              id="table-to-xls"
              className="table dataTable no-footer table  table-striped table-hover"
              role="grid"
              aria-describedby="empoloyees-tblwrapper_info"
            >
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">No.</th>
                  <th scope="col">Date</th>
                  <th scope="col">Party</th>
                  <th scope="col">Remark</th>
                  <th scope="col">Code </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Status</th>
                  <th scope="col">
                    <i class="fa-solid fa-filter"></i>
                  </th>
                </tr>
              </thead>
              <tbody className="w-100">
                <tr>
                  <td scope="row">1</td>
                  <td>Ho212212DC00006</td>
                  <td>22-Dec-2024</td>
                  <td>WHYRLPOO; OF YNDYO LYMYTED TP CODE 91108583</td>
                  <td>0</td>
                  <td>SGSOUT000090</td>
                  <td>WHYRLPOO; OF YNDYO LYMYTED TP CODE 91108583</td>
                  <td>1</td>
                  <td><a href='#'>Click to Complate</a></td>
                  <td>
                  <i class="fa-solid fa-eye"></i>
                  </td>
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
  )
}

export default DcProduct