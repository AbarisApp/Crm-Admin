import { useMemo, useRef, useState } from "react";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import JoditEditor from "jodit-react";


const AddHotelVoucher = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel Leads",
        title_2: 'Create Hotel Voucher',
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
                                <h4 className="heading mb-0 p-2">Create Hotel Voucher</h4>
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
                                        <label for="exampleFormControlInput1" class="form-label">Country</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Country</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">State</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Country</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">City</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select City</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotels</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Hotels</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Co Passanger</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Room Type</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Room Type" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Voucher Number</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Voucher Number" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Number Of Room</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Number Of Room" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Adult</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Adult" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Child" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Infact</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Infact" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Checking Date</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Checking Time</label>
                                        <input type="time" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Checkout Date</label>
                                        <input type="date" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Checkout Time</label>
                                        <input type="time" className="form-control" name="title" placeholder="Enter Co Passanger" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Hotal Confirmation</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Hotal Confirmation" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Internal Confirmation</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Internal Confirmation" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child With Bed</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Child With Bed" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Child With Out Bed</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Child With Bed" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Below 5 years Child</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Below 5 years Child" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Extra Bed</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Extra Bed" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Booking Date</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Extra Bed" />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Include</label>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    BreakFast
                                                </label>
                                            </div>
                                            <div className="form-check me-3">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Lunch
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Dinner
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Payment Description</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter Extra Bed" />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Remarks</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Inclusions</label>
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
                                        <label for="exampleFormControlInput1" class="form-label">Exclusions</label>
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

export default AddHotelVoucher