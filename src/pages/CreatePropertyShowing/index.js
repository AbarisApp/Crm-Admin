// import PropertychargesForm from "../../components/rems-status/NewForms/PropertychargesForm";
import PSMunit from "../../components/rems-status/PSMunit";
import SaveCancle from "../../components/rems-status/SaveCancle";
import PropertyShowingForm from "./PropertyShowingForm";

export default function CreatePropertyShowing(){
    return(
        <div>
            <PSMunit title={"Create Property Showing"}/>
            {/* <SaveCancle /> */}
            {/* <PropertychargesForm /> */}
            <PropertyShowingForm />
        </div>
    )
}