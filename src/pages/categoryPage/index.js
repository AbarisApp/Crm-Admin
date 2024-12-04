import React from 'react'
import AddCategory from '../../components/categoryComp/AddCategory'
import ListCategory from '../../components/categoryComp/ListCategory'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function CategoryPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Category",
        title_2: '',
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddCategory />
            <ListCategory />
        </>
    )
}

export default CategoryPage