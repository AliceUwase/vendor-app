import api from '../utils/api';

export const getAllCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch categories' };
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch category' };
  }
};

export const getCategoryByName = async (name) => {
  try {
    const response = await api.get(`/categories/name/${encodeURIComponent(name)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch category' };
  }
};

export const getVendorsInCategory = async (categoryId, page = 1, limit = 10) => {
  try {
    const response = await api.get(`/categories/${categoryId}/vendors?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch vendors in category' };
  }
};

