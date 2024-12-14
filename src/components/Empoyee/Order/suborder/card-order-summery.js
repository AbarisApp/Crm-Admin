import React from 'react'

function CardOrder() {
  return (
    <div className='card'style={{marginTop: "10px", marginLeft: "4px", marginRight: "4px"}}>
        <div className='text-center'style={{border:"solid black 1px", margin:"1px"}}>
            <p>Order Summary Report From Date: 12-Dec-2024 To Date: 12-Dec-2024</p>
        </div>
    <div className='table-responsive active-projects style-1' >
   <h3 className='tbl-caption text-light'>
 GROUPING
 </h3> </div>
   <div class="mb-3 col-6">
  <label for="exampleFormControlInput1" class="form-label">Email To  </label>
  <input type="text" class="form-control" id="exampleFormControlInput1"
   placeholder=""/>
</div>
</div>
  )
}

export default CardOrder;