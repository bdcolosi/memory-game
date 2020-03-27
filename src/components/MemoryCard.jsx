import React, {Component} from 'react';

import "./MemoryCard.css";

class MemoryCard extends Component {
    constructor(props) {
        super(props)
        this.state = {isFlipped:false};
    }
    clickHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }
   
        
    render() {        
        let memoryCardInnerClass = "MemoryCardInner"
        if (this.props.isFlipped === true) {
            memoryCardInnerClass =  "MemoryCardInner flipped"
        }
        return (
            <div className="MemoryCard" onClick = {this.clickHandler.bind(this)}>
            <div className={memoryCardInnerClass}>
            <div className="MemoryCardBack">
                <img class="image" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
            </div>
            <div className="MemoryCardFront">
               {this.props.symbol} 
            </div>
            </div>
            </div>
        )
    }
}

export default MemoryCard;