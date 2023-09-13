import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { RoutesHandler } from './routes/Routes'


function App() {
  return (
    <div className="App">
        <Navbar/>
     <div>
     <RoutesHandler/>
     </div>
    </div>
  );
}

export default App;
