import logo from './logo.svg';
import React, {useState} from 'react';
import Login from "../src/pages/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='login' exact element={< Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
