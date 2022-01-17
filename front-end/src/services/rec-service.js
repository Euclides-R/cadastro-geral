const axios = require("axios");

const HOST_URL = "http://localhost:3333";

const getRec = async () => {
  return await axios.get(`${HOST_URL}/receipt`);
};

const getRecById = async (id, data) => {
  return await axios.post(`${HOST_URL}/receipt-show/${id}`, data);
};

const registerRec = async (data) => {
  return await axios.post(`${HOST_URL}/register-receipt`, data);
};

const editRec = async (id, data) => {
  return await axios.put(`${HOST_URL}/receipt-edit/${id}`, data);
};

const deleteRec = async (id) => {
  return await axios.delete(`${HOST_URL}/receipt ${id}`);
};

export default { getRec, getRecById, registerRec, editRec, deleteRec };
