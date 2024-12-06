import React from 'react'
import { Badge } from 'react-bootstrap'

function TaskReminderList({ handleChange, initialValues, searchQuerry }) {

  return (
    <>
      <div className='col-xl-4 h-100'>
        <div className="card overflow-y-scroll" style={{ height: "630px" }}>
          <div className=''>
            <div className='border-bottom'>
              <div className=''>
                <h6 className='bg-dark text-white p-2 rounded'>Reminders</h6>
                <Badge>
                  {initialValues?.totalCount ? `${initialValues?.totalCount} Tasks` : "0 Tasks"}
                </Badge>

              </div>
            </div>

            <div className="my-3">
              <div className='d-flex align-items-center justify-content-between'>
                <div className='border d-flex align-items-center  w-100'>
                  <span>
                    <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                  </span>
                  <div className='w-100'>
                    <input
                      type='search'
                      placeholder='search'
                      className='px-2 py-0 w-100 border-0 w-100'
                      name='name'
                      value={searchQuerry}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    style={{ border: "none", backgroundColor: "inherit", color: "#000", padding: "0 4px" }}
                  >
                    <i class="fa-sharp fa-solid fa-filter"></i>
                  </button>
                </div>
              </div>
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

export default TaskReminderList
