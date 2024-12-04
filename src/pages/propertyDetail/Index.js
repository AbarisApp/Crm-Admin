import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import PropertyEdit from "../../components/rems-status/NewForms/PropetyEdit";
import ViewDetails from "../../components/rems-status/NewForms/ViewDetail";
import DetailTbalble from "../../components/rems-status/NewForms/DetailTable";
import Tags from "../../components/rems-status/NewForms/Tags";

export default function PropertyDetail(){
    return(
        <div>
            <PSMunit title={"Details of Property"}/>
            <PropertyEdit />
            <ViewDetails />
            <DetailTbalble />
            <Tags />
        </div>
    )
}