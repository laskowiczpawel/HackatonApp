import React, { Component } from 'react'
import MakeCards from './MakeCards';
import { MatchWordsC } from './MatchWords_style';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        // definicja kard
        this.wordsList = [
            {
                "abroad": "Table",
                "native": "Stół"
            },
            {
                "abroad": "Menu",
                "native": "Karta"
            },
            {
                "abroad": "Departure",
                "native": "Wylot"
            },
            {
                "abroad": "Arrival",
                "native": "Przylot"
            },
            {
                "abroad": "Luggage",
                "native": "Bagaż"
            },
            {
                "abroad": "Delay",
                "native": "Opóźnienie"
            },
            {
                "abroad": "Bill",
                "native": "Rachunek"
            },
            {
                "abroad": "Hello",
                "native": "Cześć"
            },
            {
                "abroad": "toothpick",
                "native": "Wykałaczka"
            },
            {
                "abroad": "Waiter",
                "native": "Kelner"
            },
            {
                "abroad": "Underground",
                "native": "Metro"
            },
            {
                "abroad": "Ticket",
                "native": "Bilet"
            },
            {
                "abroad": "Stop",
                "native": "Przystanek"
            },
            {
                "abroad": "Seat",
                "native": "Siedzenie"
            },
            {
                "abroad": "Dish",
                "native": "Danie"
            },
            {
                "abroad": "Plate",
                "native": "Talerz"
            },
            {
                "abroad": "Knife",
                "native": "Nóż"
            },
            {
                "abroad": "Spoon",
                "native": "Łyżka"
            },
            {
                "abroad": "Place of interest",
                "native": "Atrakcje turystyczne"
            },
            {
                "abroad": "Rower",
                "native": "Bike"
            },
            {
                "abroad": "Podróż",
                "native": "Travel"
            },
            {
                "abroad": "Help",
                "native": "Pomoc"
            },
            {
                "abroad": "River",
                "native": "Rzeka"
            },
            {
                "abroad": "Castle",
                "native": "Zamek"
            },
            {
                "abroad": "Thank you",
                "native": "Dziękuję"
            },
            {
                "abroad": "Question",
                "native": "Zapytanie"
            },
            {
                "abroad": "Breakfast",
                "native": "Śniadanie"
            },
            {
                "abroad": "Dinner",
                "native": "Obiad"
            },
            {
                "abroad": "Supper",
                "native": "Kolacja"
            },
            {
                "abroad": "Time",
                "native": "Czas"
            },
            {
                "abroad": "Restaurant",
                "native": "Restauracja"
            },
            {
                "abroad": "Kitchen",
                "native": "Kuchnia"
            }
        ];

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
                {this.props.match.params.country}
                <MatchWordsC>
                        <MakeCards cards={this.gameList} />
                </MatchWordsC>
            </div>
        )
    }
}