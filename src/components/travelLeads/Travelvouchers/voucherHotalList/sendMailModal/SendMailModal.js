import { Button, Modal } from "react-bootstrap"
import { useEffect, useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { getByIdaccount_invoice, getByIdhotelVoucher, Updatelead_email } from "../../../../../api/login/Login";
import { toast, ToastContainer } from "react-toastify";

const SendMailModal = (props) => {
    const editor = useRef(null);

    const [id, setId] = useState()
    const [initialValues, setInitialValues] = useState({
        user_id: "",
        to: "",
        subject: '',
        description: '',
    });
    // const params = useParams();

    const changeHandle = (e) => {
        const clone = { ...initialValues }
        const value = e.target.value
        const name = e.target.name
        clone[name] = value
        setInitialValues(clone)
    }
    const handleEditorChange = (field, value) => {
        setInitialValues((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };


    const toastSuccessMessage = () => {
        toast.success(`Send Email Successfully`, {
            position: "top-center",
        });
    };

    const GetEmailSetup = async () => {
        try {
            const res = await getByIdhotelVoucher(props?.modalidData)
            // console.log(res);
            const clone = { ...initialValues, to: res?.data?.account?.Email, subject: res?.data?.account?.name }
            setInitialValues(clone)
            setId(res?.data?.lead_id?._id)
        } catch (error) {

        }
    }


    const updateEmailSetup = async () => {
        const clone = { ...initialValues, user_id: id }
        try {
            const res = await Updatelead_email(clone)
            // console.log(res);
            if (res?.error == false) {
                toastSuccessMessage()
            }

        } catch (error) {

        }
    }



    useEffect(() => {
        if (props?.modalidData) {
            GetEmailSetup()
        }
    }, [props?.modalidData])
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sending Email To : {initialValues?.to}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className="">
                        <div className="card">
                            <div className="">
                                <div className="row">
                                    {/* Invoice Type */}
                                    <div className="col-md-12">
                                        <label className="form-label">To</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="To"
                                            name="to" value={initialValues?.to} onChange={changeHandle}
                                        />
                                    </div>
                                    {/* Invoice No */}
                                    <div className="col-md-12">
                                        <label className="form-label">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control"

                                            name="subject" value={initialValues?.subject} onChange={changeHandle}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Send Voucher through email as attachment</label>
                                        <JoditEditor
                                            ref={editor}
                                            value={initialValues.description}
                                            config={{ readonly: false }}
                                            tabIndex={1}
                                            onBlur={(newContent) => handleEditorChange('description', newContent)}
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={updateEmailSetup}>Send</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                <ToastContainer />
            </Modal>


        </>
    )
}

export default SendMailModal