import api from '../utils/api';

export const createReview = async (reviewData) => {
  try {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to create review' };
  }
};

export const getReviewsByVendor = async (vendorId, page = 1, limit = 10) => {
  try {
    const response = await api.get(`/reviews/vendor/${vendorId}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch reviews' };
  }
};

export const updateReview = async (id, reviewData) => {
  try {
    const response = await api.put(`/reviews/${id}`, reviewData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update review' };
  }
};

export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete review' };
  }
};

export const getMyReviews = async (page = 1, limit = 10) => {
  try {
    const response = await api.get(`/reviews/my-reviews?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch your reviews' };
  }
};

