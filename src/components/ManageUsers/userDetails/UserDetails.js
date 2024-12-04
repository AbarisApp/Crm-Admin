import { Link } from "react-router-dom"
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { Button } from "react-bootstrap";


function UserDetails() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Manage Users",
        title_2: "Active Users",
        title_2: "Users Deatils",
        path_2: ""
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">User Detail - hvsardhara
                                </h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="#" role="button" aria-controls="offcanvasExample">Login as User</Link>
                                </div>
                            </div>
                            <div className="tbl-captionn">
                                <div className="row">
                                    <div class="col-md-3">
                                        <div class="dashboard-card payments">
                                            <h4>Payments</h4>
                                            <p>$0.00 USD</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dashboard-card transactions">
                                            <h4>Transactions</h4>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dashboard-card winning">
                                            <h4>Winning Tickets</h4>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dashboard-card lottery">
                                            <h4>Lottery Buy</h4>
                                            <p>0</p>
                                        </div>
                                    </div>


                                    <div class="col-md-4">
                                        <button class="btn btn-custom logins">Logins</button>
                                    </div>
                                    <div class="col-md-4">
                                        <button class="btn btn-custom notifications">Notifications</button>
                                    </div>
                                    <div class="col-md-4">
                                        <button class="btn btn-custom ban-user">Ban User</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">Information of Prakash Patel
                                </h4>
                            </div>
                            <Formik
                                initialValues={''}
                                validate={''}
                                onSubmit={''}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        handleBlur,
                                        isValid,
                                        dirty,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="First Name"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Last Name"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Email"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Mobile Number"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Address"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter City"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter State"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Zip/Postal"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Country"
                                                    />
                                                </div>
                                                <div className="col-xl-2 mb-3">
                                                    {/* <Link to='/floor-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    <Button className="btn btn-danger light ms-1" >Cancel</Button>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserDetails