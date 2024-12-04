import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AssignToShedLeft from './assignToShedLeft/AssignToShedLeft'
import AssignToShedRight from './assignToShedRight/AssignToShedRight'

function AssignToShed() {
    const breadCrumbsTitle = {
        title_1: "Assign",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <section className='m-4'>
                <div className='row'>
                    <AssignToShedLeft />
                    <AssignToShedRight />
                </div>
            </section>
        </>
    )
}

export default AssignToShed
