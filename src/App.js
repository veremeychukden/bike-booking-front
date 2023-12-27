import Header from './components/header/Header';
import './App.css';
import Bike from './components/bike/Bike';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  return (
    <div>
      <Header />
      <Bike />
    </div>
  );
}

export default App;
