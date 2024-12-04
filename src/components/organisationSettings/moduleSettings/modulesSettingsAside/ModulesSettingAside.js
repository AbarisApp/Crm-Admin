import React, { useState } from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ModulesSettingAside() {
    const [activeKey, setActiveKey] = useState("Recce");
    const linkStyle = {
        fontSize: "16px",
        fontWeight: 700,
        color: "#000",
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: "#fff",
        backgroundColor: "#007bff",
    };

    return (
        <>
            <Nav
                variant="pills"
                className="flex-column mb-3"
                style={{ height: "70vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}
            >
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                        as={Link} to=""
                    >
                        <span>
                            <i class="fa-solid fa-camera"></i>
                        </span>
                        &nbsp;
                        <span>Recce</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="design" style={linkStyle} className="my-2 border">
                        <span>
                            <i className="fa-sharp fa-regular fa-object-group"></i>
                        </span>
                        &nbsp;
                        <span>Design</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-sharp fa-solid fa-cart-plus"></i>
                        </span>
                        &nbsp;
                        <span>Vendor Orders</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-sharp fa-solid fa-cart-plus"></i>
                        </span>
                        &nbsp;
                        <span>Client Orders</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-sharp fa-solid fa-bacon"></i>
                        </span>
                        &nbsp;
                        <span>
                            Work Progress
                        </span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-solid fa-camera"></i>
                        </span>
                        &nbsp;
                        <span>Snags</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-sharp fa-solid fa-vector-square"></i>
                        </span>
                        &nbsp;
                        <span>Manage Vendor</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        style={linkStyle}
                        className="my-2 border"
                    >
                        <span>
                            <i class="fa-sharp fa-solid fa-circle"></i>
                        </span>
                        &nbsp;
                        <span>Other</span>
                    </Nav.Link>
                </Nav.Item>

            </Nav >
        </>
    )
}

export default ModulesSettingAside