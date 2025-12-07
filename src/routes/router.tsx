import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
  AttendanceReportPage,
  CoursesPage,
  CourseDetailPage,
  DashboardPage,
  ExcuseRequestsPage,
  ForgotPasswordPage,
  GiveAttendancePage,
  GradebookPage,
  GradesPage,
  LoginPage,
  MyAttendancePage,
  MyCoursesPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage,
  StartAttendancePage,
  VerifyEmailPage,
} from '@/pages';
import { ProtectedRoute } from '@/components/routing/ProtectedRoute';
import { PublicRoute } from '@/components/routing/PublicRoute';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <PublicRoute>
        <ForgotPasswordPage />
      </PublicRoute>
    ),
  },
  {
    path: '/reset-password/:token',
    element: (
      <PublicRoute>
        <ResetPasswordPage />
      </PublicRoute>
    ),
  },
  {
    path: '/verify-email/:token',
    element: (
      <PublicRoute>
        <VerifyEmailPage />
      </PublicRoute>
    ),
  },
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/courses',
        element: <CoursesPage />,
      },
      {
        path: '/courses/:id',
        element: <CourseDetailPage />,
      },
      {
        path: '/my-courses',
        element: <MyCoursesPage />,
      },
      {
        path: '/grades',
        element: <GradesPage />,
      },
      {
        path: '/gradebook',
        element: <GradebookPage />,
      },
      {
        path: '/gradebook/:sectionId',
        element: <GradebookPage />,
      },
      {
        path: '/attendance/start',
        element: <StartAttendancePage />,
      },
      {
        path: '/attendance/give/:sessionId',
        element: <GiveAttendancePage />,
      },
      {
        path: '/my-attendance',
        element: <MyAttendancePage />,
      },
      {
        path: '/attendance/report',
        element: <AttendanceReportPage />,
      },
      {
        path: '/attendance/report/:sectionId',
        element: <AttendanceReportPage />,
      },
      {
        path: '/excuse-requests',
        element: <ExcuseRequestsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

