import React from 'react';
import logo from './logo.svg';
import './App.css';
import Side from './components/Sidebar';
import {NavBar} from './components/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Side/>
          
    </div>
  );
}

export default App;
