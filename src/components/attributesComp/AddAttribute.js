import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { clodinaryImage, getattributeId, getBrandById, languageList } from '../../api/login/Login';
import { baseproductUrl, baseUrlImage } from '../../baseUrl';
import Loadar from '../../common/loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddAttribute({getData}) {
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
        const res = await getattributeId(params?.uid)
        console.log(res);
        setVal(res.data)
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
                await axios.put(`${baseproductUrl}attribute/update_attributes/${params?.uid}`, { list: val }, {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
                    },
                });
                navigate('/product_attribute')
            } else {
                await axios.post(`${baseproductUrl}attribute/add_attributes`, { list: val }, {
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
                {load && <Loadar />}
                <div className="col-xl-12" style={{ padding: '0' }}>
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0" style={{ padding: '10px' }}>
                                        <b>Add New Attribute</b>
                                        <small
                                            style={{ textTransform: 'capitalize', marginLeft: '5px' }}
                                        >
                                            Control panel
                                        </small>
                                    </h4>
                                </div>

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value.toString()}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                            >
                                                {data &&
                                                    data.map((item, i) => (
                                                        <Tab key={i} label={item?.name} value={i.toString()} />
                                                    ))}
                                            </TabList>
                                        </Box>
                                        {val &&
                                            val.map((item, i) => (
                                                <TabPanel key={i} value={i.toString()}>
                                                    <form
                                                        className="row cusforms mt-3"
                                                        style={{ padding: '0 20px' }}
                                                        onSubmit={(e) => handleSubmit(e, i)}
                                                    >
                                                        <div className="form-group col-10">
                                                            <label htmlFor={`name-${i}`}>Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Attribute Name"
                                                                id={`name-${i}`}
                                                                value={item.name}
                                                                onChange={(e) =>
                                                                    handleInputChange(i, 'name', e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-group col-10">
                                                            <label htmlFor={`image-${i}`}>Image</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                id={`image-${i}`}
                                                                onChange={(e) =>
                                                                    handleChangeImage(i, 'image', e.target.files[0])
                                                                }
                                                            />
                                                            {item.image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${item.image}`} />}
                                                        </div>


                                                        <div className="form-group col-3">
                                                            <div className="form-check form-switch d-flex align-items-center justify-content-between ps-0">
                                                                <label
                                                                    className="form-check-label me-2"
                                                                    htmlFor={`approve-${i}`}
                                                                >
                                                                    Approve This Language
                                                                </label>
                                                                <input
                                                                    style={{
                                                                        marginLeft: '80px',
                                                                        border: '1px solid black',
                                                                    }}
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    id={`approve-${i}`}
                                                                    checked={item.approve}
                                                                    onChange={(e) =>
                                                                        handleInputChange(i, 'approve', e.target.checked)
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-12 mt-3">
                                                            <button
                                                                type="button"
                                                                className="btn btn-warning float-end"
                                                                onClick={() =>
                                                                    handleInputChange(i, 'name', '')
                                                                }
                                                            >
                                                                RESET
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary float-end"
                                                            >
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
    );
}

export default AddAttribute;
