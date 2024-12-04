import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function VerticallyCenteredModal(props) {
    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading   
            </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
            <div className='poppup_module'>
            <div className="row h-100">
                <div className="co-xl-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.1244195092822!2d77.28046939999999!3d28.56228955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c9ea28f03%3A0xcf085976f2110601!2sJamia%20Millia%20Islamia%2C%20Jamia%20Nagar%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1727333879138!5m2!1sen!2sin" className="iframe_poppup" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
  }
  export default VerticallyCenteredModal;
