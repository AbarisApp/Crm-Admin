import React from 'react'
import CapitalLIst from './capitallist/CapitalLIst'
import CapitalFilter from './capitalFilter/CapitalFilter'

function Capital() {
    return (
        <>
            <CapitalFilter />
            <CapitalLIst />
        </>
    )
}

export default Capital