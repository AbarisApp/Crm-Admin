import React from 'react'
import { FaSearch } from 'react-icons/fa';
import CapitalModal from '../capitalModal/CapitalModal';

function CapitalFilter() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">Capital</h4>
                                </div>
                                <form className="tbl-captionn" >
                                    <div className="row align-item-center">
                                        <div className="form-group col-xl-4 mt-2">
                                            <label htmlFor="fromDate">From</label>
                                            <input

                                                type="date"
                                                className="form-control"
                                                placeholder='From Date'
                                                id="fromDate"
                                            />
                                        </div>
                                        <div className="form-group col-xl-4 mt-2">
                                            <label htmlFor="fromDate">To</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder='To Date'
                                                id="fromDate"
                                            />
                                        </div>

                                        <div className="col-xl-2 mt-5">
                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                <FaSearch /> Search
                                            </button>
                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="button" variant="primary" onClick={() => setModalShow(true)}>
                                                <span><i class="fa-sharp fa-solid fa-plus"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CapitalModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>
    );

}

export default CapitalFilter