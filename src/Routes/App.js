import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Feed from "../Pages/Feeder";
import Profile from "../Pages/Profile";
import Create from "../Pages/Create";
import Chat from "../Pages/ChatRoom";
import Connection from "../Pages/Connection";
import Jobs from "../Pages/Jobs";
import JobsDetail from "../Pages/JobsDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="feed/:id" element={<Feed />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="create/:id" element={<Create />} />
        <Route path="chat/:id" element={<Chat />} />
        <Route path="connection" element={<Connection />} />
        <Route path="job" element={<Jobs />} />
        <Route path="job/:id" element={<JobsDetail />} />
        <Route path="connection/:id" element={<Connection />} />
      </Routes>
    </div>
  );
}

export default App;
