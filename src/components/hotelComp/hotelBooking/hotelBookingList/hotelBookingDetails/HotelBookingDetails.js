import { useParams } from "react-router-dom"
import { getIdHotelList } from "../../../../../api/login/Login"
import { useEffect, useState } from "react"


const HotelBookingDetails = () => {
    const params = useParams()
    const [data, setData] = useState({})
    // console.log(data);

    const getData = async () => {
        try {
            const res = await getIdHotelList(params?.id)
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
                    <h4 className="mb-0"><b>Bus Hotel Details</b></h4>
                </div>
                <div className="card-body">
                    <div className="row">
                        {Object.entries(data).map(([key, value]) => (
                            <div className="col-3 mb-3" key={key}>
                                <strong>{key.replace(/_/g, ' ').toUpperCase()}</strong>
                                <p>
                                    {Array.isArray(value) ? (
                                        value.map((item, index) => (
                                            <></>
                                            // <div key={index}>
                                            //     {Object.entries(item).map(([subKey, subValue]) => (
                                            //         <div key={subKey}>
                                            //             <strong>{subKey.replace(/_/g, ' ').toUpperCase()}:</strong> {subValue?.toString()}
                                            //         </div>
                                            //     ))}
                                            // </div>
                                        ))
                                    ) : (
                                        value?.toString()
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header text-center">
                    <h4 className="mb-0"><b>Passenger Details</b></h4>
                </div>
                <div className="card-body">
                    {data?.passengers?.length > 0 && (
                        <div className="mb-4">
                            <h5><b>Passengers</b></h5>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            {Object.keys(data.passengers[0]).map((key) => (
                                                <th key={key}>{key.replace(/_/g, ' ').toUpperCase()}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.passengers.map((passenger, index) => (
                                            <tr key={index}>
                                                {Object.values(passenger).map((value, idx) => (
                                                    <td key={idx}>{value?.toString()}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-header text-center">
                    <h4 className="mb-0"><b>User Details</b></h4>
                </div>
                <div className="card-body">
                    {data?.user?.length > 0 && (
                        <div>
                            <h5><b>Users</b></h5>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            {Object.keys(data.user[0]).map((key) => (
                                                <th key={key}>{key.replace(/_/g, ' ').toUpperCase()}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.user.map((user, index) => (
                                            <tr key={index}>
                                                {Object.values(user).map((value, idx) => (
                                                    <td key={idx}>{value?.toString()}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HotelBookingDetails