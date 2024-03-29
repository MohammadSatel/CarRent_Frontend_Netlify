import axios from 'axios';


// Base URL for the API endpoint
const BASE_URL = 'https://car-rental-backend-render.onrender.com'; 

// Function to register a new user using the API
export const registerApi = async (newUser: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/register/`, newUser);
    return response;
  } catch (error) {
    throw error;
  }
};
