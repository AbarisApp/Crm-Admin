import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFileAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import FastTrack from "../../../common/fastTrack/FastTrack";
import { useParams } from "react-router-dom";
import { remainderSetupAdd, remainderSetupGet } from "../../../api/login/Login";
import Loadar from "../../../common/loader/Loader";

function ReminderSetup() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const [initialvalue, setInitialValue] = useState({
    reminder_on_birthday: false,
    before_days_b: "",
    reminder_on_anniversary: false,
    before_days_a: "",
    reminder_days: false,
    before_days_r: "",
    after_days: "",
    due_payment_sms_on_startup: false,
    sms_template_p: "",
    credit_days_reminder_on_startup: false,
    sms_template_s: ""
  });

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setInitialValue((prevValues) => ({
      ...prevValues,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsLoading(true)
    if (form.checkValidity() === false) {
      setValidated(true);
    } else {
      try {
        const response = await remainderSetupAdd(initialvalue);
        if (response?.statusCode === "200") {
          toastSuccessMessage("Remainder Setup added successfully!");
          setIsLoading(false)
          setInitialValue({
            reminder_on_birthday: false,
            before_days_b: "",
            reminder_on_anniversary: false,
            before_days_a: "",
            reminder_days: false,
            before_days_r: "",
            after_days: "",
            due_payment_sms_on_startup: false,
            sms_template_p: "",
            credit_days_reminder_on_startup: false,
            sms_template_s: ""
          });
        } else {
          toastErrorMessage("Failed to remainder update.");
        }
      } catch (error) {
        console.error("API Error:", error);
        toastErrorMessage("Failed to remainder update.");
      }
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await remainderSetupGet();
        if (response && response.data) {
          setInitialValue(response.data);
        } else {
          toastErrorMessage("Failed to load remainder data.");
        }
      } catch (error) {
        console.error("Data Fetching Error:", error);
        toastErrorMessage("Failed to load remainder data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {isLoading && <Loadar />}
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0">
                      <FaFileAlt className="me-1 mb-1" />
                      Reminder Setup
                    </h4>
                    <Button
                      variant="primary bg-primary"
                      onClick={() => setShow(true)}
                    >
                      <IoSearch className="fs-3" />
                    </Button>
                  </div>
                  <form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="mt-3 mb-3">
                      <div className="row">
                        {/* Reminder On Section */}
                        <div className="col-md-4">
                          <div className="mb-3">
                            <b style={{ color: "black" }}>Reminder On</b>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reminder_on_birthday"
                              checked={initialvalue?.reminder_on_birthday}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="reminder_on_birthday">
                              Birthday
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reminder_on_anniversary"
                              checked={initialvalue?.reminder_on_anniversary}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="reminder_on_anniversary">
                              Anniversary
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="reminder_days"
                              checked={initialvalue?.reminder_days}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="reminder_days">
                              Reminder Days
                            </label>
                          </div>
                        </div>
                        {/* Before Days Input */}
                        <div className="col-md-4">
                          <div className="mb-3">
                            <b style={{ color: "black" }}>Before</b>
                          </div>
                          <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Birthday Days"
                            id="before_days_b"
                            value={initialvalue?.before_days_b || ""}
                            onChange={handleChange}
                          />
                          <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Anniversary Days"
                            id="before_days_a"
                            value={initialvalue?.before_days_a || ""}
                            onChange={handleChange}
                          />
                          <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Reminder Days"
                            id="before_days_r"
                            value={initialvalue?.before_days_r || ""}
                            onChange={handleChange}
                          />
                        </div>
                        {/* After Days Input */}
                        <div className="col-md-3">
                          <div className="mb-3">
                            <b style={{ color: "black" }}>After</b>
                          </div>
                          <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Days"
                            id="after_days"
                            value={initialvalue?.after_days || ""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* Additional Reminders */}
                      <div className="row">
                        <div className="col-xl-8">
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="due_payment_sms_on_startup"
                              checked={initialvalue?.due_payment_sms_on_startup}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="due_payment_sms_on_startup">
                              Due Payment SMS on Startup
                            </label>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="sms_template_p" className="form-label">
                              Due Payment SMS Template
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="sms_template_p"
                              value={initialvalue?.sms_template_p}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="credit_days_reminder_on_startup"
                              checked={initialvalue?.credit_days_reminder_on_startup}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="credit_days_reminder_on_startup">
                              Credit Days Reminder On Startup
                            </label>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="sms_template_s" className="form-label">
                              Credit Days SMS Template
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="sms_template_s"
                              value={initialvalue?.sms_template_s}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-4">
                        <button type="submit" className="btn btn-primary me-2">
                          Save
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={() => setInitialValue(initialvalue)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="text-center" />
      <FastTrack show={show} setShow={setShow} />
    </>
  );
}

export default ReminderSetup;
