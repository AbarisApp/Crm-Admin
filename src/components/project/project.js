import React from "react";
import FilterProject from "./filterproject";
import ProjectSummery from "./projectsummery";
export default function ProjectPlane(){
    return(
        <div>
            <div>
                <FilterProject />
            </div>
            <div className="mt-4">
                <ProjectSummery />
            </div>
        </div>
    )
}