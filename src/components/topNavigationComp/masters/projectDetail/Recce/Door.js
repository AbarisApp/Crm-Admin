
export const Door = () => {
    return <div>
        <h5>Door</h5>
        <div>
            <h6>Entrance</h6>
            <hr></hr>
            <select className="form-select" aria-label="Default select example">
                <option selected="">Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>

            <div style={{ margin: "10px 0" }}>
                <button type="button" class="btn btn-success">Add</button>
                <button type="button" class="btn btn-danger">Cancle</button>
            </div>
        </div>
    </div>
}