import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getParticipateId, updateParticipate, updateParticipateId } from '../../api/login/Login';
import Loadar from '../../common/loader/Loader';

function ParticipateUpdate(props) {
  const [prediction, setPrediction] = useState('');
  const  [allData , setAllData] = useState()
  const [load , setLoad] = useState(false)

  // Fetch existing data when the modal opens
  const getByIds = async () => {
    try {
      const res = await getParticipateId(props.data);
      if (res && res.data) {
        setPrediction(res.data?.prediction)
        setAllData(res.data)
      }
    } catch (error) {
      console.error('Error fetching participate data:', error);
    }
  };

  // Update participate data when the form is submitted
  const handleUpdate = async () => {
    setLoad(true)
    try {
      const res = await updateParticipate(props.data, {...allData ,prediction:prediction});
      if (res.statusCode == 200) {
        // Successfully updated
        setTimeout(() => {
            setLoad(false)
            props.onHide()
        }, 1000);
        // props.onHide(); // Close modal on success
      }else{
        alert('Participate Not Update')
        setLoad(false)
      }
    } catch (error) {
      console.error('Error updating participate data:', error);
    }
  };

  useEffect(() => {
    if (props.data) {
      getByIds();
    }
  }, [props.data]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Participate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {load && <Loadar/>}
        <form>
          <div className="form-group">
            <label htmlFor="prediction">Prediction</label>
            <input
              type="text"
              className="form-control"
              id="prediction"
              value={prediction}
              onChange={(e) => setPrediction(e.target.value)}
              placeholder="Enter prediction"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ParticipateUpdate;
