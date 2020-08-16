import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Tools extends Component {
  static displayName = Tools.name;

render() {
    return (
        <section class="pf-c-nav__section" aria-labelledby="section-title-Narzędzia">

            <div class="nav-group-heading">
                <h2 class="pf-c-nav__section-title" id="section-title-Narzędzia">Narzędzia</h2>
            </div>

            <ul class="pf-c-nav__list">

                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/dashboard">
                        <a href="/dashboard">Panel kontrolny</a>
                    </span>
                </li>
                <li className="pf-c-nav__item nav-item">
                    <span className="pf-c-nav__link" data-for="/designer">
                        <a href="/designer">Designer</a>
                    </span>
                </li>

            </ul>
        </section>
        )
    }
}
