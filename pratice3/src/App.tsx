import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './AllRoute/Navbar';
import MainRoute from './AllRoute/MainRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <MainRoute/>
    </div>
  );
}

export default App;
