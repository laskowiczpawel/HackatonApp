import React, { Component } from 'react';
import { GridItem } from './MatchWords_style';

class MakeCards extends Component {
    constructor(props) {
        super(props);
        this.cards = [];
        this.firstAnsw = '';
        this.secondAnsw = '';
        this.firstAnswKey = '';
        this.secondAnswKey = '';
        this.appendCards();
    }

    appendCards() {
        this.props.cards.map((item) => {
        this.cards.push(
            <GridItem>
            <div className="card" key={item.native} onClick={() => this.checkCards(item.native, item.native)}>
                <div className="front">
                    {item.native}
                </div>
                <div className="back">

                </div>
            </div>
            </GridItem>
        );
        this.cards.push(
            <GridItem>
            <div className="card" key={item.abroad} onClick={() => this.checkCards(item.native, item.abroad)}>
                <div className="front">
                    {item.abroad}
                </div>
                <div className="back">

                </div>
            </div>
            </GridItem>
        );        
        });
        this.cards.sort(function () {
            return 1 - Math.random();
        });
    }

    checkCards(event, key) {
        if (this.firstAnsw === '' && this.secondAnsw === '') {
            this.firstAnsw = event;
            this.fristAnswKey = key;
            console.log(this.firstAnswKey);
        } 
        else if ((this.firstAnsw !== '') && (this.secondAnsw === '') && (this.firstAnswKey !== key)) {
            console.log(event);
            this.secondAnsw = event;
            this.secondAnswKey = key;
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