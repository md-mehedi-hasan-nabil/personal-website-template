import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AdminServicesList from './Components/Admin/AdminServices/AdminServicesList';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin/serviceList">
            <AdminServicesList />
          </PrivateRoute>
          <PrivateRoute path="/admin/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/admin/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact />
          </PrivateRoute>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
