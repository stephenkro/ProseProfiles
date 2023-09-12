import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { RoutesHandler } from './routes/Routes'


function App() {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
     <RoutesHandler/>
      </header>
    </div>
  );
}

export default App;
