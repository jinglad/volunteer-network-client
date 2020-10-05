import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import RegisteredEvent from './Components/RegisteredEvent/RegisteredEvent';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddEvent from './Components/Admin/AddEvent';
import Admin from './Components/Admin/Admin';
import VolunteerList from './Components/Admin/VolunteerList';

export const UserContext = createContext();
export const VolunteerContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [registeredVolunteer, setRegisteredVolunteer] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <VolunteerContext.Provider value={[registeredVolunteer, setRegisteredVolunteer]}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/register-volunteer">
                <RegisterVolunteer></RegisterVolunteer>
              </PrivateRoute>
              <PrivateRoute path="/registered-events">
                <RegisteredEvent></RegisteredEvent>
              </PrivateRoute>
              <Route path="/admin">
                <Admin></Admin>
              </Route>
              <Route path="/add-event">
                <AddEvent></AddEvent>
              </Route>
              <Route path="/volunteer-list">
                <VolunteerList></VolunteerList>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </div>
        </Router>
      </VolunteerContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
