import React from 'react'
import { Badge } from 'react-bootstrap'

function TaskForMeList({ initialValues }) {
    return (
        <>
            <div className='col-xl-4 h-100'>
                <div className="card overflow-y-scroll" style={{ height: "630px" }}>
                    <div className=''>
                        <div className='border-bottom'>
                            <div className=''>
                                <h6 className='bg-dark text-white p-2 rounded'>Task For Me</h6>
                                <Badge>
                                    {initialValues?.totalCount ? `${initialValues?.totalCount} Tasks` : "0 Tasks"}
                                </Badge>

                            </div>
                        </div>

                        <div className="my-3">
                            {initialValues?.data?.length > 0 ? (
                                initialValues?.data?.map((data, i) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            backgroundColor: '#f8f9fc',
                                            padding: '10px 15px',
                                            borderRadius: '8px',
                                            margin: '6px 0',
                                            fontSize: '14px',
                                            color: '#6c757d',
                                        }}
                                        key={i}
                                    >
                                        <div>
                                            <div style={{ fontWeight: '500', color: '#000' }}>
                                                {data?.createdBy?.name
                                                    ? `${data?.createdBy?.name} commented on a task`
                                                    : ''}
                                            </div>

                                            <div style={{ color: '#6c757d', fontSize: '12px' }}>
                                                {data?.task_description}
                                            </div>
                                        </div>

                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '12px', color: '#6c757d' }}>
                                                {data?.createdAt
                                                    ? new Date(data.createdAt).toLocaleString('en-GB', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit',
                                                        hour12: true,
                                                    })
                                                    : ''}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className=''>
                                    <small>
                                        <b>No Task</b>
                                    </small>
                                </div>
                            )}
                        </div>

                        <div className='my-3'>

                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default TaskForMeList