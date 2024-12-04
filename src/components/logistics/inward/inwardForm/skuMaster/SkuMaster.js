import React from 'react'
import Modal from 'react-bootstrap/Modal';
import SkuList from './skuList/SkuList';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
function SkuMaster() {
    const breadCrumbsTitle = {
        id:"1",
        title_1:"LOGISTIC",
        title_2:"INWARD",
        title_3:"SKU MASTER"
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
           <SkuList/>
        </>
    )
}

export default SkuMaster
