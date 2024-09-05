import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Membership from './pages/Membership';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import MembershipList from './pages/adminServices/MembershipList';
import AddMembership from './pages/adminServices/AddMembership';
import UserList from './pages/adminServices/UserList';
import TrainerList from './pages/adminServices/TrainerList';
import AddTrainerForm from './pages/adminServices/AddTrainer';
function App() {
  return (
    <Router>
    <Switch>
      {/* Redirect to login page if not authenticated */}
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signUp">
        <SignUp/>
      </Route>
      <Route path="/contactUs">
        <ContactUs/>
      </Route>
      <Route path="/aboutUs">
        <AboutUs/>
      </Route>
      <Route path="/membership">
        <Membership/>
      </Route>
      <Route path="/admin">
        <AdminLogin/>
      </Route>
      <Route path="/admin-dashboard">
        <AdminDashboard/>
      </Route>
      <Route path="/admin-dashboard-membershipList">
        <MembershipList/>
      </Route>
      <Route path="/admin-dashboard-addMembership">
        <AddMembership/>
      </Route>
      <Route path="/admin-dashboard-userList">
        <UserList/>
      </Route>
      <Route path="/admin-dashboard-trainerList">
        <TrainerList/>
      </Route>
      <Route path="/admin-dashboard-addTrainer">
        <AddTrainerForm/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
