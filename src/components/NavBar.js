import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import itii from "../img/itii.png";
import polytech from "../img/polytechnice.png";
import { NavLink as RRNavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

        <Navbar color="light" light expand="md">
          <Container>
          <NavbarBrand>
            {" "}
            <img src={itii} alt="logo-itii" height="75" width="75" />
          </NavbarBrand>
          <NavbarBrand href="http://www.polytech.unice.fr/">
            {" "}
            <img src={polytech} alt="logo-polytech" height="75" width="200" />
          </NavbarBrand>
          </Container>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Accueil" tag={RRNavLink}>
                  Accueil
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Dashboard" tag={RRNavLink}>
                  Dashboard
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

    );
  }
}

export default NavBar;
