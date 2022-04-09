import React from 'react';
import './MemoryCard.css';



class MemoryCard extends React.Component {
    
    render () {

        let memoryCardInnerClass = 'MemoryCardInner'

        return(
            <div className='MemoryCard' onClick={this.props.pickCard}>
            <div className={!this.props.isFlipped ? memoryCardInnerClass : 'MemoryCardInner flipped'}>
            <div className='MemoryCardBack'>
                <img src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' alt='DC Logo'></img>
            </div>
            <div className='MemoryCardFront'>{this.props.symbol}</div>
            </div>
            </div>
        );
    }
}


export default MemoryCard;