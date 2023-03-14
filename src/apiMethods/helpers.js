import axios from "axios";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

// export const getUsers = async () => {
//   const response = await fetch(`${BASE_URL}/users`);

//   console.log(response);
// };

export const getPositions = async () => {
  const response = await axios(`${BASE_URL}/positions`);
  return response.data;
};

export const getToken = async () => {
  try {
    const response = await fetch(`${BASE_URL}/token`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};
