import React from 'react';
import StockStatementList from './stockStatementList/StockStatementList';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

const StockStatement = () => {
    const breadCrumbsTitle = {
        id: "342342",
        title_1: "Stock Sheet",
        title_2: "Stock Statement"

    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <StockStatementList />
        </>
    )

};

export default StockStatement;
