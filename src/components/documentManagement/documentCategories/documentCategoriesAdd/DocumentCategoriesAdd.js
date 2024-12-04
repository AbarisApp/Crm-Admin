import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { ddoc_management_doc_categoryidGet, ddoc_management_docupdate_type, doc_management_doc_category, doc_management_docAdmin } from "../../../../api/login/Login";


const DocumentCategoriesAdd = () => {
    const params = useParams()
    const navigate = useNavigate();
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Document Management",
        title_2: 'Document Categories Add',
        path_2: ``
    };
    const [initialState, setInitialState] = useState({
        name: '',
        isActive: true,
        parent_id: null,
        is_parent: true,
    })

    const changeHandle = (e) => {
        const clone = { ...initialState }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialState(clone)
    }

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-center",
        });
    };

    const [parentId, setParentId] = useState([])
    console.log(parentId);


    const parentIdgetApi = async () => {
        try {
            const res = await doc_management_docAdmin()
            setParentId(res?.data)
        } catch (error) {

        }
    }

    const submitData = async () => {
        const clone = { ...initialState }
        // console.log(clone);
        try {
            if (!params?.id) {
                const res = await doc_management_doc_category(clone)
                if (res?.error == false) {
                    toastSuccessMessage(res?.message)
                    setTimeout(() => {
                        navigate('/document-categories')
                    }, 3000)
                }

            } else {
                const res = await ddoc_management_docupdate_type(params?.id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        navigate('/document-categories')
                    }, 3000)
                }

            }
        } catch (error) {

        }

    }

    useEffect(() => {
        const fetchAddDocumentId = async () => {
            try {
                if (params?.id) {
                    const response = await ddoc_management_doc_categoryidGet(params.id);
                    // console.log(response);
                    const userTypeData = response.data;
                    setInitialState(userTypeData)
                } else {

                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchAddDocumentId();
    }, [params?.id]);

    useEffect(() => {
        parentIdgetApi()
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2 py-2">
                                    <h4 className="heading mb-0"><b> Document Categories Add
                                    </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label"> Name </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" name="name" value={initialState?.name} onChange={changeHandle} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select Status</label>
                                            <select className="form-control" aria-label="Default select example" name="isActive" value={initialState?.isActive} onChange={changeHandle}>
                                                <option value={true}>Active</option>
                                                <option value={false}>InActive</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select Parent</label>
                                            <select className="form-control" aria-label="Default select example" name="parent_id" value={initialState?.parent_id} onChange={changeHandle}>
                                                <option selected value={null}>null</option>
                                                {parentId && parentId?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Is Parent </label>
                                            <select className="form-control" aria-label="Default select example" name="is_parent" value={initialState?.is_parent} onChange={changeHandle}>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <div className='d-flex justify-content-start' >
                                                <button className="btn btn-primary pd-x-20 color2" type="button" onClick={submitData}>
                                                    {params?.id ? "Update" : 'Save'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default DocumentCategoriesAdd