import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import { toast, ToastContainer } from 'react-toastify';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { postCallConvertStatus, updateCallConvertStatusById, getCallConvertStatusById, getMarketTypeByPage, clodinaryImage, updateBannerById, postBanner, getBannerById } from '../../../../../api/login/Login';
import { baseUrlImage } from '../../../../../baseUrl';

function CreateBanner() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Add Banner",
    };

    const [formData, setFormData] = useState({
        title: "",
        is_active: "",
        banner_image: "",
        meta_title: "",
        meta_description: "",
        meta_keyword: "",
        meta_image: "",
        id: "",
        is_active: true,
        market_type: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!params?.id) {
                const res = await postBanner(formData);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Banner added successfully");
                    setTimeout(() => navigate(`/banner-master`), 1000);
                }
            } else {
                const res = await updateBannerById(params.id, formData);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Banner updated successfully");
                    setTimeout(() => navigate(`/banner-master`), 1000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };

    const [markType, setMarkType] = useState([]);
    const getDatas = async () => {
        try {
            const res = await getMarketTypeByPage(0, 100);
            setMarkType(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const [isBannerImageUploading, setIsBannerImageUploading] = useState(false);
    const [isMetaImageUploading, setIsMetaImageUploading] = useState(false);

    const handleImageChange = async (e, field) => {
        const image = new FormData();
        image.append('image', e.target.files[0]);
        field === 'banner_image' ? setIsBannerImageUploading(true) : setIsMetaImageUploading(true);

        try {
            const res = await clodinaryImage(image);
            if (res.data?.data?.url) {
                setFormData((prevData) => ({
                    ...prevData,
                    [field]: res.data.data.url,
                }));
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            field === 'banner_image' ? setIsBannerImageUploading(false) : setIsMetaImageUploading(false);
        }
    };

    useEffect(() => {
        const fetchBannerData = async () => {
            if (params?.id) {
                const response = await getBannerById(params.id);
                setFormData({
                    title: response?.data?.title || "",
                    status: response?.data?.status || "",
                    banner_image: response?.data?.banner_image || "",
                    meta_title: response?.data?.meta_title || "",
                    meta_description: response?.data?.meta_description || "",
                    meta_keyword: response?.data?.meta_keyword || "",
                    meta_image: response?.data?.meta_image || "",
                    id: response?.data?.id || "",
                    is_active: response?.data?.is_active || true,
                    market_type: response?.data?.market_type || "",
                });
            }
        };

        fetchBannerData();
        getDatas();
    }, [params?.id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
        <ToastContainer/>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} Banner</h4>
                            </div>
                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <h6>Banner Title</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Banner Image</h6>
                                        <CustomInputField
                                            type="file"
                                            onChange={(e) => handleImageChange(e, 'banner_image')}
                                        />
                                        {formData?.banner_image && (
                                            <img
                                                style={{ width: "200px", height: "200px" }}
                                                src={`${baseUrlImage}${formData?.banner_image}`}
                                                alt="Banner"
                                            />
                                        )}
                                        {isBannerImageUploading && <p>Uploading...</p>}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Meta Title</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="meta_title"
                                            value={formData.meta_title}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Meta Keywords</h6>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="meta_keyword"
                                            value={formData.meta_keyword}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Meta Image</h6>
                                        <CustomInputField
                                            type="file"
                                            onChange={(e) => handleImageChange(e, 'meta_image')}
                                        />
                                        {formData?.meta_image && (
                                            <img
                                                style={{ width: "200px", height: "200px" }}
                                                src={`${baseUrlImage}${formData?.meta_image}`}
                                                alt="Meta"
                                            />
                                        )}
                                        {isMetaImageUploading && <p>Uploading...</p>}
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Banner Status</h6>
                                        <select
                                            className="form-select"
                                            name="is_active"
                                            value={formData.is_active}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Status</option>
                                            <option value={true}>Active</option>
                                            <option value={false}>Inactive</option>
                                        </select>
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <h6>Market Type</h6>
                                        <select
                                            className="form-select"
                                            name="market_type"
                                            value={formData.market_type}
                                            onChange={handleInputChange}
                                        >
                                            <option value="">Select Market Type</option>
                                            {markType.map((mt) => (
                                                <option key={mt.id} value={mt._id}>
                                                    {mt.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-xl-12 mt-3">
                                        <button type="submit" className="btn btn-primary">
                                            {params?.id ? "Update" : "Add"} Banner
                                        </button>
                                        <Link to="/banner-master">
                                            <button type="button" className="btn btn-danger ms-2">
                                                Cancel
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateBanner;
