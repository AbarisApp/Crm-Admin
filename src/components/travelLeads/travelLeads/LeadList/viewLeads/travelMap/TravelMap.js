

const TravelMap = () => {
    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Map </b></h4>
                            </div>
                            <div className="row">
                                <div className='col-lg-12'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4318474006395!2d77.25713517528614!3d28.55679227570627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38abca3560d%3A0xbd54bc439e45d16a!2sAbaris%20Softech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1733400802600!5m2!1sen!2sin" width={1200} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelMap