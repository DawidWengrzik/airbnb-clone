import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashobard from './pages/Dashobard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' exact element={ <Dashobard />}></Route>
          <Route path='/login' element={ <Login/> }></Route>
          <Route path='/register' element={ <Register/> }></Route>
        </Routes>
      </div>
    </Router>
    {/*Put the toaster popups*/}
    <ToastContainer />
    </>
  );
}

export default App;
