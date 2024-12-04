import { Empty } from "antd";
import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import CapitalProduct from "../CapitalProduct";
import ProductHistory from "./productHistory/ProductHistory";
import ProductSummary from "./productSummary/ProductSummary";

function ModalProductList() {
    const [showHis, setShowHis] = useState(true)
    return (
        <>
            <section>
                <div className="row m-4">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <div className="d-flex align-item-center"><h4 className="heading mb-0">HISTORY</h4>
                                        </div>
                                        <div ><Button type="button" className="btn bg-warning py-0" onClick={(() => { setShowHis(true) })} >
                                            HISTORY
                                        </Button>
                                            <Button type="button" className="btn bg-warning py-0" onClick={(() => { setShowHis(false) })}>
                                                SUMMARY
                                            </Button></div>
                                    </div>
                                    {showHis ? <ProductHistory /> : <ProductSummary />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ModalProductList;
