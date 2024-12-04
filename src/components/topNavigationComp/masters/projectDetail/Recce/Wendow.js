import React from "react";
import { useDropzone } from "react-dropzone";

export const Wendow = () => {
    const onDrop = (acceptedFiles) => {
        // Handle the files here (e.g., save to state or upload to a server)
        console.log(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div>
            <h5>Window</h5>
            <div>
                <h6>BEDROOM 1</h6>
                <hr />
                <div {...getRootProps()} style={{
                    border: "2px dashed #ddd",
                    padding: "20px",
                    textAlign: "center",
                    marginTop: "15px",
                    cursor: "pointer"
                }}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag & drop some files here, or click to select files</p>
                    )}
                </div>

                <div style={{ margin: "10px 0" }}>
                    <button type="button" className="btn btn-success">Add</button>
                    <button type="button" className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    );
};
