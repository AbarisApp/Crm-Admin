import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DummyForm from '../../dummy-user/MasterForm/DummyForm';

function DummyAddContext(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Bulk Dummy Participate
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DummyForm close={props.onHide} selectedItems={props.selectedItems}/>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}


export default DummyAddContext;