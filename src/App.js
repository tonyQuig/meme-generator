import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {
  return(
    <main>
      <Header />
      <MemeGenerator />
    </main>
  )
}

export default App;
