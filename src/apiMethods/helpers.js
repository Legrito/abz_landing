const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

// export const getUsers = async () => {
//   const response = await fetch(`${BASE_URL}/users`);

//   console.log(response);
// };

export const getPositions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/positions`);
    const positions = await response.json();
    return positions;
  } catch (error) {
    return error.message;
  }
};
