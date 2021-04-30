import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './routers/PrivateRoute';
// import PublicRoute from './routers/PublicRoute';
import LoginPage from './components/login/LoginPage';
import AdminLoginPage from './components/login/AdminLoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import FacultyDashboard from './components/faculty/FacultyDashboard';
import StudentDashboard from './components/student/StudentDashboard';
import AdminProfile from './components/admin/AdminProfile';
import FacultyProfile from './components/faculty/FacultyProfile';
import StudentProfile from './components/student/StudentProfile';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LoginPage} />

        {/* Student Routes */}
        <Route path='/student' exact component={StudentDashboard} />
        <Route path='/student/profile' exact component={StudentProfile} />

        {/* Faculty Routes */}
        <Route path='/faculty' exact component={FacultyDashboard} />
        <Route path='/faculty/profile' exact component={FacultyProfile} />

        {/* Admin Routes */}
        <Route path='/admin/login' exact component={AdminLoginPage} />
        <Route path='/admin' exact component={AdminDashboard} />
        <Route path='/admin/profile' exact component={AdminProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
