
import React, { Component } from "react"
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from "react-simple-maps"
import { Motion, spring } from "react-motion"
import map from "../../static/world-50m.json"
import { wrapperStyles, cities } from "./config";
import { Modal, Button } from "antd";
import { Controls } from "./styled"

import { Link } from "react-router-dom";
import { Tooltip } from 'antd';

class AnimatedMap extends Component {
  constructor() {
    super();
    this.state = {
      center: [0, 20],
      zoom: 0.7,
      visible: false,
      country: null
    };
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleOk = e => {
      console.log(e)
  }


  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleZoomIn() {
    this.setState({
      zoom: this.state.zoom * 2
    });
  }
  handleZoomOut() {
    this.setState({
      zoom: this.state.zoom / 2
    });
  }
  handleCityClick(city) {
    this.setState({
      zoom: 2,
      center: city.coordinates
    });
  }
  handleReset() {
    this.setState({
      center: [0, 20],
      zoom: 1
    });
  }
  countryClick = e => {
      this.setState({
          visible: true,
          country: e.properties.name
      });
  }
  render() {
    return (
      <div style={wrapperStyles}>
          <Modal
            title={this.state.country}
            width={500}
            visible={this.state.visible}
            footer={null}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
                    <p>Do you wany to start a quiz about {this.state.country}?</p>
                    <Link to={`/quiz/${this.state.country}`}>Begin quiz</Link>

            </Modal>
        <Controls>
            <button onClick={this.handleZoomIn}>{"Zoom in"}</button>
            <button onClick={this.handleZoomOut}>{"Zoom out"}</button>
            <button onClick={this.handleReset}>{"Reset"}</button>
        </Controls>

        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20
          }}
          style={{
            zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
            x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
            y: spring(this.state.center[1], { stiffness: 210, damping: 20 })
          }}
        >
          {({ zoom, x, y }) => (
            <ComposableMap
              projectionConfig={{ scale: 205 }}
              width={980}
              height={551}
              style={{
                width: "100%",
                height: "auto"
              }}
            >
              <ZoomableGroup center={[x, y]} zoom={zoom}>
                <Geographies geography={map}>
                  {(geographies, projection) =>
                    geographies.map(
                      (geography, i) =>
                        geography.id !== "010" && (
                          <Tooltip title={geography.properties.name}>
                            <Geography
                              key={i}
                              onClick={e => this.countryClick(geography)}
                              geography={geography}
                              projection={projection}
                              style={{
                                default: {
                                  fill: "#ECEFF1",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.75,
                                  outline: "none"
                                },
                                hover: {
                                  fill: "#CFD8DC",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.75,
                                  outline: "none"
                                },
                                pressed: {
                                  fill: "#FF5722",
                                  stroke: "#607D8B",
                                  strokeWidth: 0.75,
                                  outline: "none"
                                }
                              }}
                            />
                          </Tooltip>
                        )
                    )
                  }
                </Geographies>
                <Markers>
                  {cities.map((city, i) => (
                    <Marker
                      key={i}
                      marker={city}
                      onClick={this.handleCityClick}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={6}
                        fill="#FF5722"
                        stroke="#DF3702"
                      />
                    </Marker>
                  ))}
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          )}
        </Motion>
      </div>
    );
  }
}

export default AnimatedMap
