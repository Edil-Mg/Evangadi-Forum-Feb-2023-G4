import axios from "axios";

const instance = axios.create({
	baseURL: "https://long-pear-fish-fez.cyclic.app",
	withCredentials: true,
});

export default instance;
