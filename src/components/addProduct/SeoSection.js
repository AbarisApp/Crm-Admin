import React from 'react'

function SeoSection({ onChangeHandler, item }) {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>SEO Meta Tags</h3>
                            <hr />


                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Title</label>
                                <input
                                    type="text"
                                    value={item?.meta_title}
                                    className="form-control"
                                    name="meta_title"
                                    placeholder="Meta Title"
                                    fdprocessedid="1hz7zu"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Keyword</label>
                                <input
                                    type="text"
                                    value={item?.meta_keywords}
                                    className="form-control"
                                    name="meta_keywords"
                                    placeholder="Meta Key Word"
                                    fdprocessedid="1hz7zu"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>

                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Slug</label>
                                <input
                                    type="text"
                                    value={item?.slug}
                                    className="form-control"
                                    name="slug"
                                    placeholder="Slug"
                                    fdprocessedid="1hz7zu"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>
                            <div className="form-group col-12 mt-2 ps-0">
                                <button className='btn btn-primary' type='button'>Fetch AI Content</button>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Description</label>
                                <textarea
                                    name="meta_description"
                                    value={item?.meta_description}
                                    rows={8}
                                    className="form-control"
                                    onChange={(e) => {
                                        onChangeHandler(e, item?.language_id?._id);
                                    }}
                                />
                            </div>
                            <div className="form-group col-12 mt-2 ps-0">
                                <button className='btn btn-primary' type='button'>Fetch AI Content</button>
                            </div>
                            <div className="form-group col-12 mt-2">
                                <label htmlFor="fromDate">Meta Image</label>
                                <input
                                    type="file"
                                    className="form-control mb-0"
                                    placeholder='Enter Meta Image'
                                    id="fromDate"
                                />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeoSection