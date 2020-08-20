import React, { Component, MouseEventHandler  } from 'react';
//import { Nav, NavItem, NavLink, NavbarBrand, Navbar, NavDropdown, Container } from 'reactstrap';
import './Menu.css';
import '../../public/logoLore.svg';
//import { MenuElement } from './MenuElement.js'

import Admin from '../Admin'
import Tools from '../Tools'
import Processes from '../Processes'
import Footer from './Footer'

type Props = {
    // onClick: MouseEventHandler,
    text: string,
  }




export class Menu extends Component {
    static displayName = Menu.name;

    
    
    forceUpdate: any;
    props: any;
    state: any;
    refs: any;
    context: any;
    setState: any;


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isNavExpanded: false
    //     };

    //     this.setIsNavExpanded = (isNavExpanded) => {
    //         this.setState({ isNavExpanded: isNavExpanded });
    //     }

        //this.handleClick = (e) => {
        //    if (this.node.contains(e.target)) {
        //        // if clicked inside menu do something
        //    } else {
        //        // If clicked outside menu, close the navbar.
        //        this.setState({ isNavExpanded: false });
        //    }
        //}
    // }
    // componentDidMount() {
    //     document.addEventListener('click', this.handleClick, false);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClick, false);
    // }

    render() {
        return (
            <div id="nav-system" className="col-2">
                <div id="NavBrand">
                    <img id="lore-logo" src="logoLore.svg" alt="Logo Lore"/>
                </div>
                <nav>
                    <div>
                        <input id="menu-search" className="filter-menus form-control" type="search" placeholder="Szukaj" defaultValue="" />
                    </div>
                    <nav>
                        <Admin />
                        <Tools />
                        <Processes /> 
                </nav></nav>
                    <Footer />
                </div>

        )
    }
}

