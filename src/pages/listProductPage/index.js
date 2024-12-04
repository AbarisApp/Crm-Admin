import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ListProductFilter from '../../components/listProductComp/ListProductFilter'
import ListProduct from '../../components/listProductComp/ListProduct'
import { getProductList } from '../../api/login/Login'

function ListProductPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Products",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const getData = async () => {
        try {
            const res = await getProductList()
            setData(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListProductFilter />
            <ListProduct data={data}/>
        </>
    )
}

export default ListProductPage