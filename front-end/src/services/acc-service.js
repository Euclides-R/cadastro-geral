const axios = require("axios");

const HOST_URL = "http://localhost:3333";

const getAcc = async () => {
  return await axios.get(`${HOST_URL}/accounts`);
};

const getAccById = async (id, data) => {
  return await axios.post(`${HOST_URL}/accounts-show/${id}`, data);
};

const registerAcc = async (data) => {
  return await axios.post(`${HOST_URL}/register-acc`, data);
};

const editAcc = async (id, data) => {
  return await axios.put(`${HOST_URL}/acc-edit/${id}`, data);
};

const deleteAcc = async (id) => {
  return await axios.delete(`${HOST_URL}/account ${id}`);
};

export default { getAcc, registerAcc, editAcc, deleteAcc };
