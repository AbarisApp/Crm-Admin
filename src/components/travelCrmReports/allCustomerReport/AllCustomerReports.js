import { Pagination } from 'antd'
import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AllCustomerList from './allCustomerList/AllCustomerList'

function AllCustomerReports() {
    const breadCrumbsTitle ={
        id:"734943ykjjfjw8723e4389",
        title_1:"Travel CRM Reports",
        title_2:"All Customer Reports"

    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllCustomerList />
        </>
    )
}

export default AllCustomerReports