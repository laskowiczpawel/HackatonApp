import React from "react";
import {
  Container,
  Core,
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4
} from "./MainFrame-styles";
import { getDataAboutCountry } from "./workWithJSON";
import { Link } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

export default class MainFrame extends React.Component {
  constructor(props) {
    super(props);
    const countryInfo = getDataAboutCountry(this.props.match.params.country);
    this.state = {
      country: this.props.match.params.country,
      data: countryInfo ? countryInfo : null,
      grid1: "visible",
      grid2: "visible",
      grid3: "visible",
      grid4: "visible"
    };
    this.checkUnswers = this.checkUnswers.bind(this);
  }



  checkUnswers(rightUnswers){
    switch (rightUnswers){
      case 4:
      this.setState ({
          grid1: "hidden"
      });
          break;
      case 8:
        this.setState({
          grid2: "hidden"
        });
          break;
      case 12:
        this.setState({
          grid3: "hidden"
        });
          break;
      case 16:
        this.setState({
          grid4: "hidden"
        });
          break;
      default:
    }
  }

  render() {
    if (!this.state.data)
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <p>no record for this country :C </p>
          <Link to={`/`}>Go back</Link>
        </div>
      );

    return (
      <Container>
        <GridContainer>
          <GridItem1 background={this.state.data.places[2].img} visible = {this.state.grid1}>
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
          <GridItem2 background={this.state.data.kitchen[0].img} visible={this.state.grid2}>
            <div className="kitchen">
              <h2>{this.state.data.kitchen[0].name}</h2>
              {this.state.data.kitchen[0].description}
              <br />
            </div>
            <div className="white-front" />
          </GridItem2>
          <GridItem3 background={this.state.data.places[0].img} visible={this.state.grid3}>
            <div className="place">
              <h2>{this.state.data.places[0].name}</h2>
              {this.state.data.places[0].description}
              <br />
            </div>
            <div className="white-front" />
          </GridItem3>
          <GridItem4 background={this.state.data.places[1].img} visible={this.state.grid4}>
            <div className="place">
              <h2>{this.state.data.places[1].name}</h2>
              {this.state.data.places[1].description}
              <br />
            </div>
            <div className="white-front" />
          </GridItem4>
        </GridContainer>
        <Core>
          <Quiz gameData={this.state.data} onRightAnswer={this.checkUnswers}/>
        </Core>
      </Container>
    );
  }
}
