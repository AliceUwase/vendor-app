import api from '../utils/api';

export const getAllVendors = async (filters = {}) => {
  try {
    const params = new URLSearchParams(filters).toString();
    const response = await api.get(`/vendors${params ? '?' + params : ''}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch vendors' };
  }
};

export const getVendorById = async (id) => {
  try {
    const response = await api.get(`/vendors/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch vendor' };
  }
};

export const searchVendors = async (query) => {
  try {
    const response = await api.get(`/vendors/search?q=${query}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Search failed' };
  }
};

export const getVendorsByCategory = async (category) => {
  try {
    const response = await api.get(`/vendors/category/${category}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch vendors' };
  }
};