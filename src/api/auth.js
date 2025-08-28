import axios from "axios";

const client = axios.create({
  baseURL: "https://study-padi-api-113537a2b48f.herokuapp.com/api/v1",
});

const makeApiRequest = async (method, endpoint, data) => {
  try {
    const response = await client.request({
      method,
      url: endpoint,
      data, // add the data parameter to the request options
    });
    return { data: response.data, status: response.status };
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return { data: response.data, status: response.status };
    }
    return { error: error.message || error };
  }
};

export const loginUser = async (data) => {
  const response = await makeApiRequest("POST", "/user/login-user", data);
  return response;
};

export const registerUser = async (data) => {
  const response = await makeApiRequest("POST", "/user/create-user", data);
  return response;
};

export const verifyEmail = async (data) => {
  const response = await makeApiRequest("POST", "/user/verify-email", data);
  return response;
};
