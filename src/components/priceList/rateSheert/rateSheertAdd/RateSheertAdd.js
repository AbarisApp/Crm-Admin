import { useEffect, useState } from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { getAccRateSheetById, postAccRateSheet, updateAccRateSheetById } from "../../../../api/login/Login";
const RateSheertAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Account Master",
        title_2: 'Add Rate Sheet',
        path_2: ``
    };
    const [state, setState] = useState({
        name: "",
        isActive: ""
    })
    const onChangeValue = (e) => {
        const { name, value } = e.target
        const clone = { ...state }
        clone[name] = value
        setState(clone)
    }
    const params = useParams()
    const toastSuccessMessage = (message) => {
        toast.success(` ${message}`, {
            position: "top-right",
        });
    };
    const navigate = useNavigate()
    const postData = async () => {
        try {
            if (!params?.id) {
                const res = await postAccRateSheet(state);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Rate Sheet Added successfully");
                    setTimeout(() => navigate(`/ratesheet/list`), 2000);
                }
            } else {
                const res = await updateAccRateSheetById(params.id, state);
                if (res?.statusCode == "200") {
                    toastSuccessMessage("Rate Sheet Updated successfully");

                    setTimeout(() => navigate(`/ratesheet/list`), 2000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (params?.id) {
                    const response = await getAccRateSheetById(params.id);
                    setState(response?.data);
                } else {
                    
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs
                breadCrumbsTitle={breadCrumbsTitle} />
                <ToastContainer/>
            <div className="py-3">
                <Form className="m-3">
                    <Row className="mb-3 ">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Sheet Name : </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                required
                                name="name"
                                value={state.name}
                                onChange={onChangeValue}

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-3">
                            <Form.Label>Status: </Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                name="isActive"
                                onChange={onChangeValue}
                                value={state.isActive}
                            >
                                <option>Select Status</option>
                                <option value={true}>Active</option>
                                <option value={false}>In Active</option>

                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Button type="button" onClick={postData} >Save</Button>
                </Form>
            </div>
        </>
    )
}

export default RateSheertAdd