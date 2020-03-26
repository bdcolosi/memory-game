import React, {Component} from 'react';
import MemoryCard from "./components/MemoryCard"

import './App.css';

function generateDeck(){
const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
let deck = []
for(let i=0; i< 16; i++) {
 deck.push({
   isFlipped:false,
   symbols: symbols[i%8]
 })
 shuffle(deck)
}
return deck 
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      deck:generateDeck(),
      pickedcards:[]  
  }
  }
  render(){
    const cardsJSX = this.state.deck.map((card,index) => {
      return <MemoryCard/>
    })
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Memory Game</div>
        <div className="Subtitle">Match cards to win</div>
      </header>
     <div>
      {cardsJSX(0,4)}
      </div>
      <div>
      {cardsJSX(4,8)}
      </div>
      <div>
     {cardJSX(8,12)}
      </div>
      <div>
      {cardJSX(12,16)}
      </div>
    </div>
  )
}
}


export default App;
