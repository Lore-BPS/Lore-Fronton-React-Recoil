import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Tools extends Component {
  static displayName = Tools.name;

render() {
    return (
        <section>

            <div>
                <h2>Narzędzia</h2>
            </div>
            <ul>
                <li>
                    <span>
                        <a href="/dashboard">Panel kontrolny</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="/designer">Designer</a>
                    </span>
                </li>
            </ul>
        </section>
        )
    }
}
