import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { getNifty, updateNifty } from '../../../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../../../../common/loader/Loader';

function CreateNiftySale() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Niftyfy Sale",
    };

    const [formValues, setFormValues] = useState([]);

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};
        formValues.forEach((item, index) => {
            if (!item.current_price) tempErrors[`current_price_${index}`] = "Current Price is required";
            if (!item.highest_price) tempErrors[`highest_price_${index}`] = "Highest Price is required";
            if (!item.lowest_price) tempErrors[`lowest_price_${index}`] = "Lowest Price is required";
            if (!item.closing_price_edit) tempErrors[`closing_price_edit_${index}`] = "Closing Price is required";
        });
        return tempErrors;
    };

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedValues = [...formValues];
        updatedValues[index] = {
            ...updatedValues[index],
            [name]: value,
        };
        setFormValues(updatedValues);
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);
        try {
            const res = await updateNifty({ list: formValues });
            if (res?.statusCode === "200") {
                toastSuccessMessage("Niftyfy Sale Updated Successfully");
                setTimeout(() => {
                    navigate(`/Nifty-Rate-List`);
                }, 1000);
            }
        } catch (error) {
            console.error("Error:", error);
        }
        setLoader(false);
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await getNifty();
                setFormValues(response?.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCurrency();
    }, []);

    return (
        <>
            <ToastContainer />
            {loader && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Niftyfy Sale
                                </h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                {formValues && formValues.map((item, index) => (
                                    <div className="row" key={index}>
                                        <h3>{item?.name}</h3>
                                        <div className="col-xl-3 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={item.current_price}
                                                hasError={errors[`current_price_${index}`]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                errorMsg={errors[`current_price_${index}`]}
                                                id={`current_price_${index}`}
                                                name="current_price"
                                                placeholder="Current Price"
                                            />
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={item.highest_price}
                                                hasError={errors[`highest_price_${index}`]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                errorMsg={errors[`highest_price_${index}`]}
                                                id={`highest_price_${index}`}
                                                name="highest_price"
                                                placeholder="Highest Price"
                                            />
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={item.lowest_price}
                                                hasError={errors[`lowest_price_${index}`]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                errorMsg={errors[`lowest_price_${index}`]}
                                                id={`lowest_price_${index}`}
                                                name="lowest_price"
                                                placeholder="Lowest Price"
                                            />
                                        </div>
                                        <div className="col-xl-3 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={item.closing_price_edit}
                                                hasError={errors[`closing_price_edit_${index}`]}
                                                onChange={(e) => handleInputChange(index, e)}
                                                errorMsg={errors[`closing_price_edit_${index}`]}
                                                id={`closing_price_edit_${index}`}
                                                name="closing_price_edit"
                                                placeholder="Closing Price"
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className="col-xl-2 mb-3">
                                    <Link to='/Nifty-Rate-List' className="btn btn-danger light ms-1">Cancel</Link>
                                    <button
                                        className="btn btn-primary me-1"
                                        type="submit"
                                    >
                                        {params?.id ? "Update" : "Add"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateNiftySale;
