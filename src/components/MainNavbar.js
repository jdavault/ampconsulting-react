import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { Navbar, NavbarBrand } from "reactstrap"
import "./MainNavbar.css"

export default class MainNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              {" "}
              <FontAwesomeIcon icon={faBookOpen} className="amp-logo" />
              <span className="amp-logo"> AMP </span>
              <span class="amp-home-bg-color amp-home-text">HR Consulting</span>
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}
