import "regenerator-runtime/runtime";
import axios from "axios";

const BASE_URL = `http://localhost:3004/api`;

const axiosRequest = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upload`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const main = async () => {
  await axiosRequest();
};

main();
