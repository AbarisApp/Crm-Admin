import Select from "react-select"; // Import react-select
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clodinaryImage, getStateMaster, reportSetupSetupAdd, reportSetupSetupGet } from "../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

function ReportSetupForm() {
  const [validated, setValidated] = useState(false);
  const [fileNames, setFileNames] = useState({});
  const params = useParams();
  const [statesList, setStatesList] = useState([]);

  const [initialValue, setInitialValue] = useState({
    company_name: '',
    header_line1: '',
    header_line2: '',
    header_line3: '',
    header_line4: '',
    header_line5: '',
    header_line6: '',
    printing_header_text_allignment: 'Left',
    signature: '',
    header: '',
    footer: '',
    logo: '',
    background: '',
    image_align: 'Left',
    gst_no: '',
    gst_address: '',
    state: { type: "", ref: 'state' },
    gst_place: '',
    gst_pincode: '',
    pan_no: '',
    tin_no: '',
    tan_no: '',
    cin_no: '',
    msme_no: '',
    st_no: '',
    ecommerce_gstno: '',
    bank_name: '',
    branch: '',
    ifsc_code: '',
    acc_no: '',
    upi_id: '',
    upi_qr_code: ''
  });

  const toastSuccessMessage = (message) => {
    toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const toastErrorMessage = (message) => {
    toast.error(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };

  const handleChange = async (e, label) => {
    const { name, value, files } = e.target;

    // Handle file uploads
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]);

      try {
        const uploadResult = await clodinaryImage(formData); // Assuming this is your upload function
        setFileNames((prev) => ({
          ...prev,
          [name]: uploadResult.data.data.url,
        }));
        setInitialValue((prevValues) => ({
          ...prevValues,
          [name]: uploadResult.data.data.url, // Store uploaded image URL
        }));
      } catch (error) {
        console.error("Image upload error:", error);
        toastErrorMessage("Image upload failed.");
      }
    } else if (name) {
      // Handle text and select inputs
      setInitialValue((prevValues) => ({
        ...prevValues,
        [name]: value, // For regular inputs
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      try {
        console.log(initialValue);

        const response = await reportSetupSetupAdd(initialValue); // Assuming this is your submit function
        if (response?.statusCode === "200") {
          toastSuccessMessage("SMS Setup added successfully!");
          setInitialValue({ ...initialValue });
        } else {
          toastErrorMessage("Failed to add SMS Setup.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to add SMS Setup.");
      }
    }
  };


  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await getStateMaster(); // Assuming this is your API call for states
        if (response && response.data) {
          setStatesList(response.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
      try {
        const response = await reportSetupSetupGet(); // Assuming this is your API call for states
        if (response && response.data) {
          setInitialValue(response.data);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  return (
    <div className="container mt-5">
      <Form noValidate onSubmit={handleSubmit}>
        {/* Company Information */}
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="row">
                <div className="col-xl-12">
                  <Form.Group controlId="company_name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company name"
                      name="company_name"
                      value={initialValue?.company_name}
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </Form.Group>
                </div>

                {/* Header Lines */}
                <h4>Header Lines</h4>
                <div className="col-xl-12">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div className="col-xl-6" key={i}>
                        <Form.Group controlId={`header_line${i}`}>
                          <Form.Label>{`Header Line ${i}`}</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder={`Enter header line ${i}`}
                            name={`header_line${i}`}
                            value={initialValue[`header_line${i}`]}
                            onChange={(e) => handleChange(e)}
                          />
                        </Form.Group>
                      </div>
                    ))}
                    <div className="col-xl-6">
                      <Form.Group controlId="printing_header_text_allignment">
                        <Form.Label>Printing Header Text Alignment</Form.Label>
                        <Form.Select
                          name="printing_header_text_allignment"
                          value={initialValue?.printing_header_text_allignment}
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="Left">Left</option>
                          <option value="Center">Center</option>
                          <option value="Right">Right</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-xl-6">
                      <div className="d-flex align-items-center mt-4">
                        {['signature', 'header', 'footer'].map((label) => (
                          <div key={label} className="me-3">
                            <div className="btn btn-outline-dark position-relative overflow-hidden">
                              <i className="fa-sharp fa-regular fa-file-image"></i>
                              <input
                                type="file"
                                name={label}
                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                onChange={(e) => handleChange(e, label)}
                              />
                            </div>
                            <small>{label}</small>
                            {/* Display the selected file name if it exists */}
                            {fileNames[label] && <small className="d-block mt-1">{fileNames[label]}</small>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card">
              <div className="row">
                <div className="col-xl-6">
                  <Form.Group controlId="image_align">
                    <Form.Label>Image Align</Form.Label>
                    <Form.Select
                      name="image_align"
                      value={initialValue?.image_align}
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="Left">Left</option>
                      <option value="Center">Center</option>
                      <option value="Right">Right</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-xl-6">
                  <Form.Group controlId="logo">
                    <Form.Label>Logo</Form.Label>
                    <Form.Control type="file" onChange={(e) => handleChange(e, 'logo')} name="logo" />
                  </Form.Group>
                </div>
                <div className="col-xl-6">
                  <Form.Group controlId="background">
                    <Form.Label>Background</Form.Label>
                    <Form.Control type="file" onChange={(e) => handleChange(e, 'background')} name="background" />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GST and Company Details */}
        <div className="card">
          <div className="row">
            {/* GST Details */}
            <div className="col-xl-3">
              <Form.Group controlId="gst_no">
                <Form.Label>GST No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter GST No"
                  value={initialValue.gst_no || ""}
                  name="gst_no"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className="col-xl-3">
              <Form.Group controlId="gst_address">
                <Form.Label>GST Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter GST Address"
                  value={initialValue.gst_address || ""}
                  name="gst_address"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className="col-xl-2">
              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Select
                  value={initialValue.state?.type || ""}
                  name="state"
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  {statesList.map((state) => (
                    <option key={state._id} value={state._id}>
                      {state.name ? state?.name : state.ref}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            {/* Additional Fields */}
            {[
              "gst_place",
              "gst_pincode",
              "pan_no",
              "tin_no",
              "tan_no",
              "cin_no",
              "msme_no",
              "st_no",
              "ecommerce_gstno",
            ].map((field, index) => (
              <div className="col-xl-3" key={index}>
                <Form.Group controlId={field}>
                  <Form.Label>{field.replace("_", " ").toUpperCase()}</Form.Label>
                  <Form.Control
                    type={
                      field.includes("no") || field.includes("pincode")
                        ? "text"
                        : "number"
                    }
                    placeholder={`Enter ${field.replace("_", " ")}`}
                    value={initialValue[field] || ""}
                    name={field}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            ))}
          </div>
        </div>

        {/* Bank and Payment Information */}
        <div className="card">
          <div className="row">
            {["bank_name", "branch", "ifsc_code", "acc_no", "upi_id"].map(
              (field, index) => (
                <div className="col-xl-6" key={index}>
                  <Form.Group controlId={field}>
                    <Form.Label>{field.replace("_", " ").toUpperCase()}</Form.Label>
                    <Form.Control
                      type={
                        field.includes("no") || field.includes("code")
                          ? "text"
                          : "text"
                      }
                      placeholder={`Enter ${field.replace("_", " ")}`}
                      value={initialValue[field] || ""}
                      name={field}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              )
            )}
            <div className="col-xl-6">
              <Form.Group controlId="upi_qr_code">
                <Form.Label>UPI QR Code</Form.Label>
                <div className="position-relative">
                  <Button variant="outline-dark" className="w-100">
                    <i className="fa-sharp fa-regular fa-file-image me-2"></i>Browse
                  </Button>
                  <Form.Control
                    type="file"
                    onChange={(e) => handleChange(e, "upi_qr_code")}
                    name="upi_qr_code"
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Form.Group>
            </div>

          </div>
        </div>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>

      <ToastContainer />
    </div >

  );
}

export default ReportSetupForm;
