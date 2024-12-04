import axios from "axios";
import { baseproductUrl } from "../../baseUrl";
const getProductById = async (id) => {
  try {
    const response = await axios.get(
      `${baseproductUrl}product/${id}`,
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }
};

export default getProductById;
