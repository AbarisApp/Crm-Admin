import React from "react";
import PSMunit from "../../components/rems-status/PSMunit";
import ListView from "../../components/rems-status/ListView";
import StanderLayout from "../../components/rems-status/StanderLayout";
import RecentItem from "../../components/rems-status/RecentItem";
import CardSlider from "../../components/rems-status/CardSlider";

export default function Compaigs(){
    return(
        <div>
            <PSMunit title={"Campaigns Home"}/>
            <StanderLayout link={"/newcompaigs"}/>
            <CardSlider />
            <RecentItem />
            <ListView />
        </div>
    )
}