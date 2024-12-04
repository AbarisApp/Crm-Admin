import React from 'react'
import { Modal, Tab, Tabs } from 'react-bootstrap'
import CapitalProduct from './product/CapitalProduct'
import ModalProductList from './product/modalproductList/ModalProductList'
import AccountModal from './product/accountModal/AccountModal'
import Serialnumber from './product/serialnumber/Serialnumber'

function CapitalModal(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="Product"
                        id="uncontrolled-tab-example"
                    >

                        <Tab eventKey="Product" title="Product">
                            <CapitalProduct />
                            <ModalProductList />
                        </Tab>
                        <Tab eventKey="Account" title="Account">
                            <AccountModal />
                        </Tab>
                        <Tab eventKey="SerialNo" title="Serial No.">
                            <Serialnumber />
                        </Tab>

                    </Tabs>
                </Modal.Body>

            </Modal>

        </>
    )
}

export default CapitalModal