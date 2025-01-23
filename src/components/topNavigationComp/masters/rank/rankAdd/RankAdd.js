import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { addCollegeRanking, getBycollege, getByIdranking, updateranking } from "../../../../../api/login/Login";


const RankAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "College Master",
        title_2: 'Add Campus ',
        path_2: ``
    };

    const params = useParams()
    // console.log(params);

    const navigate = useNavigate()

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().substr(0, 10);
    };

    const [data, setData] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        ranking: [
            {
                rank: '',
                college: ''
            }
        ],
    })
    const changeHandleN = (e) => {
        const clone = { ...formData }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setFormData(clone)
    }
    const changeHandle = (e, index, field) => {
        const value = e.target.value;
        const updatedRanking = [...formData.ranking];
        updatedRanking[index][field] = value;
        setFormData({ ...formData, ranking: updatedRanking });
    };

    const addRanking = () => {
        setFormData({
            ...formData,
            ranking: [...formData.ranking, { rank: '', college: '' }],
        });
    };

    const removeRanking = (index) => {
        if (index === 0) return;
        const updatedRanking = formData.ranking.filter((_, i) => i !== index);
        setFormData({ ...formData, ranking: updatedRanking });
    };

    const getMaster = async () => {
        try {
            const res = await getBycollege()
            setData(res?.data)
        } catch (error) {

        }
    }



    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${'Success'}`, {
            position: "top-right",
        });
    };

    const disabled = !formData?.tag_name
    const submitData = async () => {
        const clone = { ...formData }
        // console.log(clone);
        if (!params?.id) {
            try {
                console.log(formData);
                const res = await addCollegeRanking(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/rank`)
                    }, 2000)
                } else {
                    alert(res?.message)
                }
            } catch (error) {

            }
        } else {
            try {
                const res = await updateranking(params.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate(`/rank`)
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
                const res = await getByIdranking(params?.id)
                setFormData(res?.data)
            } catch (error) {

            }
        }
        if (params?.id) {
            detbyIdData()
        }
    }, [params?.id])

    useEffect(() => {
        getCurrentDate()
        getMaster()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">{params?.id ? 'Update' : 'Add'} Rank </h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" className="form-label"> Name <span style={{ color: 'red' }}>*</span></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                            name="name"
                                            value={formData?.name}
                                            onChange={changeHandleN}
                                        />
                                    </div>
                                    <div className="col-xl-8 mb-3">
                                        {formData.ranking.map((item, index) => (
                                            <div key={index} className="row mb-3">
                                                <div className="col-lg-6">
                                                    <label htmlFor={`rank-${index}`} className="form-label">
                                                        Rank <span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id={`rank-${index}`}
                                                        className="form-control"
                                                        placeholder="Enter Rank"
                                                        value={item.rank}
                                                        onChange={(e) => changeHandle(e, index, 'rank')}
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor={`college-${index}`} className="form-label">
                                                        College <span style={{ color: 'red' }}>*</span>
                                                    </label>
                                                    <select
                                                        id={`college-${index}`}
                                                        className="form-control"
                                                        value={item.college}
                                                        onChange={(e) => changeHandle(e, index, 'college')}
                                                    >
                                                        <option value="">Select College</option>
                                                        {data &&
                                                            data.map((college) => (
                                                                <option key={college._id} value={college._id}>
                                                                    {college.name}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                                {index !== 0 && (
                                                    <div className="col-12 text-end">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger mt-2"
                                                            onClick={() => removeRanking(index)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-primary mt-3"
                                            onClick={addRanking}
                                        >
                                            Add More
                                        </button>
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

export default RankAdd