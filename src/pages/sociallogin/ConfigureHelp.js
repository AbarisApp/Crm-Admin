import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfigureHelp(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How to get Google Credentials?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul className='ul-section'>
                    <li>Go to <a href="#" target="_blank" rel="noopener noreferrer">Google Developer Console</a>.</li>
                    <li>Click on <strong>Select a project</strong>, then click on <strong>New Project</strong> and create a project by providing a project name.</li>
                    <li>Click on <strong>Credentials</strong>.</li>
                    <li>Click on <strong>Create credentials</strong> and select <strong>OAuth client ID</strong>.</li>
                    <li>Click on <strong>Configure Consent Screen</strong>.</li>
                    <li>Choose the <strong>External</strong> option and press the <strong>Create</strong> button.</li>
                    <li>Fill in the required information for app configuration.</li>
                    <li>Again, click on <strong>Credentials</strong> and select type as <strong>Web Application</strong>. Fill in the required information, including the redirect URL, and press the <strong>Create</strong> button.</li>
                    <li>Finally, you will get the credentials. Please copy the <strong>Client ID</strong> and <strong>Client Secret</strong>, then paste them into the Google configuration section in the admin panel.</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfigureHelp;
