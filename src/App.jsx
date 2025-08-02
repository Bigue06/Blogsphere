import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Editor from "./Pages/Editor";
import Deconnexion from "./Pages/Deconnexion";
import EditProfile from "./Pages/EditProfile";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes publiques */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />

  
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/profile"
            element={<Profile />} />

          <Route
            path="/profile/:username"
            element={<Profile />} />

          <Route
            path="/edit-profile"
            element={ <EditProfile />  } />

          <Route
            path="/editor"
            element={   <Editor />  } />

          <Route
            path="/logout"
            element={ <Deconnexion /> }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
