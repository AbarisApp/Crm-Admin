import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { baseUrlImage } from "../../../../baseUrl";
import { clodinaryImage, couponAddd, CouponAddd, coupongetById, updateCoupon } from "../../../../api/login/Login";


const CouponAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Coupon',
        path_2: ``
    };

    const params = useParams()
    // console.log(params);

    const navigate = useNavigate()

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [formData, setFormData] = useState({
        type: '',
        code: '',
        description: '',
        icon: '',
        discount: '',
        discount_type: '',
        start_date: '',
        end_date: '',
        name: '',
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [image, setImage] = useState()

    const handleChangeImage = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    }

    const disabled = !formData?.tag_name
    const submitData = async () => {
        const clone = { ...formData, icon: image }
        // console.log(clone);
        if (!params?.id) {
            try {
                // console.log(formData);
                const res = await couponAddd(clone)
                if (res) {
                    toastSuccessMessage('Successfull!')
                    setTimeout(() => {
                        navigate(`/coupan`)
                    }, 2000)
                } else {
                    // alert('Not Add')
                }
            } catch (error) {
                alert(error)
            }
        } else {
            try {
                const res = await updateCoupon(params.id, clone)
                if (res) {
                    toastSuccessMessage('Successfull')
                    setTimeout(() => {
                        navigate(`/coupan`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        }
    }

    useEffect(() => {
        const detbyIdData = async () => {
            try {
                const res = await coupongetById(params?.id)
                setFormData(res?.data)
                setTimeout(() => {
                    setImage(res.data?.icon)
                }, 1000);
            } catch (error) {

            }
        }
        detbyIdData()
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Coupon </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Name <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData?.name}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Coupon Category <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example" name="type"
                                            value={formData?.type}
                                            onChange={changeHandle}>
                                            <option selected>Open this select Coupon Category</option>
                                            <option value="For Products">For Products</option>
                                            <option value="For Orders">For Orders</option>
                                            <option value="For Packages">For Packages</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Code <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Code"
                                            name="code"
                                            value={formData?.code}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Image <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={handleChangeImage}
                                        />
                                        {image && <img src={`${baseUrlImage}${image}`} />}
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Discount <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Discount"
                                            name="discount"
                                            value={formData?.discount}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Discription <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Discription"
                                            name="description"
                                            value={formData?.description}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Discount Type <span style={{ color: 'red' }}>*</span></label>
                                        <select class="form-control" aria-label="Default select example" name="discount_type"
                                            value={formData?.discount_type}
                                            onChange={changeHandle}>
                                            <option selected>Open this select Discount Type</option>
                                            <option value="Percent">Percent</option>
                                            <option value="Amount">Amount</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Start Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Price"
                                            name="start_date"
                                            value={formData?.start_date}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">End Date <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Price"
                                            name="end_date"
                                            value={formData?.end_date}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitData}>
                                            {params?.id ? 'Update' : 'Add'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default CouponAdd