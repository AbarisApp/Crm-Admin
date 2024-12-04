import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ListSetProductPointComp from '../../components/listSetProductPointComp/ListSetProductPointComp'

function ListSetProductPointPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Product Point",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListSetProductPointComp />
        </>
    )
}

export default ListSetProductPointPage