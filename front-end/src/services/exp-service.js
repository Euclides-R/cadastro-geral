const axios = require("axios");

const HOST_URL = "http://localhost:3333";

const getExp = async () => {
  return await axios.get(`${HOST_URL}/expenditure`);
};

const getExpById = async (id, data) => {
  return await axios.post(`${HOST_URL}/expenditure-show/${id}`, data);
};

const registerExp = async (data) => {
  return await axios.post(`${HOST_URL}/register-expenditure`, data);
};

const editExp = async (id, data) => {
  return await axios.put(`${HOST_URL}/expenditure-edit/${id}`, data);
};

const deleteExp = async (id) => {
  return await axios.delete(`${HOST_URL}/expenditure ${id}`);
};

export default { getExp, getExpById, registerExp, editExp, deleteExp };
