import React from 'react'

function ShippingConfiguration() {
    return (
        <>
            <div className="card">
                <div className="card-body pt-3 pb-3 ps-0 pe-0">
                    <div className="active-projects style-1">
                        <form className="row cusforms mt-3" style={{ padding: "0 20px" }}>

                            <h3 style={{ color: '#231f1fa1' }}>Shipping Configuration</h3>
                            <hr />
                            <div className="form-group col-12 mt-2">
                                <p>Product wise shipping cost is disable. Shipping cost is configured from here <b>Shipping Configuration</b></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingConfiguration