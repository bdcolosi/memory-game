import React, {Component} from 'react';

import "./MemoryCard.css";

class MemoryCardBack extends Component {
    render() {
        return (
            <div className="MemoryCard">
            <div className="MemoryCardInner">
            <div className="MemoryCardBack">
                <img class="image" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
            </div>
            <div className="MemoryCardFront">
               ∆ 
            </div>
            </div>
            </div>
        )
    }
}

export default MemoryCardBack;