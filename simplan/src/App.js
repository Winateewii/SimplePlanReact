import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignInLink from './components/layout/SignInLink'

function App() {
  return (

    <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
    </BrowserRouter>
  );
}

export default App;
