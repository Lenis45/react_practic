import React from 'react';
import Error from "../pages/Error";
import '../styles/App.css';
import { redirect ,BrowserRouter, Link, Route, Routes, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";


const AppRouter = () => {
  return (
    <Routes>
    <Route path='/about' element={<About />} />
    <Route path='/posts' element={<Posts />} />
    <Route path="/error" element={<Error />} />
    <Route path="/*" element={<Navigate to="/error" replace />} />
</Routes>
  );
};

export default AppRouter;