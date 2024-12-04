import { Button, Col, Form, Row } from "react-bootstrap";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const PriceMasterAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'Add Of Price',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
            <div className="py-3">
                <Form className="m-3">
                    <Row className="mb-3 ">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Name : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name :"
                                required
                                name="date"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Date.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Form Date </Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Form No"
                                required
                                name="form_no"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Form No.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>To Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="TCS %"
                                required
                                name="cerficate_ref_no"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a Certificate Ref No.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Sale / Purchase: </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="voucher_type"
                            >
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please provide a Sales.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Product Level: </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="voucher_type"
                            >
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please provide a Sales.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Rate Type: </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="voucher_type"
                                className="form-control"
                            >
                                <option></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Please provide a Sales.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom03" className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Party Wise Req ?
                                </label>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom03" className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Rate Sheet Req ?
                                </label>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom03" className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Active
                                </label>
                            </div>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom03" className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Set Default
                                </label>
                            </div>
                        </Form.Group>
                    </Row>

                    <Button type="button" >Save</Button>
                </Form>
            </div>
        </>
    )
}

export default PriceMasterAdd
