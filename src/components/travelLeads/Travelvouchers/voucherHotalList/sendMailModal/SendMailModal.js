import { Button, Modal } from "react-bootstrap"
import { useMemo, useRef, useState } from "react";
import JoditEditor from "jodit-react";

const SendMailModal = (props) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typing...'
    }), []);
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
                        Sending Email To : sale@abc.com
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-xl-12 mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Subject</label>
                            <input type="text" className="form-control" name="title" placeholder="Enter Subject" />
                        </div>
                        <div className="col-xl-12 mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Exclusions</label>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1}
                                onBlur={newContent => setContent(newContent)}
                                onChange={newContent => { }}
                                className="form-control"
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SendMailModal