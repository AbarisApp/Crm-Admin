import React from 'react'
import ModulesSettingAside from './modulesSettingsAside/ModulesSettingAside'
import { Outlet } from 'react-router-dom'

function ModuleSettings() {
    return (
        <>
            <section className='m-4 h-72vh'>
                <div className='card'>
                    <div className='row '>
                        <div className='col-xl-3'>
                            <div className='card'>
                                <ModulesSettingAside />
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ModuleSettings