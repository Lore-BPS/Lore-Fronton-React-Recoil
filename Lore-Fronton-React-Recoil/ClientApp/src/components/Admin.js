import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Admin extends Component {
  static displayName = Admin.name;

render() {
        return (
            <section>
                <div >
                    <h2 id="admin">Administracja</h2>
                </div>
                <ul>
                    <li>
                        <span>
                            <a href="/dashboard">Panel kontrolny</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <a href="/services">Serwisy</a>
                        </span>
                    </li>
                    <li>
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
