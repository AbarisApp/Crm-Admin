import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { addammedmentTypet, getByammedmentType, updateammedmentType } from "../../../../api/login/Login";


const AmendmentsMasterAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Travel CRM Master",
        title_2: 'Travel Amendments Type Add',
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
        name: '',
        slug: '',
        isActive: true
    })

    const changeHandle = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const disabled = !formData?.name
    const submitData = async () => {
        const clone = { ...formData }
        // console.log(clone);
        if (!params?.id) {
            try {
                // console.log(formData);
                const res = await addammedmentTypet(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/hotel-amendments-type`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateammedmentType(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/hotel-amendments-type`)
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
                const res = await getByammedmentType(params?.id)
                setFormData(res?.data)
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
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Amendments Type Master </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Amendments Name<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData?.name}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Slug<span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="slug"
                                            value={formData?.slug}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Status<span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-control" aria-label="Default select example" value={formData?.isActive} name="isActive" onChange={changeHandle}>
                                            <option selected>Open this select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>InActive</option>
                                        </select>
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

export default AmendmentsMasterAdd