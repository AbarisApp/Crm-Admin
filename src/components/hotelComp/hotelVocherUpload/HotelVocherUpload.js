import React from 'react'
import HotelBasicInformation from './hotelBasicInformation/HotelBasicInformation'
import HotelInformation from './hotelInformation/HotelInformation'
import PassengerContactInfo from './passengerContactInfo/PassengerContactInfo'

function HotelVocherUpload() {
    const handleChange = () => {

    }
    return (
        <>
            <div className="card m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <HotelBasicInformation handleChange={handleChange} />
                        <HotelInformation handleChange={handleChange} />
                        <PassengerContactInfo handleChange={handleChange} />
                        <div className='text-end'>
                            <button className=''>Save & Continue</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HotelVocherUpload
