import React from 'react'
import AddProduct from '../../components/addProduct/AddProduct'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function AddProductPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Add Product",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddProduct />
        </>
    )
}

export default AddProductPage