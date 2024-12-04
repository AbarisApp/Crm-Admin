
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { baseproductUrl, baseUrlImage } from '../../baseUrl';
import { clodinaryImage, getBrandById, languageList } from '../../api/login/Login';
import Loadar from '../../common/loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
function AddIndustry({ getData }) {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList(); // Assuming `languageList` fetches the language data
        setData(res.data);

        const mapped = res.data.map((item) => ({
        name: "", language_id: item._id, parent_id: null, lable: item.name, order_level: "", type: "", banner: "", meta_title: "", meta_description: '', commision_rate: "", level: "", top: false, featured: false, meta_keyword: "", slug: "", description: ''
        }));
        if (params?.uid) {
            getDataId()
        } else {
            setVal(mapped);
        }
    };

    const params = useParams()
    useEffect(() => {
        getLang();
    }, [params?.uid]);

    const getDataId = async () => {
        // const res = await getBrandById(params?.uid)
        // console.log(res);
        // setVal(res.data)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (index, field, value) => {
        setVal((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };
    const [load, setLoad] = useState(false)
    const handleChangeImage = async (index, field, file) => {
        setLoad(true)
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await clodinaryImage(formData); // Assuming `clodinaryImage` handles the image upload
            const imageUrl = res?.data?.data?.url;
            setTimeout(() => {
                setLoad(false)
                setVal((prev) =>
                    prev.map((item, i) =>
                        i === index ? { ...item,  [field]: imageUrl } : item
                    )
                );
            }, 1000);

        } catch (error) {
            console.error('Image upload failed', error);
        }
    };
    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };

    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (params?.uid) {
                await axios.put(`${baseproductUrl}industry/${params?.uid}`, { list: val }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                    },
                });
                navigate('/product_brand')
            } else {
                await axios.post(`${baseproductUrl}industry/add_category`, { list: val }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                    },
                });
            }
            getData()
            toastSuccessMessage(params?.uid ? "Updated successfully" : "Added successfully");
            // alert('brand  Request Send Successfully')
        } catch (error) {
            // alert('brand  Request Send Fail !')
        }
    };
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12" style={{ padding: "0" }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Add New Industry </b>  <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}> Control panel</small></h4>
                                </div>
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                                {data &&
                                                    data.map((item, i) => (
                                                        <Tab key={i} label={item?.name} value={i} />
                                                    ))}
                                            </TabList>
                                        </Box>
                                        {val &&
                                            val.map((item, i) => (
                                                <TabPanel key={i} value={i}>
                                                    <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Industry  Name'
                                                                id="fromDate"
                                                                value={item.name}
                                                                onChange={(e) =>
                                                                    handleInputChange(i, 'name', e.target.value)
                                                                }
                                                            />
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Parent Category</label>
                                                            <select className="form-select form-control" aria-label="Default select example"
                                                                value={item.parent_id}
                                                                onChange={(e) => handleInputChange(i, "parent_id", e.target.value)}
                                                            >
                                                                <option selected>Select Parent Category</option>
                                                                <option value={'null'}>Null</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>

                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Ordering Number</label>
                                                            <input
                                                                type="text"
                                                                className="form-control mb-0"
                                                                placeholder='Enter Ordering Number'
                                                                id="fromDate" value={item.order_level}
                                                                onChange={(e) => handleInputChange(i, "order_level", e.target.value)}
                                                            />
                                                            <small>Higher number has high priority</small>
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Type</label>
                                                            <select className="form-select form-control" aria-label="Default select example"
                                                                value={item.type}
                                                                onChange={(e) => handleInputChange(i, "type", e.target.value)}
                                                            >
                                                                <option selected>Select Type</option>
                                                                <option value={'Physical'}>Physical</option>
                                                                <option value={'Digital'}>Digital</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group col-10 mt-2 mb-3">
                                                            <label>Description</label>
                                                            <ReactQuill
                                                                value={item.description}
                                                                onChange={(value) => handleInputChange(i, "description", value)}
                                                                placeholder="Start typing..."
                                                            />
                                                        </div>



                                                        <div className="form-group col-10">
                                                            <label htmlFor="banner">Banner</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                onChange={(e) =>
                                                                    handleChangeImage(i, 'banner', e.target.files[0])
                                                                }
                                                            />
                                                            {item.banner && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item.banner}`} />}
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="icon">Icon</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                onChange={(e) =>
                                                                    handleChangeImage(i, 'icon', e.target.files[0])
                                                                }
                                                            />
                                                            {item.icon && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item.icon}`} />}
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Video Link</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Video Link'
                                                                id="fromDate"
                                                                value={item.video_link}
                                                                onChange={(e) => handleInputChange(i, "video_link", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Meta Title</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Meta Title'
                                                                id="fromDate"
                                                                value={item.meta_title}
                                                                onChange={(e) => handleInputChange(i, "meta_title", e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Meta Description</label>
                                                            <textarea class="form-control" placeholder="Enter Meta Description" id="exampleFormControlTextarea1" rows="4" value={item.meta_description}
                                                                onChange={(e) => handleInputChange(i, "meta_description", e.target.value)}></textarea>
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Meta Keywords</label>
                                                            <textarea class="form-control" value={item.meta_keyword}
                                                                onChange={(e) => handleInputChange(i, "meta_keyword", e.target.value)} placeholder="Enter Meta Keywords" id="exampleFormControlTextarea1" rows="4"></textarea>
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Slug (Without Space) </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Slug'
                                                                id="fromDate"
                                                                value={item.slug}
                                                                onChange={(e) => handleInputChange(i, "slug", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Commission Rate</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Commission Rate'
                                                                id="fromDate"
                                                                value={item.commision_rate}
                                                                onChange={(e) => handleInputChange(i, "commision_rate", e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-10">
                                                            <label htmlFor="fromDate">Level</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder='Enter Level'
                                                                id="fromDate"
                                                                value={item.level}
                                                                onChange={(e) => handleInputChange(i, "level", e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="top">Top</label>
                                                            <select
                                                                className="form-select form-control"
                                                                value={item.top}
                                                                onChange={(e) => handleInputChange(i, "top", e.target.value)}
                                                            >
                                                                <option value={false}>No</option>
                                                                <option value={true}>Yes</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor="featured">Featured</label>
                                                            <select
                                                                className="form-select form-control"
                                                                value={item.featured}
                                                                onChange={(e) => handleInputChange(i, "featured", e.target.value)}
                                                            >
                                                                <option value={false}>No</option>
                                                                <option value={true}>Yes</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-12 mt-3">
                                                            <button type="button" className="btn btn-warning float-end" >
                                                                RESET
                                                            </button>
                                                            <button type="button" onClick={handleSubmit} className="btn btn-primary float-end">
                                                                SAVE
                                                            </button>
                                                        </div>
                                                    </form>
                                                </TabPanel>
                                            ))}
                                    </TabContext>
                                </Box>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddIndustry