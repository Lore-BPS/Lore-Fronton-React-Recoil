import React, { Component } from 'react';
import './Menu.css';

export class Tools extends Component {
  static displayName = Tools.name;

render() {
    return (
        <section class="pf-c-nav__section" aria-labelledby="section-title-System">
            <div class="nav-group-heading">
                <h2 class="pf-c-nav__section-title" id="section-title-System">System</h2>
            </div>

            <ul class="pf-c-nav__list">
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link pf-m-current" data-for="/system">
                        <a href="/system">Przegląd</a>
                    </span>
                </li>
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/system/logs">
                        <a href="/system/logs">Dzienniki</a>
                    </span>
                </li><li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/storage">
                        <a href="/storage">Przechowywanie danych</a>
                    </span>
                </li><li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/network">
                        <a href="/network">Sieć</a>
                    </span>
                </li>
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/podman">
                        <a href="/podman">Kontenery Podman</a>
                    </span>
                </li>
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/machines">
                        <a href="/machines">Maszyny wirtualne</a>
                    </span>
                </li>
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/users">
                        <a href="/users">Konta</a>
                    </span>
                </li>
                <li class="pf-c-nav__item nav-item">
                    <span class="pf-c-nav__link" data-for="/system/services">
                        <a href="/system/services">Usługi</a>
                    </span>
                </li>
            </ul>
        </section>
    )
}
}
