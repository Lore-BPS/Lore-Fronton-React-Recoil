import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.css';

export class Menu extends Component {
    static displayName = Menu.name;

    render() {
        return (
    <header>
      <p>Link based</p>
      <Nav vertical>
        <NavLink href="#">Admin</NavLink> 
        <NavLink href="#">Designer</NavLink> 
        <NavLink href="#">Processes</NavLink> 
        <NavLink href="#">Link</NavLink> 
        <NavLink href="#">Link</NavLink> 
        <NavLink href="#">Another Link</NavLink> 
        <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </header>
        )
    }
}

