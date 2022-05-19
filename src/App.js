import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import Exercise6 from './pages/Exercise6';
import Exercise7 from './pages/Exercise7';
import Exercise8 from './pages/Exercise8';
import Exercise9 from './pages/Exercise9';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/Exercise1' element={<Exercise1/>} />
      <Route path='/Exercise2' element={<Exercise2/>} />
      <Route path='/Exercise3' element={<Exercise3/>} />
      <Route path='/Exercise4' element={<Exercise4/>} />
      <Route path='/Exercise5' element={<Exercise5/>} />
      <Route path='/Exercise6' element={<Exercise6/>} />
      <Route path='/Exercise7' element={<Exercise7/>} />
      <Route path='/Exercise8' element={<Exercise8/>} />
      <Route path='/Exercise9' element={<Exercise9/>} />
    </Routes>
  </Router>
  );
}

export default App;


