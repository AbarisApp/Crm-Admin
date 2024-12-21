import React from 'react'
import TrackingForm from './TrackingForm'
import TrackingTable from './TrackingTable'

const TrackingList = () => {
  return (
    <div>
    <div className="bg-black text-light p-2 m-2">
        <h3 className='fs-4'>Tracking</h3>
    </div>
    <TrackingForm />
    <TrackingTable />
    </div>
  )
}

export default TrackingList