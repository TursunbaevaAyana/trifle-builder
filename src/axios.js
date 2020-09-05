import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://trifle-builder.firebaseio.com";
 
export default instance;