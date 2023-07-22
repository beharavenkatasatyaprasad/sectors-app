// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'ec2-54-252-217-227.ap-southeast-2.compute.amazonaws.com:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getAllSectors = async () => {
  try {
    const response = await api.get('/sectors');
    return response.data;
  } catch (error) {
    console.error('Error fetching sectors:', error);
    throw error;
  }
};

export const getAllFormData = async () => {
  try {
    const response = await api.get('/formData');
    return response.data;
  } catch (error) {
    console.error('Error fetching sectors:', error);
    throw error;
  }
};

  
export const saveFormData = async (formData) => {
  try {
    const response = await api.post('/formData', formData);
    return response.data;
  } catch (error) {
    console.error('Error saving form data:', error);
    throw error;
  }
};

export const deleteFormDataById = async (formData) => {
  try {
    const response = await api.delete(`/formData/${formData._id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form data:', error);
    throw error;
  }
};

export const updateFormData = async (formData) => {
  try {
    const response = await api.put(`/formData`, formData);
    return response.data;
  } catch (error) {
    console.error('Error updating form data:', error);
    throw error;
  }
};
