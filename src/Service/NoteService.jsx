import axios from "axios";

const headerConfig = {
  headers: {
    Authorization: `bearer ${localStorage.getItem("auth")}`,
  },
};

const baseUrl = "http://localhost:5000/api/v1/notes";

export const createNote = (data) => {
  var response = axios.post(`${baseUrl}`, data, headerConfig);
  return response;
};

export const getAllNote = () => {
  var response = axios.get(`${baseUrl}`, headerConfig);
  return response;
};

export const archive = (id) => {
  var response = axios.put(`${baseUrl}/${id}/archive`, "", headerConfig);
  return response;
};

export const trashed = (id) => {
    var response = axios.put(`${baseUrl}/${id}/trash`, "", headerConfig);
  return response;
};


export const updateNote = (id,data) => {
  var response = axios.put(`${baseUrl}/${id}`, data, headerConfig);
return response;
};