import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs"




export const Nifty50HourlyContest = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Hourly Contest",
        path_1: "",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 wid-100">
                        <div class="contest-card">
                            <div class="contest-card-header">
                                <div class="time-box">
                                    <p>10:30 AM</p>
                                </div>
                                <Link to="/select-palyers" class="join-button">JOIN</Link>
                            </div>
                            <div class="contest-card-body">
                                <div class="prize">
                                    <p class="currency">Price Money &#8377; 25000</p>
                                    <p class="subtext">Hourly contest</p>
                                </div>
                                <div class="entry-fee">
                                    <p>EntryFee : <strong>49</strong></p>
                                    <p>Winners <span class="winners-dropdown">5 &#9660;</span></p>
                                </div>
                            </div>
                            <div class="contest-card-footer">
                                <p>Teams Left 500</p>
                                <p>500 Teams</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-6 wid-100">
                        <div class="contest-card">
                            <div class="contest-card-header">
                                <div class="time-box">
                                    <p>11:30 AM</p>
                                </div>
                                <Link to="/select-palyers" class="join-button">JOIN</Link>
                            </div>
                            <div class="contest-card-body">
                                <div class="prize">
                                    <p class="currency">Price Money &#8377; 22000</p>
                                    <p class="subtext">Hourly contest</p>
                                </div>
                                <div class="entry-fee">
                                    <p>EntryFee : <strong>48</strong></p>
                                    <p>Winners <span class="winners-dropdown">5 &#9660;</span></p>
                                </div>
                            </div>
                            <div class="contest-card-footer">
                                <p>Teams Left 501</p>
                                <p>501 Teams</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-6 wid-100">
                        <div class="contest-card">
                            <div class="contest-card-header">
                                <div class="time-box">
                                    <p>12:30 AM</p>
                                </div>
                                <Link to="/select-palyers" class="join-button">JOIN</Link>
                            </div>
                            <div class="contest-card-body">
                                <div class="prize">
                                    <p class="currency"> Price Money &#8377; 25001</p>
                                    <p class="subtext">Hourly contest</p>
                                </div>
                                <div class="entry-fee">
                                    <p>EntryFee : <strong>43</strong></p>
                                    <p>Winners <span class="winners-dropdown">5 &#9660;</span></p>
                                </div>
                            </div>
                            <div class="contest-card-footer">
                                <p>Teams Left 503</p>
                                <p>503 Teams</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-6 wid-100">
                        <div class="contest-card">
                            <div class="contest-card-header">
                                <div class="time-box">
                                    <p>01:30 AM</p>
                                </div>
                                <Link to="/select-palyers" class="join-button">JOIN</Link>
                            </div>
                            <div class="contest-card-body">
                                <div class="prize">
                                    <p class="currency">Price Money &#8377; 250034</p>
                                    <p class="subtext">Hourly contest</p>
                                </div>
                                <div class="entry-fee">
                                    <p>EntryFee : <strong>29</strong></p>
                                    <p>Winners <span class="winners-dropdown">5 &#9660;</span></p>
                                </div>
                            </div>
                            <div class="contest-card-footer">
                                <p>Teams Left 520</p>
                                <p>503 Teams</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
