
import { FaGlobe, FaMapMarkerAlt, FaLandmark, FaClock, FaCalendarAlt, FaComment } from 'react-icons/fa';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getByIdRCRM_sight_seeing_master } from '../../../../api/login/Login';
const SightseeingView = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Reports",
        title_2: 'All Sightseeings',
        title_3: 'View Sightseeing',
        path_2: ``
    };
    const param = useParams()
    const [data, setData] = useState(null)
    const ViewData = async () => {
        try {
            const res = await getByIdRCRM_sight_seeing_master(param?.id)
            setData(res?.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        ViewData()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>

                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">View Sightseeing</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-md-3">
                                        <p><FaGlobe color="red" /> <strong>Countries</strong></p>
                                        <p>{data?.country}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaMapMarkerAlt color="red" /> <strong>City</strong></p>
                                        <p>{data?.city}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaLandmark color="red" /> <strong>Place Name</strong></p>
                                        <p>{'--'}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaComment color="red" /> <strong>Description</strong></p>
                                        <p>{data?.description}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Inclusion</strong></p>
                                        <p>{data?.inclusion}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Exclusion</strong></p>
                                        <p>{data?.exclusion}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Duration</strong></p>
                                        <p>{data?.duration}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Time</strong></p>
                                        <p>{data?.createdAt}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Timings (Open - Close)</strong></p>
                                        <p>{data?.timing_open_close}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaComment color="red" /> <strong>Remark</strong></p>
                                        <p>{data?.remark}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Internal Remark 1</strong></p>
                                        <p>{data?.internal_remark1}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Internal Remark 2</strong></p>
                                        <p>{data?.internal_remark2}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <p><FaClock color="red" /> <strong>Start Time</strong></p>
                                        <p>{data?.start_time}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Close Day</strong></p>
                                        <p>{data?.close_day}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><FaCalendarAlt color="red" /> <strong>Transport</strong></p>
                                        <p>{data?.transport}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SightseeingView