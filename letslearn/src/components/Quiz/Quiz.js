import React, { Component } from 'react'
import MakeCards from './MakeCards';
import { MatchWordsC } from './MatchWords_style';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        // definicja kard
        this.wordsList = this.props.gameData.words;
        console.log(this.wordsList);

        this.gameList = [];
        this.nativeLang = [];
        this.abroadLang = [];
        this.selectTen(this.wordsList);
    }

    selectTen(list) {
        this.gameList = list.concat(list).sort(function () {
            return 0.5 - Math.random();
        }).slice(0, 8);
    }

    render() {
        return (
            <div>
                <MatchWordsC>
                    <MakeCards cards={this.gameList} onRightAnswer = {this.props.onRightAnswer} />
                </MatchWordsC>
            </div>
        )
    }
}