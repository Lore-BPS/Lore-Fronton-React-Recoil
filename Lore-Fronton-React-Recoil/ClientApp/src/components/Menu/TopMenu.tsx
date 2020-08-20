import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TopMenu.css';


import AuthorizeRoute from './../api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './../api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './../api-authorization/ApiAuthorizationConstants';


export class TopMenu extends Component {
  static displayName = TopMenu.name;


  forceUpdate: any;
  props: any;
  state: any;
  refs: any;
  context: any;
  setState: any;

  // constructor (props) {
  //   super(props);

  //   this.toggleNavbar = this.toggleNavbar.bind(this);
  //   this.state = {
  //     collapsed: true
  //   };
  // }

  // toggleNavbar () {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarToggler /* onClick={this.toggleNavbar} */ className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" /*isOpen={!this.state.collapsed}*/ navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
