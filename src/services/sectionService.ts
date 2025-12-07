import { apiClient } from '@/services/apiClient';

export const sectionService = {
  list: async (params?: Record<string, unknown>) => {
    const { data } = await apiClient.get('/sections', { params });
    return data;
  },
  getById: async (sectionId: string) => {
    const { data } = await apiClient.get(`/sections/${sectionId}`);
    return data;
  },
};

