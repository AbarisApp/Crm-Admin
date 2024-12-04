import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function DescriptionSec({ item, onChangeHandler }) {
    const [text, setText] = useState(item.productDescription);
   
    const handleChange = (value) => {
        setText(value); 
        onChangeHandler(item?.language_id?._id ,value)
    };


    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' },{ header: '3' },{ header: '4' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image', 'video'],
            ['clean'], // Removes formatting
        ],
    };

    console.log('text---', text)

    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Description</h3>
                            <hr />

                            <div>
                                <h2>Rich Text Editor</h2>
                                {/* <ReactQuill value={text} onChange={handleChange} /> */}
                                <ReactQuill
                                    value={text}
                                    onChange={handleChange}
                                    modules={modules} // Apply custom modules
                                    placeholder="Start typing..."
                                />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescriptionSec