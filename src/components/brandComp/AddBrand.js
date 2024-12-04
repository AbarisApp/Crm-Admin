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

function AddBrand({ getData }) {
    const [val, setVal] = useState([]);
    const [value, setValue] = useState(0);
    const [data, setData] = useState([]);

    const getLang = async () => {
        const res = await languageList(); // Assuming `languageList` fetches the language data
        setData(res.data);

        const mapped = res.data.map((item) => ({
            name: '',
            image: null,
            meta_title: '',
            meta_description: '',
            language_id: item._id,
            label: item.name,
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
        const res = await getBrandById(params?.uid)
        console.log(res);
        setVal(res.data)
    }
    // useEffect(() => {
    //     if (params?.uid) {
    //         getDataId()
    //     }
    // }, [params?.uid]);

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
                        i === index ? { ...item, image: imageUrl } : item
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
                await axios.put(`${baseproductUrl}brand/${params?.uid}`, { list: val }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                    },
                });
                navigate('/product_brand')
            } else {
                await axios.post(`${baseproductUrl}brand/add`, { list: val }, {
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
        <div className="row m-4">
            <ToastContainer />
            {load && <Loadar />}
            <div className="col-xl-12" style={{ padding: '0' }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0" style={{ padding: "10px" }}>
                                    <b>Add New Brand</b>
                                    <small style={{ textTransform: 'capitalize', marginLeft: '5px' }}>
                                        Control panel
                                    </small>
                                </h4>
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
                                                <form
                                                    className="row cusforms mt-3"
                                                    style={{ padding: '0 20px' }}
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="form-group col-10">
                                                        <label htmlFor="name">Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Brand Name"
                                                            value={item.name}
                                                            onChange={(e) =>
                                                                handleInputChange(i, 'name', e.target.value)
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group col-10">
                                                        <label htmlFor="image">Logo</label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            onChange={(e) =>
                                                                handleChangeImage(i, 'image', e.target.files[0])
                                                            }
                                                        />
                                                        {item.image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item.image}`} />}
                                                    </div>

                                                    <div className="form-group col-10">
                                                        <label htmlFor="meta_title">Meta Title</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Enter Meta Title"
                                                            value={item.meta_title}
                                                            onChange={(e) =>
                                                                handleInputChange(i, 'meta_title', e.target.value)
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group col-10">
                                                        <label htmlFor="meta_description">Meta Description</label>
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Enter Meta Description"
                                                            rows="4"
                                                            value={item.meta_description}
                                                            onChange={(e) =>
                                                                handleInputChange(i, 'meta_description', e.target.value)
                                                            }
                                                        ></textarea>
                                                    </div>

                                                    <div className="form-group col-12 mt-3">
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning float-end"
                                                            onClick={() => getLang()} // Reset by re-fetching initial data
                                                        >
                                                            RESET
                                                        </button>
                                                        <button type="submit" className="btn btn-primary float-end">
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
    );
}

export default AddBrand;
