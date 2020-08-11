import React, { Component } from 'react';
import './Menu.css';

export class Admin extends Component {
  static displayName = Admin.name;

render() {
    return (
        <section class="pf-c-nav__section" aria-labelledby="section-title-Administracja">

            <div class="nav-group-heading">
                <h2 class="pf-c-nav__section-title" id="section-title-Administracja">Administracja</h2>
            </div>

            <ul class="pf-c-nav__list">

                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/dashboard">
                        <a href="/dashboard">Panel kontrolny</a>
                    </span>
                </li>

                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/services">
                        <a href="/services">Serwisy</a>
                    </span>
                </li>

            </ul>
        </section>
    )
}
}
