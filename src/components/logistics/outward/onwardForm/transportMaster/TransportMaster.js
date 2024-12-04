import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import Transportlist from './transportList/Transportlist';
function TransportMaster() {
    const breadCrumbsTitle = {
        id:"1",
        title_1:"LOGISTIC",
        title_2:"OUTWARD",
        title_3:"TRANSPORT MASTER"
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
           <Transportlist/>
        </>
    )
}

export default TransportMaster
