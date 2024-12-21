import React from 'react'
import DealerStockForm from './DealerStockForm'
import DealerStockTable from './DealerStockTable'

const DealerStockInside = () => {
  return (
    <div className='card m-1'>
        <DealerStockForm />
        <DealerStockTable />
    </div>
  )
}

export default DealerStockInside