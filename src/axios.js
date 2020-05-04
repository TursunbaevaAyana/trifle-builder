import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = ""

export default instance;