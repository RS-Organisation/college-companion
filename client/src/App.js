import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './routers/PrivateRoute';
// import PublicRoute from './routers/PublicRoute';

import LoginPage from './components/login/LoginPage';

// Student Imports
import StudentDashboard from './components/student/StudentDashboard';
import StudentProfile from './components/student/StudentProfile';
import AttendancePage from './components/student/AttendancePage';
import SubjectsPage from './components/student/SubjectsPage';

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

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LoginPage} />

        {/* Student Routes */}
        <Route path='/student' exact component={StudentDashboard} />
        <Route path='/student/attendance' exact component={AttendancePage} />
        <Route path='/student/subjects' exact component={SubjectsPage} />
        <Route path='/student/profile' exact component={StudentProfile} />

        {/* Faculty Routes */}
        <Route path='/faculty' exact component={FacultyDashboard} />
        <Route path='/faculty/profile' exact component={FacultyProfile} />
        <Route path='/faculty/markAttendance' exact component={MarkAttendancePage} />
        <Route path='/faculty/uploadMarks' exact component={UploadMarksPage} />

        {/* Admin Routes */}
        <Route path='/admin/login' exact component={AdminLoginPage} />
        <Route path='/admin' exact component={AdminDashboard} />
        <Route path='/admin/profile' exact component={AdminProfile} />
        <Route path='/admin/addAdmin' exact component={AddAdmin} />
        <Route path='/admin/addFaculty' exact component={AddFaculty} />
        <Route path='/admin/addStudent' exact component={AddStudent} />
        <Route path='/admin/addSubject' exact component={AddSubject} />
        <Route path='/admin/ourFaculties' exact component={OurFacultiesPage} />
        <Route path='/admin/ourStudents' exact component={OurStudentsPage} />
        <Route path='/admin/subjectsList' exact component={DisplaySubjectsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
