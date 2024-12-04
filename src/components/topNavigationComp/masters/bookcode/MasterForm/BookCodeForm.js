import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import CustomInputField from '../../../../../common/CustomInputField';
import { Button, Select } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast } from 'react-toastify';
import { getAddBookCodeById, getVoucherTypeData, postAddBookCode, updateAddBookCodeById } from '../../../../../api/login/Login';

const { Option } = Select;

function BookCodeForm() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Voucher Code Master",
    };

    const [initialValues, setInitialValues] = useState({
        voucher: "",
        prefix: "",
        starting_no: "",
        suffix: "",
        financial_year: "",
        pattern: "",
        manual: false,
        inactive: false,
    });

    const [voucherOptions, setVoucherOptions] = useState([]);
    const [userOptions, setUserOptions] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.voucher) {
            errors.voucher = "Voucher type is required";
        }
        if (!values.prefix) {
            errors.prefix = "Prefix is required";
        }
        if (!values.starting_no) {
            errors.starting_no = "Starting number is required";
        }
        if (!values.financial_year) {
            errors.financial_year = "Financial year is required";
        }
        return errors;
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await postAddBookCode(values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Added successfully");
                    navigate(`/book-code-list`);
                }
            } else {
                const res = await updateAddBookCodeById(params.id, values);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Updated successfully");
                    navigate(`/book-code-list`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const fetchOptions = async () => {
        try {

            // const voucherData = [
            //     { value: 'V1', label: 'Voucher 1' },
            //     { value: 'V2', label: 'Voucher 2' },
            // ];

            const voucherData = await getVoucherTypeData('', 0, 100, '', '')
            const maped = voucherData.data.voucher.map((item) => {
                return { ...item, value: item?.accLedgerId?.name, label:item?.voucherType?.name }
            })

            setVoucherOptions(maped);
        } catch (error) {
            console.error("Error fetching options:", error);
        }
    };

    useEffect(() => {
        fetchOptions();

        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAddBookCodeById(params.id);
                    setInitialValues({
                        ...response?.data,
                        manual: response?.data?.manual ?? false,
                        inactive: response?.data?.inactive ?? false,
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params?.id]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0" style={{ padding: "10px" }}>
                                    {params?.id ? "UPDATE" : "ADD"} Book Code
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                            >
                                {(formik) => {
                                    const {
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        setFieldValue,
                                        errors,
                                        touched,
                                        handleBlur,
                                    } = formik;
                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-6 mb-3">
                                                    <label>Voucher Type</label>
                                                    <Select
                                                        id="voucher"
                                                        name="voucher"
                                                        value={values.voucher}
                                                        onChange={(value) => setFieldValue('voucher', value)}
                                                        placeholder="Select Voucher Type"
                                                        onBlur={handleBlur}
                                                        style={{ width: '100%' }}
                                                    >
                                                        {voucherOptions.map((option) => (
                                                            <Option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                    {errors.voucher && touched.voucher && (
                                                        <div className="error">{errors.voucher}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>Prefix</label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.prefix}
                                                        hasError={errors.prefix && touched.prefix}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.prefix}
                                                        id="prefix"
                                                        name="prefix"
                                                        placeholder="Prefix"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>Starting Number</label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.starting_no}
                                                        hasError={errors.starting_no && touched.starting_no}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.starting_no}
                                                        id="starting_no"
                                                        name="starting_no"
                                                        placeholder="Starting Number"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>Suffix</label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.suffix}
                                                        onChange={handleChange}
                                                        id="suffix"
                                                        name="suffix"
                                                        placeholder="Suffix (Optional)"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>Financial Year</label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.financial_year}
                                                        hasError={errors.financial_year && touched.financial_year}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.financial_year}
                                                        id="financial_year"
                                                        name="financial_year"
                                                        placeholder="Financial Year"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>Pattern</label>
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.pattern}
                                                        onChange={handleChange}
                                                        id="pattern"
                                                        name="pattern"
                                                        placeholder="Pattern (Optional)"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>
                                                        Manual Entry
                                                    </label>
                                                    <select className="form-select" onChange={handleChange} value={values.manual} name="manual" aria-label="Default select example">
                                                        <option selected="">Select </option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>

                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <label>
                                                        Inactive
                                                    </label>
                                                    <select className="form-select" onChange={handleChange} value={values.inactive} name="inactive" aria-label="Default select example">
                                                        <option selected="">Select </option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>
                                                    </select>
                                                </div>

                                                <div className="col-xl-12">
                                                    <Button type="primary" htmlType="submit">
                                                        {params?.id ? "Update" : "Add"} Book Code
                                                    </Button>
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
    );
}

export default BookCodeForm;
