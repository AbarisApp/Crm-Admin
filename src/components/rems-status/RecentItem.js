import React from "react";

export default function RecentItem(){
        return(
            <div className="mt-3">
                <div className="d-flex p-2 bg-light justify-content-between">
                    <div>
                        <h1 className="fs-5 m-0 text-black">Recent Items</h1>
                    </div>
                    <div>
                        <select className="border fs-5">
                            <option>Recently Created</option>
                        </select>
                    </div>
                </div>
                <table className="w-100">
                    <tr className="bg-light p-1 border">
                        <th className="fs-5 p-1 text-black">Name</th>
                        <th className="fs-5 p-1 text-black">code</th>
                        <th className="fs-5 p-1 text-black">Created Data</th>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                    <tr className="border p-1">
                        <td className="fs-5 p-1 text-black">Dosti Grope Phase 1</td>
                        <td className="fs-5 p-1 text-black"> Dosti123</td>
                        <td className="fs-5 p-1 text-black">28/03/2023 11:23:56</td>
                    </tr>
                </table>
            </div>
        )
}