import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../../../common/breadcrumb/Breadcrumbs"


export const SelectPlayers = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Select Players",
        path_1: "",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 wid-100">
                        <div className="select-palyers">
                            <div className="select-palyers-header">
                                <p>You Can Predict Market Rate Up/Down here</p>
                            </div>
                            <div className="progress-bar" />
                            <div className="prediction-card">
                                <div className="market-info">
                                    <p>Open: <span>16527.9</span> &nbsp; High: <span className="high">16695.5</span> &nbsp; Low: <span className="low">16506.15</span></p>
                                </div>
                                <div className="market-logo">
                                    <img src="https://cdn-icons-png.freepik.com/512/9674/9674083.png" alt="Market Logo" />
                                    <h2>Nifty50</h2>
                                    <p>16675.1</p>
                                    <p className="subtext">current rate</p>
                                </div>
                                <div className="prediction-buttons">
                                    <button className="up">U</button>
                                    <input type="text" placeholder="Prediction Value" />
                                    <button className="down">D</button>
                                </div>
                                <Link to="/select-stock" className="btn btn-primary btn-primary-next mt-3">Next</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wid-100">
                        <div className="select-palyers">
                            <div className="select-palyers-header">
                                <p>You Can Predict Market Rate Up/Down here</p>
                            </div>
                            <div className="progress-bar" />
                            <div className="prediction-card">
                                <div className="market-info">
                                    <p>Open: <span>16527.9</span> &nbsp; High: <span className="high">16695.5</span> &nbsp; Low: <span className="low">16506.15</span></p>
                                </div>
                                <div className="market-logo">
                                    <img src="https://cdn-icons-png.freepik.com/512/9674/9674083.png" alt="Market Logo" />
                                    <h2>Nifty50</h2>
                                    <p>16675.1</p>
                                    <p className="subtext">current rate</p>
                                </div>
                                <div className="prediction-buttons">
                                    <button className="up">U</button>
                                    <input type="text" placeholder="Prediction Value" />
                                    <button className="down">D</button>
                                </div>
                                <Link to="/select-stock" className="btn btn-primary btn-primary-next mt-3">Next</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
