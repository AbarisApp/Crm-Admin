import React from 'react';

const FIlesTable = ({ documentsList }) => {
    const documents = documentsList;

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="p-3">
                        <div className="row">
                            <div className="col-12" style={{ overflowX: "auto" }}>
                                <div>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>File Name</th>
                                                <th>File Size</th>
                                                <th>File Type</th>
                                                <th>Uploaded By</th>
                                                <th>Upload Date</th>
                                                <th>Download Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {documents?.map((document, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{document.fileName}</td>
                                                    <td>{document.fileSize}</td>
                                                    <td>{document.fileType}</td>
                                                    <td>{document.uploadedBy}</td>
                                                    <td>{new Date(document.uploadDate).toLocaleDateString()}</td>
                                                    <td>
                                                        <a href={document.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                            Download
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FIlesTable;
