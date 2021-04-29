import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './routers/PrivateRoute';
// import PublicRoute from './routers/PublicRoute';
import LoginPage from './components/login/LoginPage';
import AdminLoginPage from './components/login/AdminLoginPage';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminProfile from './components/admin/AdminProfile';
import FacultyDashboard from './components/faculty/FacultyDashboard';
import StudentDashboard from './components/student/StudentDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LoginPage} />

        {/* Student Routes */}
        <Route path='/student/' exact component={StudentDashboard} />

        {/* Faculty Routes */}
        <Route path='/faculty/' exact component={FacultyDashboard} />

        {/* Admin Routes */}
        <Route path='/admin/login' exact component={AdminLoginPage} />
        <Route path='/admin/' exact component={AdminDashboard} />
        <Route path='/admin/profile' exact component={AdminProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
