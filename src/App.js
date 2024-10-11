import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import CourseDetails from './pages/CourseDetails';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Trainers from './pages/Trainers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
      </BrowserRouter>
    );
}

export default App;