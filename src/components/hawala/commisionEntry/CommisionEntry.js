import React from 'react'
import CommisionHeaderFilter from './CommisionHeaderFilter/CommisionHeaderFilter'
import CommissionEntryList from './commisionEntryList/CommisionEntryList'
import CommisionFooterFilter from './CommisionFooterFilter/CommisionFooterFilter'

function CommisionEntry() {
    return (
        <>
            <CommisionHeaderFilter />
            <CommissionEntryList />
            <CommisionFooterFilter />
        </>
    )
}

export default CommisionEntry