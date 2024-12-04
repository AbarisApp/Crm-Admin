import React from 'react'
import BatchwithlocationList from '../batchWithLocation/batchwithLocationList/BatchwithlocationList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

function Batchexpiring() {
  const breadCrumbsTitle = {
    id: "1212",
    title_1: "Stock Sheet",
    title_2: "Batch Expiring Product",
    headingTitle: "Batch Expiring Product"
  }
  return (
    < >
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <BatchwithlocationList titleName={breadCrumbsTitle} />
    </>
  )
}

export default Batchexpiring