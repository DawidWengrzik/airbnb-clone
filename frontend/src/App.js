import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashobard from './features/pages/Dashobard';
import Login from './features/pages/Login';
import Register from './features/pages/Register';
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
    </>
  );
}

export default App;
