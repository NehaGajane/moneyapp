import './App.css';
import DashboardPage from './pages/DashboardPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
