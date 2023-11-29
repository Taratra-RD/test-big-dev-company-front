import axios from "axios";

const axiosAuth = axios.create({ withCredentials: true });

export default axiosAuth;
