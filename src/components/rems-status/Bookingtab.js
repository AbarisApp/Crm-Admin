import React from "react";
import BookingCard from "./BookingCard";

export default function BookingTab(){
    return(
        <div>
            <ul className="p-0 d-flex rounded-0 border bg-light">
                <li className="border bg-white px-2 py-1">At-Book2</li>
            </ul>
            <div className="row">
                <div className="col-2">
                    <div className="p-1 fs-6 text-black">At-Book2</div>
                </div>
                <div className="col-10">
                    <div className="row  mt-2 gap-1">
                        <div className="col-2">
                            <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                        <div className="col-2">
                        <BookingCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}