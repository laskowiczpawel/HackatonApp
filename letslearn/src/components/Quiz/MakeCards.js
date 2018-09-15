import React, { Component } from 'react';
import { GridItem, GridArea } from './MatchWords_style';

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
            this.firstAnswKey = key;
            this.firstAnsw = event; 
            console.log(this.firstAnsw)
        } 
        else if ((this.firstAnsw !== '') && (this.secondAnsw === '') && (this.firstAnswKey !== key) && (this.secondAnswKey === '')) {
            this.secondAnsw = event;
            this.secondAnswKey = key;
            console.log(this.secondAnsw);
        }
        else {
            if (this.firstAnsw === this.secondAnsw) {
                console.log('correct answ');
            } else {
                console.log('wrong answer');
                this.firstAnsw = '';
                this.secondAnsw = '';
                this.secondAnswKey = '';
                this.firstAnswKey = '';
            }
        }
    }

    render() {
        return (
            <GridArea>
                {this.cards}
            </GridArea>   
        )
    }
}

export default MakeCards;