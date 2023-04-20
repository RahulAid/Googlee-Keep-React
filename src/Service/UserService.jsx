import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1/users";
export const loginApi = (data) => {
  console.log("before");
  let response = axios.post(`${baseUrl}/login`, data);
  console.log("after");
  return response;
};

export const signupApi = (data) => {
  let response = axios.post(`${baseUrl}`, data);
  return response;
};
