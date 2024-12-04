import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { doc_management_doc_category } from "../../../../api/login/Login";


const AddChildreenCategory = () => {
    const params = useParams()
    const navigate = useNavigate();
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Document Management",
        title_2: 'Child Categories Add',
        path_2: ``
    };

    const [initialState, setInitialState] = useState({
        name: '',
        isActive: true,
    })

    const changeHandle = (e) => {
        const clone = { ...initialState }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialState(clone)
    }

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"}  Document Successfully.`, {
            position: "top-center",
        });
    };

    const submitData = async () => {
        const clone = { ...initialState }
        // console.log(clone);
        try {
            if (!params?.id) {
                // const res = await doc_management_doc_category(clone)
                // if (res?.error == false) {
                //     toastSuccessMessage()
                // }
                // setTimeout(() => {
                //     navigate('/document-categories')
                // }, 3000)
            } else {
                // const res = await UpdateAllDocument(params?.id, clone)
                // if (res?.error == false) {
                //     toastSuccessMessage()
                // }
                // setTimeout(() => {
                //     navigate('/documents')
                // }, 3000)
            }
        } catch (error) {

        }

    }

    useEffect(() => {
        const fetchAddDocumentId = async () => {
            try {
                // if (params?.id) {
                //     const response = await doc_management_idGet(params.id);
                //     // console.log(response);
                //     const userTypeData = response.data;

                // } else {

                // }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchAddDocumentId();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2 py-2">
                                    <h4 className="heading mb-0"><b>Child Categories Add
                                    </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label"> Name </label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" name="name" value={initialState?.name} onChange={changeHandle} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select status</label>
                                            <select className="form-control" aria-label="Default select example" name="isActive" value={initialState?.isActive} onChange={changeHandle}>
                                                <option value={true}>Active</option>
                                                <option value={false}>InActive</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <div className='d-flex justify-content-start' >
                                                <button className="btn btn-primary pd-x-20 color2" type="button" onClick={submitData}>
                                                    <i className="fas fa-search"></i> Save
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
        </>
    )
}

export default AddChildreenCategory