import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Select from 'react-select'; // For Meta Keywords input
import { Pagination, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';

function SeoConfigration() {
    const [metaKeywords, setMetaKeywords] = useState([]);
    const [metaDescription, setMetaDescription] = useState('');
    const [socialTitle, setSocialTitle] = useState('');
    const [socialDescription, setSocialDescription] = useState('');
    const [seoImage, setSeoImage] = useState(null);

    const metaKeywordOptions = [
        { value: 'prediction', label: 'prediction' },
        { value: 'prize', label: 'prize' },
        { value: 'raffle', label: 'raffle' },
        { value: 'visergo', label: 'visergo' },
        { value: 'competition', label: 'competition' },
        { value: 'drawn', label: 'drawn' }
    ];

    const handleImageChange = (event) => {
        setSeoImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Meta Keywords:', metaKeywords);
        console.log('Meta Description:', metaDescription);
        console.log('Social Title:', socialTitle);
        console.log('Social Description:', socialDescription);
        console.log('SEO Image:', seoImage);
        // Submit form data logic here
    };

    return (
        <>
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>SEO Image</label>
                                    <div className="mb-3">
                                        <input
                                            type="file"
                                            accept="image/png, image/jpeg"
                                            onChange={handleImageChange}
                                        />
                                        {seoImage && (
                                            <img
                                                src={seoImage}
                                                alt="SEO"
                                                style={{ width: '180px', height: '180px', marginTop: '10px' }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Meta Keywords <span className="text-danger">*</span></label>
                                    <Select
                                        isMulti
                                        name="metaKeywords"
                                        closeMenuOnSelect={false}
                                        options={metaKeywordOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        value={metaKeywords}
                                        onChange={setMetaKeywords}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Meta Description <span className="text-danger">*</span></label>
                                    <textarea
                                        className="form-control"
                                        value={metaDescription}
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Social Title <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={socialTitle}
                                        onChange={(e) => setSocialTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Social Description <span className="text-danger">*</span></label>
                                    <textarea
                                        className="form-control"
                                        value={socialDescription}
                                        onChange={(e) => setSocialDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default SeoConfigration;
