import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import CardLabel from "./CardLabel";


export default function CardSlider(){
  
      return (
          <div className="mt-3">
            <div className="d-flex w-100">
              <div className="btn"><FaChevronLeft /></div>
              <div className="d-flex gap-1">
                    <div className="">
                      <CardLabel />
                    </div>
                    <div className=""> <CardLabel /></div>
                    <div className=""><CardLabel /></div>
                    <div className=""><CardLabel /></div>
              </div>
              <div className="btn"><FaChevronRight /></div>
            </div>
          </div>
      );
}