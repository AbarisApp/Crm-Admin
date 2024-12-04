import { Button } from "antd";
import Select from 'react-select';
import { toast, ToastContainer } from "react-toastify";
import { addAllDocument, clodinaryImage, doc_management_idGet, getRoleSelecStaff, reailerDistIdAgainstAll, UpdateAllDocument, usersList } from "../../../../../../../api/login/Login";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrlImage } from "../../../../../../../baseUrl";


const TravelFilesAdd = ({ cancelForm, actionType, editData, getTransitionReport }) => {
    console.log(editData);

    const params = useParams()
    const navigate = useNavigate();
    // console.log(params);
    const [initialState, setInitialState] = useState({
        doc_upload: '',
        name: '',
        category: [],
        storage: '',
        description: '',
        meta_tags: [''],
        assign_share_with_roles: [],
        assign_share_with_users: []
    })
    const [image, setImage] = useState()

    const changeHandle = (e) => {
        const clone = { ...initialState }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialState(clone)
    }

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

    const [cate, setCate] = useState([])
    // console.log(cate);

    const [role, setRole] = useState([])
    const [user, setUser] = useState([])
    // console.log(user)

    //cat
    const comboApiGetData = async () => {
        try {
            const resCat = await reailerDistIdAgainstAll()
            // console.log(resCat?.data);
            const mapped = resCat?.data?.map((item) => ({
                ...item,
                label: item.service_name,
                value: item._id
            }));
            setCate(mapped)
        } catch (error) {
            // console.error("Error fetching bank list:", error);
        }
    }
    const [catinitial, setCatinitial] = useState(null)

    const catChange = (selectedOption) => {
        setCatinitial(selectedOption);
        const selectedCategoryIds = selectedOption ? selectedOption.map((option) => option.value) : [];
        setInitialState((prevState) => ({
            ...prevState,
            category: selectedCategoryIds
        }));

        // setInitialValue(prev => ({
        //     ...prev,
        //     ifsc: selectedOption?.ifsc_code === 'NULL' ? "" : selectedOption?.ifsc_code,
        //     bank_name: selectedOption?.bank_name,
        //     bank_id: selectedOption?.value
        // }));
    };
    //cat

    //role

    const roleList = async () => {
        try {
            const res = await getRoleSelecStaff();
            const mapped = res?.data?.map((item) => ({
                ...item,
                label: item.name,
                value: item._id
            }));
            setRole(mapped);
        } catch (error) {
            // console.error("Error fetching bank list:", error);
        }
    };
    const [roleinitial, setRoleinitial] = useState(null)
    // console.log(roleinitial);

    const roleChange = (selectedOption) => {
        setRoleinitial(selectedOption);
        const selectedRoleIds = selectedOption ? selectedOption.map((option) => option.value) : [];
        setInitialState((prevState) => ({
            ...prevState,
            assign_share_with_roles: selectedRoleIds
        }));
    };
    //role

    //user
    const userList = async () => {
        try {
            const res = await usersList();
            const mapped = res?.data?.map((item) => ({
                ...item,
                label: item.name,
                value: item._id
            }));
            setUser(mapped);
        } catch (error) {
            // console.error("Error fetching bank list:", error);
        }
    };

    const [userinitial, setUserinitial] = useState(null)
    // console.log(roleinitial);

    const userChange = (selectedOption) => {
        setUserinitial(selectedOption);
        const selectedUserIds = selectedOption ? selectedOption.map((option) => option.value) : [];
        setInitialState((prevState) => ({
            ...prevState,
            assign_share_with_users: selectedUserIds
        }));
    };

    //user


    const addmeta_tags = () => {
        setInitialState(prevState => ({
            ...prevState,
            meta_tags: [...prevState.meta_tags, '']
        }));
    };
    const updatemeta_tags = (index, value) => {
        const updatedTags = [...initialState.meta_tags];
        updatedTags[index] = value;
        setInitialState(prevState => ({
            ...prevState,
            meta_tags: updatedTags
        }));
    };

    const removemeta_tags = (index) => {
        const updatedTags = initialState.meta_tags.filter((_, i) => i !== index);
        setInitialState(prevState => ({
            ...prevState,
            meta_tags: updatedTags
        }));
    };

    const disabled = !image || !initialState?.name || !initialState?.category

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"}  Files Successfully.`, {
            position: "top-center",
        });
    };

    const submitData = async () => {

        const clone = { ...initialState, doc_upload: image }
        console.log(clone);

        try {
            if (!editData?._id) {
                const res = await addAllDocument(clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }

            } else {
                const res = await UpdateAllDocument(editData._id, clone)
                if (res?.error == false) {
                    toastSuccessMessage()
                    setTimeout(() => {
                        cancelForm()
                    }, 2000)
                    getTransitionReport(0)
                }

            }
        } catch (error) {

        }

    }

    // useEffect(() => {
    //     const fetchAddDocumentId = async () => {
    //         // console.log('fetchAddDocumentId');

    //         try {
    //             const response = await doc_management_idGet(editData._id);
    //             // console.log(response);
    //             const userTypeData = response.data;
    //             const clone = { ...userTypeData, doc_upload: userTypeData?.doc_upload }
    //             // console.log(clone);

    //             setInitialState(clone);
    //             setImage(userTypeData?.doc_upload)
    //             if (userTypeData.assign_share_with_roles) {
    //                 const selectedRoles = userTypeData.assign_share_with_roles.map(id => role.find(r => r.value === id));
    //                 // console.log('selectedRoles', selectedRoles);

    //                 setRoleinitial(selectedRoles);
    //             }
    //             // debugger
    //             if (userTypeData.assign_share_with_users) {
    //                 const selectedUsers = userTypeData.assign_share_with_users
    //                     .map(id => user.find(u => u.value === id))
    //                     .filter(Boolean);
    //                 setUserinitial(selectedUsers);
    //             }
    //             if (userTypeData.category) {
    //                 const selectedCategories = userTypeData.category
    //                     .map(id => cate.find(c => c.value === id))
    //                     .filter(Boolean);
    //                 setCatinitial(selectedCategories);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching User type:", error);
    //         }
    //     };
    //     if (editData && editData._id && cate.length && role.length && user.length) {
    //         fetchAddDocumentId();
    //     }
    // }, [editData._id, cate, role, user]);

    useEffect(() => {
        comboApiGetData()
        roleList()
        userList()
    }, [])

    return (
        <>
            {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
            <div className="row ">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2 py-2">
                                    <h4 className="heading mb-0"><b>{actionType == 'add' ? 'Add' : 'Update'} Document
                                    </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="image" className="form-label">Document Upload</label>
                                            <input type="file" className="form-control" id="image" onChange={handleChangeImage} />
                                            {image && <img src={`${baseUrlImage}${image}`} />}
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" name="name" value={initialState?.name} onChange={changeHandle} />
                                        </div>

                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select Category</label>
                                            {/* <select className="form-control" aria-label="Default select example" name="category" value={initialState?.category} onChange={changeHandle}>
                                                <option selected>Open this select Category</option>
                                                {cate && cate?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select> */}
                                            <Select
                                                value={catinitial}
                                                name="catinitial"
                                                options={cate}
                                                className="games-dropdown-2 customsection"
                                                classNamePrefix="select"
                                                onChange={catChange}
                                                placeholder="Select Bank"
                                                // isDisabled={isVerified}
                                                isMulti
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Select Storage</label>
                                            <select className="form-control" aria-label="Default select example" name="storage" value={initialState?.storage} onChange={changeHandle}>
                                                <option selected>Open this select Storage</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description" name="description" value={initialState?.description} onChange={changeHandle} />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Meta Tag</label>
                                            {initialState.meta_tags.map((tag, index) => (
                                                <div key={index} className="d-flex mb-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Meta Tag"
                                                        value={tag}
                                                        onChange={(e) => updatemeta_tags(index, e.target.value)}
                                                    />
                                                    {initialState.meta_tags.length > 1 && (
                                                        <button type="button" className="btn btn-danger ms-2" onClick={() => removemeta_tags(index)}>
                                                            Remove
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                            <button type="button" className="btn btn-success" onClick={addmeta_tags}>
                                                Add Meta Tag
                                            </button>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Assign/share with roles</label>
                                            {/* <select className="form-control" aria-label="Default select example" name="assign_share_with_roles" value={initialState?.assign_share_with_roles} onChange={changeHandle}>
                                                <option selected>Open this select Assign/share with roles</option>
                                                {role && role?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select> */}

                                            <Select
                                                value={roleinitial}
                                                name="roleinitial"
                                                options={role}
                                                className="games-dropdown-2 customsection"
                                                classNamePrefix="select"
                                                onChange={roleChange}
                                                placeholder="Select Bank"
                                                // isDisabled={isVerified}
                                                isMulti
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Assign/share with users</label>
                                            {/* <select className="form-control" aria-label="Default select example" name="assign_share_with_users" value={initialState?.assign_share_with_users} onChange={changeHandle}>
                                                <option selected>Open this select Assign/share with users</option>
                                                {user && user?.map((item) => {
                                                    return <option value={item?._id} key={item?._id}>{item?.name}</option>
                                                })}
                                            </select> */}

                                            <Select
                                                value={userinitial}
                                                name="userinitial"
                                                options={user}
                                                className="games-dropdown-2 customsection"
                                                classNamePrefix="select"
                                                onChange={userChange}
                                                placeholder="Select Bank"
                                                // isDisabled={isVerified}
                                                isMulti
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4 mt-4">
                                            <div className='d-flex justify-content-start mt-3'>
                                                <button className="btn btn-primary pd-x-20 color2 w-100" onClick={submitData} type="button">
                                                    {/* <i className="fas fa-search"></i> */}
                                                    {actionType == 'add' ? 'Add' : 'Update'}
                                                </button>
                                                <Button type="button" className="btn btn-danger" onClick={cancelForm}>Cancle</Button>
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

export default TravelFilesAdd