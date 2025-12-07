import { apiClient } from '@/services/apiClient';

export const attendanceService = {
  startSession: async (payload: unknown) => {
    const { data } = await apiClient.post('/attendance/sessions', payload);
    return data;
  },
  closeSession: async (sessionId: string) => {
    const { data } = await apiClient.put(`/attendance/sessions/${sessionId}/close`);
    return data;
  },
  mySessions: async () => {
    const { data } = await apiClient.get('/attendance/sessions/my-sessions');
    return data;
  },
  checkIn: async (sessionId: string, payload: unknown) => {
    const { data } = await apiClient.post(`/attendance/sessions/${sessionId}/checkin`, payload);
    return data;
  },
  myAttendance: async () => {
    const { data } = await apiClient.get('/attendance/my-attendance');
    return data;
  },
  sessionReport: async (sectionId: string, params?: Record<string, unknown>) => {
    const { data } = await apiClient.get(`/attendance/report/${sectionId}`, { params });
    return data;
  },
};

