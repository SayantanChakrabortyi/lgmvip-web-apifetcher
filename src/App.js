import React from 'react';
import './App.css';
import Navbar from './Elements/navbar';
import LoadUser from './Elements/loadUser';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <LoadUser/>
      </div>
    </div>
  );
}

export default App;

