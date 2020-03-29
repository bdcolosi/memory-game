import React, {Component} from 'react';
import MemoryCard from "./components/MemoryCard"

import './App.css';

function generateDeck(){
const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
let deck = []
for(let i=0; i<16; i++) {
 deck.push({
   isFlipped:false,
   symbol: symbols[i%8]
 })}
 shuffle(deck)
 console.log("deck", deck)
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

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {
      deck:generateDeck(),
      pickedcards:[]  
  };
  }

  pickCard = (cardIndex) => {
    if(this.state.deck[cardIndex].isFlipped === true ) {
      return;
    
  }
  const newPickedCards = [];
  const cardToFlip = {...this.state.deck[cardIndex]};
  cardToFlip.isFlipped = true;
  const newDeck = this.state.deck.map((card,index) => {
    if (cardIndex === index){
      return cardToFlip 
    }
    return card
  });
  if (newPickedCards.length === 2) {
    const card1Index = newPickedCards[0];
    const card2Index = newPickedCards[1];
    if(newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
      setTimeout(this.unFlippedCards.bind(this,card1Index, card2Index), 50)
    };

  }
  this.setState({deck:newDeck,pickedcards:newPickedCards})
};

unFlippedCards(card1Index,card2Index) {
  const card1 = {...this.state.deck[card1Index]};
  const card2 = {...this.state.deck[card2Index]};
  card1.isFlipped = false;
  card2.isFlipped = false;

  const newDeck = this.state.deck.map((card,index) => {
    if(card1Index === index) {
      return card1
    }
    if(card2Index === index) {
      return card2
    }
    return card 
  });
  
  this.setState({deck:newDeck});
};




  
  render(){
    let cardsJSX = this.state.deck.map((card,index) => {
      return (<MemoryCard symbol={card.symbol} isFlipped = {card.isFlipped} key = {index} pickCard = {this.pickCard.bind(this,index)}/>)

        
        
    })
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">Memory Game</div>
        <div className="Subtitle">Match cards to win</div>
      </header>
     <div>
      {cardsJSX.slice(0,4)}
      </div>
      <div>
      {cardsJSX.slice(4,8)}
      </div>
      <div>
     {cardsJSX.slice(8,12)}
      </div>
      <div>
      {cardsJSX.slice(12,16)}
      </div>
    </div>
  )
}
}




