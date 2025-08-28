import axios from "axios";

const baseURL = "https://study-padi-api-113537a2b48f.herokuapp.com/api/v1";

const client = axios.create({
  baseURL: baseURL,
});

export default client;
