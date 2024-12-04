import React from 'react'
import TdsCalculatorHeaderfilter from './TdsCalculatorHeaderFilter/TdsCalculatorHeaderfilter'
import TdsCalculationList from './tdsCalculationList/TdsCalculationList'
import TdsFooterCalculation from './tdsFooterCalculationFilter/TdsFooterCalculation'

function TdsCalculations() {
    return (
        <>
            <TdsCalculatorHeaderfilter />
            <TdsCalculationList />
            <TdsFooterCalculation />
        </>
    )
}

export default TdsCalculations