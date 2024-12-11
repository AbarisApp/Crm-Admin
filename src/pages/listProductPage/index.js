import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import ListProductFilter from '../../components/listProductComp/ListProductFilter'
import ListProduct from '../../components/listProductComp/ListProduct'
import { getProductList } from '../../api/login/Login'
import Loadar from '../../common/loader/Loader'

function ListProductPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "All Products",
        title_2: '',
    }
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true)
        try {
            const res = await getProductList()
            setData(res.data)
        } catch (error) {

        }
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {loading && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListProductFilter />
            <ListProduct data={data} />
        </>
    )
}

export default ListProductPage