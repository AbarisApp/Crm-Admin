import React from 'react'
import InvoiceSearchFilter from './invoiceSearchFilter/InvoiceSearchFilter'
import InvoiceSearchList from './invoceSearchList/InvoiceSearchList'

function InvoiceSearch({ params, filterInitial, handleChange, getTransitionReport }) {
    return (
        <>
            <InvoiceSearchFilter params={params} filterInitial={filterInitial} handleChange={handleChange} getTransitionReport={getTransitionReport} />
        </>
    )
}

export default InvoiceSearch