import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Processes extends Component {
    static displayName = Processes.name;

    render() {
        return (
            <section className="pf-c-nav__section" aria-labelledby="section-title-tools">
                <div className="nav-group-heading">
                    <h2 className="pf-c-nav__section-title" id="section-title-tools">Procesy</h2>
                </div>
                <ul className="pf-c-nav__list">
                    <li className="pf-c-nav__item nav-item">
                        <span className="pf-c-nav__link" data-for="/">
                            <a href="/updates">PlaceHolder</a></span>
                    </li>
                    <li className="pf-c-nav__item nav-item">
                        <span className="pf-c-nav__link" data-for="/apps">
                            <a href="/apps">Aplikacje</a>
                        </span>
                    </li>
                </ul>
            </section>
        )
    }
}
