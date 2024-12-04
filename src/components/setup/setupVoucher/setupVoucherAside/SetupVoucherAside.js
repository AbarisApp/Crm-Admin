import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function SetupVoucherAside({ state, onSelect }) {
    const [activeKey, setActiveKey] = useState(state?.data?.[0]?.name || "Cash Payment");

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
    

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
        // onSelect(selectedKey);  Update parent state
    };

    return (
        <Nav
            variant="pills"
            className="flex-column mb-3"
            activeKey={activeKey}
            onSelect={handleSelect}
            style={{ height: "84vh", overflowY: "scroll", scrollbarColor: "rgb(33 37 41)" }}
        >
            {state?.data?.map((item) => (
                <Nav.Item key={item._id}>
                    <Nav.Link
                        eventKey={item.name}
                        style={activeKey === item.name ? activeLinkStyle : linkStyle}
                        className="my-2 border"
                    >
                        {item.name}
                    </Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default SetupVoucherAside;

