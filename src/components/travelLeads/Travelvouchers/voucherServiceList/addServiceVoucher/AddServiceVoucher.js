
import { useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

const AddServiceVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Service Voucher',
        path_2: ``
    };

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false, // All settings to be defined here
        placeholder: 'Start typing...'
    }), []);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Service Voucher</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                                        <p>Mustafa Ashraf</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                        <p>9787898778</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Assigned User</label>
                                        <p>Junaid</p>
                                    </div>
                                    <div className="col-xl-3 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Present User</label>
                                        <p>Suhaib</p>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Traveller Name</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Traveller Name</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Voucher Number</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Voucher Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Adults</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Adults" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child </label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Child " />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Infant</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Infant" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Co Passanger</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Travel Date </label>
                                        <input type="date" className="form-control" name="title" />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">End Date</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Booking Confirmed By</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Booking Confirmed By" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Vehicle Type</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Vehicle Type" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Vehicle Number</label>
                                        <input type="time" className="form-control" name="title" placeholder="Enter Vehicle Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotal Confirmation</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Hotal Confirmation" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Driver Number</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Driver Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Type Of Service</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Type Of Service" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">From City</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter From City" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">To City</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter To City" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Arrival Flight</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Arrival Flight" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Departure Flight</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Departure Flight" />
                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Emergency Contact</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Extra Bed" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Remarks</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Services</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotel</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Itinerary</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Terms And Condition</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Other</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            config={config}
                                            tabIndex={1}
                                            onBlur={newContent => setContent(newContent)}
                                            onChange={newContent => { }}
                                            className="form-control"
                                        />
                                    </div>


                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
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

export default AddServiceVoucher