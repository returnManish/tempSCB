// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};
