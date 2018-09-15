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
    }

    render(){
        if(!this.state.data)
            return "";

        return <Container>
            <GridContainer>
                <GridItem1>      
                    <div className="information"><h3>{this.state.country}</h3><br />
                        Stolica: {this.state.data.information.capital}<br />
                        Język: {this.state.data.information.language}<br />
                        Powierzchnia: {this.state.data.information.area}<br />
                        Populacja: {this.state.data.information.population}<br />
                    </div>                   
                    <div className = "white-front"></div>
                </GridItem1>
                <GridItem2>    
           
                    <div className= "white-front"></div>
                </GridItem2>
                <GridItem3>
                    <div className= "white-front"></div>
                </GridItem3>
                <GridItem4>
                    <div className= "white-front"></div>
                </GridItem4>
            </GridContainer>            
            <Core>          
            </Core>
          </Container>;
    }
}
