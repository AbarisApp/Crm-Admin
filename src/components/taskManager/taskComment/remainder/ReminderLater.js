import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function ReminderLater(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className='d-flex align-items-center'>
                        <div><i class="fa-sharp fa-solid fa-clock"></i></div>
                        <div>Reminder Later</div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='border d-flex align-items-center  w-100'>
                    <input
                        type='search'
                        placeholder='try 8 am , 3 days, june 7                                                                                                                                       if no reply'
                        className='px-2 py-0 w-100  w-100 border-0'
                        name='name'

                    />
                </div>
                <div className='border-bottom'>
                    <div className='bg-light rounded  p-2 my-2 d-flex  justify-content-between'>
                        <span>Tomorrow</span>
                        <span>Wed, 10:00 AM</span>
                    </div>
                    <div className='bg-light rounded  p-2 my-2 d-flex  justify-content-between'>
                        <span>Next week
                        </span>
                        <span>Mon, 10:00 AM</span>
                    </div>
                    <div className='bg-light rounded  p-2 my-2 d-flex  justify-content-between'>
                        <span>Next weekend
                        </span>
                        <span>Sat, 10:00 AM</span>
                    </div>
                </div>

            </Modal.Body>

        </Modal>
    )
}

export default ReminderLater