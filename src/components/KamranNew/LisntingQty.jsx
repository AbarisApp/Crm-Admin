import React from 'react'

function LisntingQty() {
  return (
    <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
  
<div className="mt-3">
 <table className="w-100">
   <tr className="p-1 bg-light">
     <th className="p-1">


     </th>
     <th className="p-1">S.NO</th>
     <th className="p-1">Product Details</th>
     <th className="p-1">Qty</th>
    <th className="p-1">Status</th>

   </tr>
   <tr className="border p-1">

     <td className="p-1">

     </td>
     <td className='p-1'>1</td>
     <td className='p-1'>GJ13441 12-Dec-2024 12:16 AM</td>
     <td className='p-1'></td>
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

export default LisntingQty
