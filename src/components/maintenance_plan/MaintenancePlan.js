function MaintenancePlan() {
    return <div>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
            <header>
                <h2>Maintenance plans</h2>
                <div style={{ marginBottom: "20px" ,display:"flex"}}>
                    <div> <label style={{ display: "block", fontWeight: "bold" ,marginRight:"10px"}}>Maintenance plan</label>
                        <p style={{ margin: 0 }}>EX-PM</p></div>
                    <div style={{marginTop:"-8px"}}>   <label style={{ display: "block", fontWeight: "bold", marginTop: "10px" }}>Name</label>
                    <p style={{ margin: 0 }}>Extruder Line PM</p></div>
                 
                </div>
            </header>

            <section style={{ borderTop: "1px solid #ddd", paddingTop: "20px" }}>
                <h3>Details</h3>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Planning Section */}
                    <div>
                        <h4>Planning</h4>
                        <label>Plan date</label>
                        <input type="date" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                        <label>Active</label>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <input type="checkbox" id="active" />
                            <label htmlFor="active" style={{ marginLeft: "10px" }}>Yes</label>
                        </div>
                    </div>

                    {/* Skip Tolerance Section */}
                    <div>
                        <h4>Skip Tolerance</h4>
                        <label>Tolerance days before</label>
                        <input type="number" min="0" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                        <label>Tolerance days after</label>
                        <input type="number" min="0" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                    </div>

                    {/* Details Section */}
                    <div>
                        <h4>Details</h4>
                        <label>Lines</label>
                        <input type="number" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                        <label>Assets</label>
                        <input type="number" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                        <label>Functional locations</label>
                        <input type="text" style={{ display: "block", marginBottom: "10px", padding: "5px" }} />
                    </div>
                </div>
            </section>
        </div>
    </div>
}
export default MaintenancePlan