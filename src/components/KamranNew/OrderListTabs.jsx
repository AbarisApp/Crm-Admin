import React from 'react'

function OrderListTabs() {
  return (
    <div className=''>


      <div className='table-responsive active-projects style-1' >
        <h3 className='tbl-caption text-light'>
          Sample Order Report
        </h3> </div>
      <div className="mt-3">
        <table className="w-100">
          <tr className="p-1 bg-light">
            <th className="p-1">S.NO</th>
            <th className="p-1">Order.No/ Date </th>
            <th className="p-1">Ref Order No /Remarks</th>
            <th className="p-1">Order by</th>
            <th className="p-1">City</th>
            <th className="p-1">Remarks Approval</th>
            <th className="p-1">Type Crdr</th>
            <th className="p-1">Entry By</th>
            <th className="p-1">Status</th>

          </tr>
          <tr className="border p-1">
            <td className='p-1'>1</td>
            <td className='p-1'>GJ13441
              12-Dec-2024 12:16 AM</td>
            <td className='p-1'>N/A</td>
            <td className='p-1'>Maruti Agro Center - Patdi</td>
            <td className='p-1'>Rjt</td>
            <td className='p-1'>77466734</td>
            <td className='p-1'>General Debit</td>
            <td className='p-1'>User</td>
            <div>
              <a className="btn btn-primary shadow btn-xs sharp me-1">
                <i class="fa fa-pencil"> </i>
              </a>
              <a class="btn btn-danger shadow btn-xs sharp" >
                <i class="fa fa-trash">
                </i>
              </a>
            </div>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default OrderListTabs
