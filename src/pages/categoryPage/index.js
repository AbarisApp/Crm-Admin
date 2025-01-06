import React, { useEffect, useState } from 'react'
import AddCategory from '../../components/categoryComp/AddCategory'
import ListCategory from '../../components/categoryComp/ListCategory'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getcategoryAdmin } from '../../api/login/Login'

function CategoryPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Category",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const getCategory = async () => {
        try {
            const res = await getcategoryAdmin()
            setData(res?.data);

        } catch (error) {

        }
    }

    useEffect(() => {
        getCategory()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AddCategory getCategory={getCategory} />
            <ListCategory data={data} />
        </>
    )
}

export default CategoryPage