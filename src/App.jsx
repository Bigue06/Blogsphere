// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Deconnexion from "./Pages/Deconnexion";
import EditProfile from "./Pages/EditProfile";
import Article from "./Pages/Article";  // Vérifie que ce fichier existe et est correctement nommé

import Editor from "./Editor"; 

import Layout from "./Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />

        <Route path="/" element={<Layout />}>
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="profile/:username"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="edit-profile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="editor"
            element={
              <PrivateRoute>
                <Editor />
              </PrivateRoute>
            }
          />
          <Route
            path="articles"
            element={
              <PrivateRoute>
                <Article />  {/* Assure-toi que le fichier Article.jsx existe et est correctement importé */}
              </PrivateRoute>
            }
          />
          <Route
            path="deconnexion"
            element={
              <PrivateRoute>
                <Deconnexion />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
