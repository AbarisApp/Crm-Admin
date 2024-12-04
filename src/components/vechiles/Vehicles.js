import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import VehiclesList from './vechilesList.js/VechilesList'

function Vehicles() {
    const breadCrumbsTitle ={
        title_1:"Vehicle's Management"
    }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
      <VehiclesList/>
    </>
  )
}

export default Vehicles
