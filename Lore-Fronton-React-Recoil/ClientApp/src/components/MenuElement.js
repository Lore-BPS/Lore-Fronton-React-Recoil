import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';


export default class MenuElement extends Component {
    static displayName = MenuElement.name;

    render() {
        return (
            <li>
                <Container>
                    {this.props.children}
                </Container>
            </li>
        );
    }
}