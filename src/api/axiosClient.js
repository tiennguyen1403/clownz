import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://clownz-api.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosClient;
