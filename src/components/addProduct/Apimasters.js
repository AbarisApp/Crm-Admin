import axios from "axios";
import { baseproductUrl } from "../../baseUrl";

export const getCategory = () => {
    return axios.get(`${baseproductUrl}category/page?page=0&count=10&parent_id=&search=`, {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

export const getIndustry = () => {
    return axios.get(`${baseproductUrl}industry/page?page=0&count=10&parent_id=&search=`, {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};