import React from 'react';
import { FaSearch } from 'react-icons/fa';

function BankBookFilter({fromDate, setFromDate, end_date, setend_date, handleSubmit }) {
    return (
        <section>
            <div className="row mx-4">
                <div className="col-xl-12">
                            <div className="active-projects style-1 border px-4">
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="row align-item-center">
                                        <div className="form-group col-xl-3 mt-2">
                                            <label htmlFor="format">Format:</label>
                                            <select className="form-control">
                                                <option>Format</option>
                                                <option>Day Book</option>
                                                <option>Day Book 2</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-3 mt-2">
                                            <label htmlFor="fromDate">From</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="fromDate"
                                                value={fromDate}
                                                onChange={(e) => setFromDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group col-xl-3 mt-2">
                                            <label htmlFor="end_date">To</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="end_date"
                                                value={end_date}
                                                onChange={(e) => setend_date(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-xl-3 mt-5">
                                            <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                <FaSearch /> Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </section>
    );
}

export default BankBookFilter;
