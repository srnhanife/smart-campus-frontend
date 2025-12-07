export interface CourseSummary {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  ects: number;
}

export interface SectionSummary {
  id: string;
  sectionNumber: string;
  instructor: string;
  scheduleText: string;
  capacity: number;
  enrolledCount: number;
}

export interface CourseDetail extends CourseSummary {
  description?: string;
  prerequisites: CourseSummary[];
  sections: SectionSummary[];
}

export interface EnrollmentItem {
  enrollmentId: string;
  course: CourseSummary;
  section: SectionSummary;
  attendancePercentage?: number;
}

export interface CourseListParams {
  search?: string;
  department?: string;
  page?: number;
  limit?: number;
}

