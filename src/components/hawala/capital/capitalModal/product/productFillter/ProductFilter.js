import React from 'react'

function ProductFilter() {
    return (
        <>
            <section>
                <div className="row">
                    <div className="col-xl-12">

                                <form className="tbl-captionn" >
                                    <div className="row align-item-center">
                                        <div className="form-group col-xl-5 mt-2">
                                            <select className="form-select">
                                                <option>
                                                    Product 1
                                                </option>
                                                <option>
                                                    Product 2
                                                </option>
                                                <option>
                                                    Product 3
                                                </option>
                                                <option>
                                                    Product 4
                                                </option>
                                            </select>
                                        </div>
                                        <div className="form-group col-xl-5 mt-2">
                                            <select className="form-select">
                                                <option>
                                                    Location 1
                                                </option>
                                                <option>
                                                    Location 2
                                                </option>
                                                <option>
                                                    Location 3
                                                </option>
                                                <option>
                                                    Location 4
                                                </option>
                                            </select>
                                        </div>

                                        <div className="col-xl-2 ">
                                            <button className="btn bg-primary border-0 me-4 pd-x-20 text-light" type="submit">
                                                Go
                                            </button>

                                        </div>
                                    </div>
                                </form>

                    </div>
                </div>
            </section>
        </>

    )
}

export default ProductFilter