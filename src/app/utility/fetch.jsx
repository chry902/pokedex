import Axios from "axios";

const fetchData = async (url) => {
  try {
    console.log("Fetching data from:", url);

    const response = await Axios.get(url);

    console.log("Data received:", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default fetchData;
