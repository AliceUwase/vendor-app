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
    const response = await api.get(`/vendors/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Search failed' };
  }
};

export const getVendorsByCategory = async (category) => {
  try {
    const response = await api.get(`/vendors/category/${encodeURIComponent(category)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch vendors' };
  }
};

export const createVendor = async (vendorData) => {
  try {
    const response = await api.post('/vendors', vendorData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create vendor' };
  }
};

export const updateVendor = async (id, vendorData) => {
  try {
    const response = await api.put(`/vendors/${id}`, vendorData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update vendor' };
  }
};

export const deleteVendor = async (id) => {
  try {
    const response = await api.delete(`/vendors/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete vendor' };
  }
};

export const getMyVendors = async () => {
  try {
    const response = await api.get('/vendors/my-vendors');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch your vendors' };
  }
};