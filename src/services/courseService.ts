import { apiClient } from '@/services/apiClient';

export const courseService = {
  list: async (params?: Record<string, unknown>) => {
    const { data } = await apiClient.get('/courses', { params });
    return data;
  },
  getById: async (courseId: string) => {
    const { data } = await apiClient.get(`/courses/${courseId}`);
    return data;
  },
};

