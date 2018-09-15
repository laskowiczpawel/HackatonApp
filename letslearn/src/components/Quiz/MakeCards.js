import React, { Component } from 'react';
import { GridItem, GridArea } from './MatchWords_style';
import MakeCardItem from './MakeCardItem';

class MakeCards extends Component {
    constructor(props) {
        super(props);
        this.cards = [];
        this.firstAnsw = '';
        this.secondAnsw = '';
        this.firstAnswKey = '';
        this.secondAnswKey = '';
        this.correctAnswers = 0;
        this.state = { 
            isToggleOn: true,
            resetToogle: false
        };
        this.appendCards();
    }

    appendCards() {
        this.props.cards.map((item) => {
            this.cards.push(
            <GridItem>
                <MakeCardItem name={item.native} diff={item.native} toggleOn={() => this.checkCards(item.native, item.native)} />
            {/* <div className="card" key={item.native} style={style} onClick={() => this.checkCards(item.native, item.native)}>
                <div className="front">
                    {item.native}
                </div>
                <div className="back">

                </div>
            </div> */}
            </GridItem>
        );

        this.cards.push(
            <GridItem>
                <MakeCardItem name={item.abroad} diff={item.native} toggleOn={() => this.checkCards(item.native, item.abroad)} />
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
            this.compareAnswers();
        }
        else {
            this.compareAnswers();
        }
    }

    compareAnswers() {
        if (this.firstAnsw === this.secondAnsw) {
            console.log('correct answ');
            this.correctAnswers += 2;
            console.log(this.correctAnswers);
            this.firstAnsw = '';
            this.secondAnsw = '';
            this.secondAnswKey = '';
            this.firstAnswKey = '';
        } else {
            console.log('wrong answer');
            this.firstAnsw = '';
            this.secondAnsw = '';
            this.secondAnswKey = '';
            this.firstAnswKey = '';
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