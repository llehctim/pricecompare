import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class PriceCompareSearch extends Component {

  render() {
    return (

      <DropdownButton
        bsStyle='Default'
        title='Select a Category'
      >
        <MenuItem eventKey="1">Yogurt</MenuItem>
        <MenuItem eventKey="2">Applesauce</MenuItem>
        <MenuItem eventKey="3">Milk</MenuItem>
      </DropdownButton>

      //Table goes here (another component)

      //Add button goes here

    );
  }

}

export default PriceCompareSearch;
