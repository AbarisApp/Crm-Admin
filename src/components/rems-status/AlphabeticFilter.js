import React from "react";

export default function AlphabeticFilter(){
    return(
        <div className="p-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-2 align-items-center">
                    <div className="fs-5"><i class="fa-solid fa-filter"></i></div>
                    <div>
                        <ul className="d-flex gap-1">
                            <li>
                                <button className="btn btn-primary m-0 p-1 fs-6 text-white">All</button>
                            </li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">0-9</button></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="d-flex gap-1">
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">A</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">B</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">C</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">D</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">E</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">F</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">G</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">H</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">I</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">J</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">K</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">L</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">M</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">N</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">O</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">P</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">Q</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">R</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">S</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">T</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">U</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">V</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">W</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">X</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">Y</button></li>
                            <li className=""><button className="btn m-0 btn-secondary p-1 fs-6 text-white">Z</button></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex">
                    <input type="search" className="border" placeholder="Search.."/>
                    <button className="btn p-1 btn-primary">Go</button>
                </div>
            </div>
        </div>
    )
}