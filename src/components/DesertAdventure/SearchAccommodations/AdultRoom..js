import React from "react";

export function Adults({title, subDetail, Teen, children}) {
    return (
        <div className="pb-1 border-b border-1 rounded-0">
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h2 className="fs-6">{title}</h2>
                    {subDetail && <p className="m-0 fs-6">{subDetail}</p>}
                </div>
                <div>
                    <select className="form-select ">
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
            {Teen && 
                    <div className="border-b border-1">
                    <label className="form-form fs-6 text-ligth">Teen Age 1</label>
                    <select className="form-select">
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                }
                {children && <div className="row">
                    <div className="col-4">
                    <label className="form-form fs-6 text-ligth">child 1 Age </label>
                    <select className="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    <div className="col-4">
                    <label className="form-form fs-6 text-ligth">child 2 Age </label>
                    <select className="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    <div className="col-4">
                    <label className="form-form fs-6 text-ligth">child 3 Age </label>
                    <select className="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    <div className="col-4">
                    <label className="form-form fs-6 text-ligth">child 4 Age </label>
                    <select className="form-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    </div>}
        </div>
    )
}