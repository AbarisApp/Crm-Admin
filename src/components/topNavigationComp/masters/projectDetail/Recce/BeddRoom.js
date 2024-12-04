import JoditEditor from "jodit-react"

export const BeddRoom = () => {
    return <div>
        <h5>Bedroom</h5>
        <div>
            <h6>Dimensions of bedroom</h6>
            <hr></hr>
            <JoditEditor
            // ref={editor}
            // value={content}
            // onChange={newContent => setContent(newContent)}

            />
            <div style={{margin:"10px 0"}}>
                <button type="button" class="btn btn-success">Add</button>
                <button type="button" class="btn btn-danger">Cancle</button>
            </div>
        </div>
    </div>
}