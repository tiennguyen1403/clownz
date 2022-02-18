import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-type": "application/json"
    }
});

export default axiosClient;