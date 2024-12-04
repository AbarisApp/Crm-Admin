import React, { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SetAttributeModal({ lgShow, setLgShow }) {
    const [selectedValues, setSelectedValues] = useState([]);
    const options = [
        { name: 'Attribute 1', id: 1 },
        { name: 'Attribute 2', id: 2 },
        { name: 'Attribute 3', id: 3 },
        { name: 'Attribute 4', id: 4 }
    ];
    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    };
    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    };

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                dialogClassName='custom-large-modal'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Set Attribute (Variant Wise)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row' style={{ height: '500px' }}>
                        <div className="form-group col-10 mt-2">
                            <label htmlFor="fromDate">Attribute</label>
                            <Multiselect
                                options={options}
                                selectedValues={selectedValues}
                                onSelect={onSelect}
                                onRemove={onRemove}
                                displayValue="name"
                                placeholder="Select options"
                                style={{
                                    chips: { BiFontSize: '15px' },
                                    searchBox: { padding: '0 8px' }
                                }}
                            />
                        </div>
                        <div className="form-group col-2 mt-5">
                            <button className='btn btn-primary' style={{ fontSize: '18px' }}>Success</button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SetAttributeModal