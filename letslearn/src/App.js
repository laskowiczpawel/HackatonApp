
import React, { Component, Fragment } from "react"
import Map from "./components/Map/Map"
import MainFrame from "./components/MainFrame/MainFrame"
import Quiz from "./components/Quiz/Quiz";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Map} />
        <Route exact path='/quiz/:country' component={MainFrame} />
      </Switch>
     </BrowserRouter>
    )
  }
}

export default App
