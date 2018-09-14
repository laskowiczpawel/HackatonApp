import React, { Component } from 'react';

class MakeCards extends Component {
    constructor(props) {
        super(props);
        this.cards = [];
        this.firstAnsw = '';
        this.secondAnsw = '';
        this.appendCards();
    }

    appendCards() {
        this.props.cards.map((item) => {
        this.cards.push(
            <div id={item.native} className="card" key={item.native} onClick={() => this.checkCards(item.native)}>
                <div className="front">
                    {item.native}
                </div>
                <div className="back">

                </div>
            </div>
        );
        this.cards.push(
            <div id={item.native} className="card" key={item.abroad} onClick={() => this.checkCards(item.native)}>
                <div className="front">
                    {item.abroad}
                </div>
                <div className="back">

                </div>
            </div>
        );        
        });
        this.cards.sort(function () {
            return 1 - Math.random();
        });
    }

    checkCards(event) {
        if (this.firstAnsw === '' & this.secondAnsw === '') {
            this.firstAnsw = event;
        } 
        else if (this.firstAnsw != '' & this.secondAnsw === '') {
            this.secondAnsw = event;
        }
        else {
            if (this.firstAnsw === this.secondAnsw) {
                console.log('correct answ');
            } else {
                console.log('wrong answer');
                this.firstAnsw = '';
                this.secondAnsw = '';
            }
        }
    }

    render() {
        return (
            <div className="Grid">
                {this.cards}
            </div>    
        )
    }
}

export default MakeCards;