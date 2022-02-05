import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

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
    return (
        <BrowserRouter>
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
                                    <Link className="nav-link" to="/my-profile">My Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/blogList" element={<BlogList />}/>
                        <Route path="/health" element={<HealthCheck />}/>

                        <Route path="/signup" element={<Signup />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/forgot-password" element={<ForgotPassword />}/>

                        <Route path="/dashboard" element={<PrivateRoute />}>
                            <Route path="" element={<Dashboard />} />
                        </Route>
                        <Route path="/my-profile" element={<PrivateRoute />}>
                            <Route path="" element={<UpdateAccount />} />
                        </Route>
                        <Route path="/update-account" element={<PrivateRoute />}>
                            <Route path="" element={<UpdateAccount />} />
                        </Route>
                    </Routes>
                </AuthProvider>

            </div>
        </BrowserRouter>    
    );
}

export default App;
