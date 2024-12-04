import { Link } from "react-router-dom"


export const Nifty50Card = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card-setitem">
                        <img src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_640.jpg" alt="" />
                        <div className="HourlyContest">
                            <Link to="/hourly-contest">Hourly Contest</Link>
                        </div>
                        <div className="join">

                            <Link to="#"> Join</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-setitem">
                        <img src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_640.jpg" alt="" />
                        <div className="HourlyContest">
                            <Link to="/hourly-contest">Hourly Contest</Link>
                        </div>
                        <div className="join">
                            <Link to="hourly-contest"> Join</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card-setitem">
                        <img src="https://thumbs.dreamstime.com/b/digital-transformation-technology-strategy-ideas-adoption-business-age-enhancing-global-capabilities-215266548.jpg" alt="" />
                        <div className="HourlyContest">
                            <Link to="/hourly-contest">Hourly Contest</Link>
                        </div>
                        <div className="join">
                            <Link to="#"> Join</Link>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="col-lg-4">
                    <div className="card-setitem">
                        <img src="https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_640.jpg" alt="" />
                    </div>
                </div> */}
            </div>
        </>
    )
}
