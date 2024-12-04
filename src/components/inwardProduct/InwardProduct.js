import React from 'react'

const InwardProduct = () => {
  return (
    <div className="row m-4">
      <div className="col-xl-12">
        <div className="card">
          <h2>Close Inward Product Manually</h2>
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
                  <th scope="col">Transaction Id</th>
                  <th scope="col">Inward No</th>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Product code</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity Out</th>
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
                  <td>KDIN000175</td>
                  <td>22-Dec-2024</td>
                  <td>WHYRLPOO; OF YNDYO LYMYTED TP CODE 91108583</td>
                  <td>SGSOUT000090</td>
                  <td>WHYRLPOO; OF YNDYO LYMYTED TP CODE 91108583</td>
                  <td>1</td>
                  <td><a href='#'>Click to Complate</a></td>
                  <td>
                  <i class="fa-solid fa-eye"></i>
                  </td>
                </tr>
                <tr>
                  <td scope="row">1</td>
                  <td>Ho212212DC00006</td>
                  <td>KDIN000175</td>
                  <td>22-Dec-2024</td>
                  <td>WHYRLPOO; OF YNDYO LYMYTED TP CODE 91108583</td>
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

export default InwardProduct