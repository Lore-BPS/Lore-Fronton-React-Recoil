import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Admin extends Component {
  static displayName = Admin.name;

render() {
        return (
            <section class="pf-c-nav__section" aria-labelledby="section-title-Administracja">
                <div class="nav-group-heading">
                    <h2 class="pf-c-nav__section-title" id="section-title-Administracja">Administracja</h2>
                </div>
                <ul class="pf-c-nav__list">
                    <li class="nav-item">
                        <span data-for="/dashboard">
                            <a href="/dashboard">Panel kontrolny</a>
                        </span>
                    </li>
                    <li class="nav-item">
                        <span class="pf-c-nav__link" data-for="/services">
                            <a href="/services">Serwisy</a>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span data-for="/updates">
                            <a href="/updates">Aktualizacje</a></span>
                    </li>
                    <li>
                        <span>
                            <a href="/security">Bezpieczeństwo</a>
                        </span>
                    </li>
                </ul>
            </section>
        )
    }
}
