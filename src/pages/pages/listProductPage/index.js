import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ListProductFilter from '../../components/listProductComp/ListProductFilter'
import ListProduct from '../../components/listProductComp/ListProduct'

function ListProductPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Products",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListProductFilter />
            <ListProduct />
        </>
    )
}

export default ListProductPage