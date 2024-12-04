import React from 'react'
import ProfitRegisterlist from './profitRegisterlist/ProfitRegisterlist'
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs'

function ProfitRegister() {
    const breadCrumbsTitle = {
        id: "1213",
        title_1: "Stock Sheet",
        title_2: "Analysis Reports",
        title_3: "Profit Register",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ProfitRegisterlist />
        </>
    )
}

export default ProfitRegister