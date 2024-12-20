import { Pagination } from 'antd'
import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AllCustomerList from './allCustomerList/AllCustomerList'

function PayableList() {
    const breadCrumbsTitle ={
        id:"734943ykjjfjw8723e4389",
        title_1:"Payable Master",
        title_2:"Payable Master"

    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AllCustomerList />
        </>
    )
}

export default PayableList