import React from 'react'
import MultiplePrintingSearch from './multiplePrintingsSearch/MultiplePrintingSearch'
import MultiplePrintingsTabs from './multiplePrntingsTabs/MultiplePrintingsTabs'

function MultiplePrintings() {
    return (
        <section className='m-4'>
            <MultiplePrintingSearch />
            <MultiplePrintingsTabs />
        </section>
    )
}

export default MultiplePrintings
