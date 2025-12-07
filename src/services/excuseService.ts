import { apiClient } from '@/services/apiClient';

export const excuseService = {
  submit: async (payload: FormData) => {
    const { data } = await apiClient.post('/attendance/excuse-requests', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  list: async (params?: Record<string, unknown>) => {
    const { data } = await apiClient.get('/attendance/excuse-requests', { params });
    return data;
  },
  approve: async (requestId: string, payload?: unknown) => {
    const { data } = await apiClient.put(`/attendance/excuse-requests/${requestId}/approve`, payload);
    return data;
  },
  reject: async (requestId: string, payload?: unknown) => {
    const { data } = await apiClient.put(`/attendance/excuse-requests/${requestId}/reject`, payload);
    return data;
  },
};

