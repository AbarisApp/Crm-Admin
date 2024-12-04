import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { useParams } from 'react-router-dom';
import { getFlowCategoryById, postFlowCategory, updateFlowCategory } from '../../../api/login/Login';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';

function Addnewpurchase() {
    const breadCrumbsTitle = {
        title_1: "Add new purchase"
    }
    const [formValues, setFormValues] = useState({
        nameOfCattle: '',  // Flow Name field
        status: '',  // Status field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getFlowCategoryById(id);
            setFormValues(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (params?.id) {
            getDataById(params?.id);
        }
    }, [params?.id]);

    const validate = () => {
        let errors = {};

        if (!formValues.nameOfCattle) {
            errors.nameOfCattle = "Flow Name is required";
        }
        if (!formValues.status) {
            errors.status = "Status is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Flow Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Flow Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoader(true);
        try {
            const res = await postFlowCategory(formValues);
            if (res?.statusCode === 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoader(true);
        try {
            const res = await updateFlowCategory({ data: formValues, id: params?.id });
            if (res?.statusCode === 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className='m-4'>
                <div className="table-responsive active-projects style-1">
                    <div
                        className="tbl-caption d-flex justify-content-between align-items-center"
                        style={{ marginBottom: "10px" }}
                    >
                        <h4 className="heading    mb-0">Add new purchase</h4>
                    </div>
                </div>
            </div>
            <section className='mx-4'>
                <div className='row '>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">
                            <small>
                                Name of cattle: *
                            </small>
                        </labe>
                        <select className="form-select">
                            <option value="10">10 records per page</option>
                            <option value="20">20 records per page</option>
                            <option value="30">30 records per page</option>
                        </select>
                    </div>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">Livestock variant</labe>

                        <select className="form-select">
                            <option value="10">10 records per page</option>
                            <option value="20">20 records per page</option>
                            <option value="30">30 records per page</option>
                        </select>
                    </div>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">Unit price *</labe>

                        <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                            <input
                                id="title"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Unit price"
                            />
                            {errors.title && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                    </div>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">Amount *</labe>

                        <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                            <input
                                id="title"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Amount"
                            />
                            {errors.title && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                    </div>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">Discount</labe>

                        <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                            <input
                                id="title"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Discount"
                            />
                            {errors.title && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                    </div>
                    <div className='col-xl-2 mb-3'>
                        <labe className="">Total</labe>

                        <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                            <input
                                id="title"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Total"
                            />
                            {errors.title && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='row'>
                        <div className='col-xl-9'>

                            <div className='row'>
                                <div className='col-xl-12'>
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">

                                            <table
                                                id="flow-category-tblwrapper"
                                                className="table dataTable no-footer"
                                                role="grid"
                                                aria-describedby="flow-category-tblwrapper_info"
                                            >
                                                <thead>
                                                    <tr role="row">
                                                        <th style={{ width: "50px" }}>SL. No.</th>
                                                        <th style={{ width: "300px" }}> By Invoice</th>
                                                        <th style={{ width: "300px" }}>Buy Date</th>
                                                        <th style={{ width: "300px" }}>Supplier</th>
                                                        <th style={{ width: "300px" }}>Total Purchased (head)</th>
                                                        <th style={{ width: "300px" }}>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                            <div
                                                className="dataTables_info"
                                                id="flow-category-tblwrapper_info"
                                                role="status"
                                                aria-live="polite"
                                            >
                                            </div>
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id="flow-category-tblwrapper_paginate"
                                            >

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3'>
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <select className="form-select">
                                        <option value="10">Supplier</option>
                                        <option value="20">20 records per page</option>
                                        <option value="30">30 records per page</option>
                                    </select>
                                </div>
                                <div className='col-xl-12'>
                                    <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                                        <input
                                            id="title"
                                            type='date'
                                            name="title"
                                            value={formValues.title}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Discount"
                                        />
                                        {errors.title && (
                                            <div className="error">{errors.title}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                                        <input
                                            id="title"
                                            type='text'
                                            name="title"
                                            value={formValues.title}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Subtotal"
                                        />
                                        {errors.title && (
                                            <div className="error">{errors.title}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-6'>
                                    <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                                        <input
                                            id="title"
                                            type='text'
                                            name="title"
                                            value={formValues.title}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="invoice number."
                                        />
                                        {errors.title && (
                                            <div className="error">{errors.title}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-12'>
                                    <div className={`form-group bg-info p-2 rounded ${errors.nameOfCattle ? 'has-error' : ''}`}>
                                        <Form.Check 
                                            type="checkbox"
                                            id={`default-1`}
                                            label={`Click here to pay now.`}
                                        />
                                        {errors.title && (
                                            <div className="error">{errors.title}</div>
                                        )}
                                    </div>
                                </div>
                                <div className='col-xl-12'>
                                    <div className={`form-group ${errors.nameOfCattle ? 'has-error' : ''}`}>
                                        <textarea
                                            id="title"
                                            type='text'
                                            name="title"
                                            value={formValues.title}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="USE"
                                        />
                                        {errors.title && (
                                            <div className="error">{errors.title}</div>
                                        )}
                                    </div>
                                </div>
                                    <div className='col-xl-12 text-end'>
                                        <button className='btn btn-primary'>Submit</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Addnewpurchase
