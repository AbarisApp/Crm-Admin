import React from 'react'
import TrendHeader from './trendHeader/TrendHeader'
import TrendViewDesktop from './trendViewDesktop/TrendViewDesktop'
import TrendViewSidebar from './trendViewSidebar/TrendViewSidebar'

const TrendView = () => {
  return (
    <div>
        <TrendHeader />
        <div className='row mt-3'>
            <div className='col-9'>
                <TrendViewDesktop />
            </div>
            <div className='col-3'>
                <TrendViewSidebar />
            </div>
        </div>
    </div>
  )
}

export default TrendView