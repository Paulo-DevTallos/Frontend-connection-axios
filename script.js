import "regenerator-runtime/runtime";
import axios from "axios";

const BASE_URL = `http://localhost:3004/api`;

const axiosRequest = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/upload`);
    console.log(response.data.uploadList);
  } catch (error) {
    console.log(error);
  }
};

/*const createImageElement = (image) => {
  const img = document.createElement("img");

  img.setAttribute("src", this.response.data.uploadList.imagePath);
  img.src = `${this.response.data.uploadList.imagePath}`;

  console.log(imageElement);
};*/

const main = async () => {
  await axiosRequest();
};

main();
