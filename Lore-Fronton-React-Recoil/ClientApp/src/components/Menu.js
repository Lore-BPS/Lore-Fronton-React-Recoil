import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarBrand, Navbar, NavDropdown, Container } from 'reactstrap';
import './Menu.css';
import '../../public/logoLore.svg';
import { Admin } from './Admin.js'
import { Tools } from './Tools.js'

export class Menu extends Component {
    static displayName = Menu.name;

    constructor(props) {
        super(props);
        this.state = {
            isNavExpanded: false
        };

        this.setIsNavExpanded = (isNavExpanded) => {
            this.setState({ isNavExpanded: isNavExpanded });
        }

        //this.handleClick = (e) => {
        //    if (this.node.contains(e.target)) {
        //        // if clicked inside menu do something
        //    } else {
        //        // If clicked outside menu, close the navbar.
        //        this.setState({ isNavExpanded: false });
        //    }
        //}
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }





    render() {
        return (
            <div id="nav-system" className="area-ct-subnav nav-system-menu sidebar float-left mx-auto">
                <NavbarBrand>
                    <img id="lore-logo" src="logoLore.svg" alt="Logo Lore" className="text-center float-center flex align-top" />
                </NavbarBrand>
                <nav id="host-apps" className="host-apps">
                    <div className="has-feedback search">
                        <input id="menu-search" className="filter-menus form-control" type="search" placeholder="Szukaj" aria-label="Szukaj" value="" />
                            <span className="fa fa-search form-control-feedback">
                            </span>
                            </div>
                        <nav className="pf-c-nav" aria-label="Global" data-ouia-component-type="PF4/Nav" data-ouia-safe="true" data-ouia-component-id="10">
                            <Admin />
                            <Tools />
                        <section className="pf-c-nav__section" aria-labelledby="section-title-Narzędzia">
                            <div className="nav-group-heading">
                                <h2 className="pf-c-nav__section-title" id="section-title-Narzędzia">Narzędzia</h2>
                            </div>
                            <ul className="pf-c-nav__list">
                                <li className="pf-c-nav__item nav-item">
                                <span className="pf-c-nav__link" data-for="/updates">
                                    <a href="/updates">Aktualizacje oprogramowania</a></span>
                                </li>
                                <li className="pf-c-nav__item nav-item">
                                    <span className="pf-c-nav__link" data-for="/apps">
                                        <a href="/apps">Aplikacje</a>
                                    </span>
                                </li>
                                <li className="pf-c-nav__item nav-item">
                                    <span className="pf-c-nav__link" data-for="/selinux/setroubleshoot">
                                        <a href="/selinux/setroubleshoot">SELinux</a>
                                    </span>
                                </li>
                                <li className="pf-c-nav__item nav-item">
                                    <span className="pf-c-nav__link" data-for="/system/terminal">
                                        <a href="/system/terminal">Terminal</a>
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </nav></nav></div>

        )
    }
}

