import { Button } from "react-bootstrap";
import CustomInputField from "../../../common/CustomInputField";
import { Formik } from "formik";




export const LoginHistoryFilter = () => {
    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">filter
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
                                                        type="date"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter from Date"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="date"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        // onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter To Date"
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
                                                        placeholder="Enter UserName"
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
