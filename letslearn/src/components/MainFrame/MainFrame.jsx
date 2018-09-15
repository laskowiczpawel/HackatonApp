import React from 'react'
import {
  Container,
  Core,
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4
} from "./MainFrame-styles";
import {getDataAboutCountry} from "./workWithJSON";


//this.props.match.params.counntry

export default class MainFrame extends React.Component{
    constructor(props){
        super(props);
        const countryInfo = getDataAboutCountry(this.props.match.params.country);
        this.state = {            
            country: this.props.match.params.country,
            data: countryInfo?countryInfo:null 
        }
        console.log(this.state.data);
    }

    render(){
        if(!this.state.data)
            return "";

        return <Container>
            <GridContainer>
              <GridItem1 background={this.state.data.places[2].img}>
                <div className="information">
                  <h2>{this.state.country}</h2>
                  Stolica: {this.state.data.information.capital}
                  <br />
                  Język: {this.state.data.information.language}
                  <br />
                  Powierzchnia: {this.state.data.information.area}
                  <br />
                  Populacja: {this.state.data.information.population}
                  <br />
                </div>
                <div className="white-front" />
              </GridItem1>
              <GridItem2 background={this.state.data.kitchen[0].img}>
                <div className="kitchen">
                  <h2>{this.state.data.kitchen[0].name}</h2>
                  {this.state.data.kitchen[0].description}
                  <br />
                </div>
                <div className="white-front" />
              </GridItem2>
              <GridItem3 background = {this.state.data.places[0].img}>
                <div className="place">
                  <h2>{this.state.data.places[0].name}</h2>
                  {this.state.data.places[0].description}
                  <br />
                </div>
                <div className="white-front" />
              </GridItem3>
              <GridItem4>
                <div className="white-front" />
              </GridItem4>
            </GridContainer>
            <Core />
          </Container>;
    }
}
