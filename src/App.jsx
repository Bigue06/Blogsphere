import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import LesArticles from "./Pages/LesArticles";
import Editor from "./Pages/Editor";

import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />

        <Route path="/" element={<Layout />}>
         
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="articles" element={<LesArticles />} />
          <Route path="editor" element={<Editor />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
