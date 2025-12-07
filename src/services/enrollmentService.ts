import { apiClient } from '@/services/apiClient';
import type { EnrollmentItem } from '@/types/courses';

export const enrollmentService = {
  enroll: async (payload: { sectionId: string }) => {
    const { data } = await apiClient.post<{ message: string }>('/enrollments', payload);
    return data;
  },
  drop: async (enrollmentId: string) => {
    const { data } = await apiClient.delete<{ message: string }>(`/enrollments/${enrollmentId}`);
    return data;
  },
  myCourses: async () => {
    const { data } = await apiClient.get<EnrollmentItem[]>('/enrollments/my-courses');
    return data;
  },
  sectionStudents: async (sectionId: string) => {
    const { data } = await apiClient.get(`/enrollments/students/${sectionId}`);
    return data;
  },
};

