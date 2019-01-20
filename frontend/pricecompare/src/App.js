import React, { Component } from 'react';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import PriceCompareHeader from './price_compare_header';
import PriceCompareSearch from './price_compare_search';


class App extends Component {
  render() {
    return (
      <div className="App">

        <PriceCompareHeader />

        <PriceCompareSearch />

      </div>
    );
  }
}

export default App;
