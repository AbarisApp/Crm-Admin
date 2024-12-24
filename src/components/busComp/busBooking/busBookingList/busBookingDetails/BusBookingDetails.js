import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdBusList } from "../../../../../api/login/Login"


const BusBookingDetails = () => {
    const params = useParams()
    const [data, setData] = useState(null)
    console.log(data);

    const getData = async () => {
        try {
            const res = await getIdBusList(params?.id)
            setData(res?.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        getData()
    }, [params?.id])
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header text-center">
                    <h4 className="mb-0"><b>Bus Booking Details</b></h4>
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-3">
                            <strong>Journey Date</strong>
                            <p>{data?.departure_time}</p>
                        </div>
                        <div className="col-3">
                            <strong>Ticket No.</strong>
                            <p>{data?.ticket_no}</p>
                        </div>
                        <div className="col-3">
                            <strong>Boarding Point</strong>
                            <p>{data?.boarding_point_name}</p>
                        </div>
                        <div className="col-3">
                            <strong>Destination</strong>
                            <p>{data?.dropping_point_name}</p>
                        </div>
                        <div className="col-3">
                            <strong>Departure</strong>
                            <p>{data?.departure_time}</p>
                        </div>
                        <div className="col-3">
                            <strong>Arrival</strong>
                            <p>{data?.arrival_time}</p>
                        </div>
                        <div className="col-12">
                            <strong>Bus Operator</strong>
                            <p>{data?.traveller_name}</p>
                        </div>
                        {data?.passengers.map((passenger, index) => (
                            <div className="col-12" key={passenger._id}>
                                <strong>Passenger {index + 1}</strong>
                                <p>
                                    Name: {passenger.firstname}, Seat No: {passenger.seat_no},
                                    Age: {passenger.age}, Gender: {passenger.gender === "1" ? "Male" : "Female"}
                                </p>
                            </div>
                        ))}
                        <div className="col-3">
                            <strong>Total Amount</strong>
                            <p>{data?.totalAmount}</p>
                        </div>
                        <div className="col-3">
                            <strong>Payment Status</strong>
                            <p>{data?.payment_status}</p>
                        </div>
                        <div className="col-3">
                            <strong>Payment Type</strong>
                            <p>{data?.payment_type}</p>
                        </div>
                        <div className="col-3">
                            <strong>Bus Type</strong>
                            <p>{data?.bus_type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusBookingDetails