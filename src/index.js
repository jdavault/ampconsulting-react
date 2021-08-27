import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css"
import App from "./components/App"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Services from "./components/Services"
import MainNavbar from "./components/MainNavbar"
import Footer from "./components/Footer"

import "bootstrap/dist/css/bootstrap.min.css"

const Root = () => (
  <Router>
    <React.Fragment>
      <MainNavbar />
      <Switch>
        <Route component={AboutUs} path="/about" />
        <Route component={ContactUs} path="/contact" />
        <Route component={Services} path="/services" />
        <Route component={App} exact path="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
)
ReactDOM.render(<Root />, document.getElementById("root"))
