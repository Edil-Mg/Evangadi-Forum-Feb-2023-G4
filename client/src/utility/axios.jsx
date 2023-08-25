import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:4500/",
    withCredentials: true,
})

export default instance;