import React from 'react';
import MemoryCard from "./components/MemoryCard"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Memory Game</div>
        <div className="Subtitle">Match cards to win</div>
      </header>
      <MemoryCard/>
    </div>
  );
}

export default App;
