import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import MaterialinbutpurchFillter from './materialinbutpurchFillter/MaterialinbutpurchFillter'
import MaterialinbutpurchList from './materialinbutpurchList/MaterialinbutpurchList'

function Materialinbutpurch() {
    const breadCrumbsTitle = {
        id: "34dsadf32324qd34sad",
        title_1: "Material in but purchase not made",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            < MaterialinbutpurchFillter />
            <MaterialinbutpurchList />
        </>
    )
}

export default Materialinbutpurch
