import React, { Component } from 'react';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class PriceCompareHeader extends Component {

  render() {
    return (

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Pri&cent;e Compare</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Edit Categories
            </NavItem>
            <NavItem eventKey={2} href="#">
              Edit Stores
            </NavItem>
            <NavItem eventKey={2} href="#">
              Edit Units
            </NavItem>
            <NavItem eventKey={2} href="#">
              Edit Profile
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }

}

export default PriceCompareHeader;
