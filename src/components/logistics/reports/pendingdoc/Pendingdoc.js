import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import Pendingdocfill from './pendingdocfill/Pendingdocfill'
import PendingdocList from './pendingdoclist/PendingdocList'

function Pendingdoc() {
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={""}/>
      <Pendingdocfill/>
      <PendingdocList/>
    </>
  )
}

export default Pendingdoc
