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
     <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
      <div>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      </div>
    </div>
  );
}

export default App;
