import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-type" : "application/json"
    }
})

export default axiosInstance;
