import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React from 'react'
import Projectdetails from './MasterList/Projectdetails'
function ProjectDetailMasters() {
    const breadCrumbsTitle = {
        // title_1: "master",
        title_2: "Project Detail",
    }
  
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <Projectdetails/>
        </>
    )
}

export default ProjectDetailMasters
