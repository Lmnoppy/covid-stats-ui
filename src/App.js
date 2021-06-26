import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Firebase.
import 'firebase/auth';

//App
import Login from "./components/Login";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import UpdateAccount from "./components/UpdateAccount";

function App() {
  return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>firebase-login-screen</Link>
            <div className="collapse navbar-collapse" id="navbar01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">My Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

          <div className="outer">
            <div className="inner">
              <AuthProvider>
                <Switch>

                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />

                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-account" component={UpdateAccount} />
                </Switch>
              </AuthProvider>
            </div>
          </div>
      </div>
  </Router>
        );
}

export default App;
