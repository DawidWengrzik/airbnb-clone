import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminPanel from './pages/AdminPanel';
import Dashboard from './pages/AdminPanelSites/Dashboard'; 
import Login from './pages/AdminPanelSites/Login';
import Register from './pages/AdminPanelSites/Register';
import AirbnbContent from './pages/AirbnbContent';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={<AirbnbContent />} />
          <Route path='/admin' element={<AdminPanel />}>
            <Route path='' element={<Dashboard />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </div>
    </Router>
    {/*Put the toaster popups*/}
    <ToastContainer />
    </>
  );
}

export default App;
