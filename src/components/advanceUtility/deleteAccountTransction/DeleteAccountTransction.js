import React from 'react'

function DeleteAccount() {
  return (
    <div>
         <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption tbl-caption-2">
                                        <h4 className="heading mb-0">Delete Transactions</h4>
                                    </div>
                                    <form className="tbl-captionn" >
                                        <div className="row align-item-center">
                                            <div className="form-group col-xl-6 mt-2">
                                                <select className="form-select">
                                                    <option>
                                                        Specification Type
                                                    </option>
                                                    <option>
                                                        Brand Merge
                                                    </option>
                                                    <option>
                                                        Category Merge
                                                    </option>
                                                    <option>
                                                        Type Merge
                                                    </option>
                                                </select>
                                            </div>
                                           


                                            <div className="col-xl-12 mt-6">
                                                <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                    Save
                                                </button>
                                                <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                    Save  Close
                                                </button>
                                                <button className="btn bg-primary border-0 me-3 pd-x-20 text-light" type="submit">
                                                    Cancel
                                                </button>

                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </div>
  )
}

export default DeleteAccount