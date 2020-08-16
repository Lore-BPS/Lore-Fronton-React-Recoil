import React, { Component } from 'react';
import { Container } from 'reactstrap';
//import { NavMenu } from './NavMenu';
import { Menu } from './Menu/Menu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Menu />
            <Container className="float-right col-10 mx-auto">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
