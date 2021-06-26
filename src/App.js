import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//App
import Login from "./components/user/Login";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import Signup from "./components/user/Signup";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./components/user/ForgotPassword";
import UpdateAccount from "./components/user/UpdateAccount";
import BlogList from "./components/blog/list/BlogList";
import HealthCheck from "./components/health/HealthCheck";
import Home from "./pages/Home";

function App() {
    return (<Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/"}>Octo Broccoli</Link>
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

                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/blogList" component={BlogList}/>
                        <Route path="/health" component={HealthCheck}/>

                        <Route path="/signup" component={Signup}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>

                        <PrivateRoute path="/dashboard" component={Dashboard}/>
                        <PrivateRoute path="/my-profile" component={UpdateAccount}/>
                        <PrivateRoute path="/update-account" component={UpdateAccount}/>
                    </Switch>
                </AuthProvider>

            </div>
        </Router>
    );
}

export default App;
