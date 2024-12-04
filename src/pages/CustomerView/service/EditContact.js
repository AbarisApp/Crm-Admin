import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { clodinaryImage, getLeadServiceReqById, getTaskPriorities, postLeadServiceReq, updateLeadServiceReqById } from "../../../api/login/Login";
import { baseUrlImage } from "../../../baseUrl";
import { toast, ToastContainer } from "react-toastify";

const EditContact = ({ show, onHide, getFloorMasters, id, data }) => {
    console.log('data', data);
    const parem = useParams()
    const [formData, setFormData] = useState({
        customer_name: "",
        customer_number: "",
        task_detail: "", // This should be task._id from your database
        preferred_date: "",
        address: "",
        landmark_product_detail: "",
        product_detail: "",
        product_no: "",
        service_description: "",
        message: "",
        attach_photo: null, // Will store file or base64 string
        model_no: "",
        user_id: parem.id, // This should be user._id from your database
    });

    const [task, setTask] = useState([])
    const getData = async () => {
        try {
            const res = await getTaskPriorities(0, 100)
            setTask(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    const [image, setImage] = useState(null);
    useEffect(() => {
        if (data) {
           
            setFormData(data)
            setImage(data?.attach_photo)
        }
    }, [data])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = async (e) => {
        const image = new FormData()
        image.append('image', e.target.files[0])
        try {
            const res = await clodinaryImage(image)
            setTimeout(() => {
                setImage(res.data?.data?.url)
            }, 1000);
        } catch (error) {

        }
    };

    const toastSuccessMessage = (message) => {
        toast.success(`${message}`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your submit logic here
        console.log("Form Data Submitted", formData);

        try {
            const res = await updateLeadServiceReqById(id ,{ ...formData, attach_photo: image });
            if (res?.statusCode == "200") {
                toastSuccessMessage("Service request Update successfully");
                setTimeout(() => {
                    getFloorMasters()
                    setFormData({
                        customer_name: "",
                        customer_number: "",
                        task_detail: "", // This should be task._id from your database
                        preferred_date: "",
                        address: "",
                        landmark_product_detail: "",
                        product_detail: "",
                        product_no: "",
                        service_description: "",
                        message: "",
                        attach_photo: null, // Will store file or base64 string
                        model_no: "",
                        user_id: parem.id, // This should be user._id from your database
                    })
                    onHide();
                }, 1000);
            }
            else {
                toastErrorMessage("Something went wrong Service request Not Add");
            }
        } catch (error) {
            console.error("Error:", error);
        }
        // Close the modal
    };
    console.log(formData);

    return (
        <Modal show={show} onHide={onHide} dialogClassName="custom-modal-width">
            <Modal.Header closeButton>
                <Modal.Title>Update Service request</Modal.Title>
                <ToastContainer />
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Customer Name and Customer Number */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Customer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="customer_name"
                                    value={formData?.customer_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Customer Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="customer_number"
                                    value={formData?.customer_number}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Model No</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="model_no"
                                    value={formData?.model_no}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Task Detail, Preferred Date */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Task Detail</label>
                                <select
                                    className="form-control"
                                    name="task_detail"
                                    value={formData?.task_detail}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Task</option>
                                    {task?.map((item, index) => (
                                        <option key={index} value={item._id}>
                                            {item.name}
                                        </option>
                                    ))}
                                    {/* Task IDs should be fetched from your DB */}
                                    {/* <option value="task_id_1">Installation</option>
                                    <option value="task_id_2">Maintenance</option>
                                    <option value="task_id_3">Repair</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="preferred_date"
                                    value={formData?.preferred_date}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Address and Landmark Product Detail */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={formData?.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Landmark Product Detail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="landmark_product_detail"
                                    value={formData?.landmark_product_detail}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Product Detail and Product No */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Product Detail</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="product_detail"
                                    value={formData?.product_detail}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Product No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="product_no"
                                    value={formData?.product_no}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 5: Service Description and Message */}
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Service Description</label>
                                <textarea
                                    className="form-control"
                                    name="service_description"
                                    value={formData?.service_description}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={formData?.message}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 6: Attach Photo */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Attach Photo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="attach_photo"
                                    onChange={handleFileChange}
                                />
                            </div>
                            {image && <img style={{ width: "100px", height: "100px" }} src={`${baseUrlImage}${image}`} />}
                        </div>
                    </div>

                    {/* User ID (optional field, adjust as needed) */}
                    {/* <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>User ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="user_id"
                                    value={formData?.user_id}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div> */}

                    <Button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </Button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EditContact;
