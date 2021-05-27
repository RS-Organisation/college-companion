import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

//Private Routes
import PrivateAdminRoute from './routers/PrivateRoutes/PrivateAdminRoute';
import PrivateFacultyRoute from './routers/PrivateRoutes/PrivateFacultyRoute';
import PrivateStudentRoute from './routers/PrivateRoutes/PrivateStudentRoute';
import PublicRoute from './routers/PublicRoutes/PublicRoute';

import LoginPage from './components/login/LoginPage';
import ForgotPasswordPage from './components/login/ForgotPasswordPage';
import ResetPasswordPage from './components/login/ResetPasswordPage';

// Student Imports
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';
import AttendancePage from './components/student/AttendancePage';
import SubjectsPage from './components/student/SubjectsPage';
import AcademicPerformancePage from './components/student/AcademicPerformancePage';

// Faculty Imports
import FacultyDashboard from './components/faculty/FacultyDashboard';
import FacultyProfile from './components/faculty/FacultyProfile';
import MarkAttendancePage from './components/faculty/MarkAttendancePage';
import UploadMarksPage from './components/faculty/UploadMarksPage';

// Admin Imports
import AdminLoginPage from './components/login/AdminLoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProfile from './components/admin/AdminProfile';
import AddAdmin from './components/admin/AddAdmin';
import AddFaculty from './components/admin/AddFaculty';
import AddStudent from './components/admin/AddStudent';
import AddSubject from './components/admin/AddSubject';
import OurFacultiesPage from './components/admin/OurFacultiesPage';
import OurStudentsPage from './components/admin/OurStudentsPage';
import DisplaySubjectsPage from './components/admin/DisplaySubjectsPage';

export const history = createHistory();
const App = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <PublicRoute path='/' exact component={LoginPage} />
        <PublicRoute path='/reset' exact component={ForgotPasswordPage} />
        <PublicRoute path='/reset/:userType/:token' exact component={ResetPasswordPage} />

        {/* Student Routes */}
        <PrivateStudentRoute
          path='/student'
          exact
          component={StudentDashboard}
        />
        <PrivateStudentRoute
          path='/student/attendance'
          exact
          component={AttendancePage}
        />
        <PrivateStudentRoute
          path='/student/subjects'
          exact
          component={SubjectsPage}
        />
        <PrivateStudentRoute
          path='/student/profile'
          exact
          component={StudentProfile}
        />
        <PrivateStudentRoute
          path='/student/academics'
          exact
          component={AcademicPerformancePage}
        />

        {/* Faculty Routes */}
        <PrivateFacultyRoute
          path='/faculty'
          exact
          component={FacultyDashboard}
        />
        <PrivateFacultyRoute
          path='/faculty/profile'
          exact
          component={FacultyProfile}
        />
        <PrivateFacultyRoute
          path='/faculty/markAttendance'
          exact
          component={MarkAttendancePage}
        />
        <PrivateFacultyRoute
          path='/faculty/uploadMarks'
          exact
          component={UploadMarksPage}
        />

        {/* Admin Routes */}
        <PublicRoute
          path='/admin/login'
          exact
          component={AdminLoginPage}
        />
        <PrivateAdminRoute
          path='/admin'
          exact
          component={AdminDashboard}
        />
        <PrivateAdminRoute
          path='/admin/profile'
          exact
          component={AdminProfile}
        />
        <PrivateAdminRoute
          path='/admin/addAdmin'
          exact
          component={AddAdmin}
        />
        <PrivateAdminRoute
          path='/admin/addFaculty'
          exact
          component={AddFaculty}
        />
        <PrivateAdminRoute
          path='/admin/addStudent'
          exact
          component={AddStudent}
        />
        <PrivateAdminRoute
          path='/admin/addSubject'
          exact
          component={AddSubject}
        />
        <PrivateAdminRoute
          path='/admin/ourFaculties'
          exact
          component={OurFacultiesPage}
        />
        <PrivateAdminRoute
          path='/admin/ourStudents'
          exact
          component={OurStudentsPage}
        />
        <PrivateAdminRoute
          path='/admin/subjectsList'
          exact
          component={DisplaySubjectsPage}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
