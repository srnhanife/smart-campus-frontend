import { apiClient } from '@/services/apiClient';
import type { CourseDetail, CourseListParams, CourseSummary } from '@/types/courses';

export const courseService = {
  list: async (params?: CourseListParams) => {
    const { data } = await apiClient.get<CourseSummary[]>('/courses', { params });
    return data;
  },
  getById: async (courseId: string) => {
    const { data } = await apiClient.get<CourseDetail>(`/courses/${courseId}`);
    return data;
  },
};

