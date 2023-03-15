import axios from "axios";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

export const getUsers = async page => {
  const response = await axios(`${BASE_URL}/users?page=${page}&count=6`);

  return response.data;
};

export const getPositions = async () => {
  const response = await axios(`${BASE_URL}/positions`);
  return response.data;
};

export const getToken = async () => {
  const response = await axios(`${BASE_URL}/token`);
  return response.data;
};

export const registerUser = async formData => {
  const { token } = await getToken();
  console.log(token);

  const response = await axios.post(`${BASE_URL}/users`, formData, {
    headers: {
      Token: token,
    },
  });

  return response.data;
};
