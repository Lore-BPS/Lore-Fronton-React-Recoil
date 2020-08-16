import React, { Component } from 'react';
import './Menu/Menu.css';

export default class Processes extends Component {
    static displayName = Processes.name;

    render() {
        return (
            <section>
                <div>
                    <h2>Procesy</h2>
                </div>
                <ul>
                    <li>
                        <span>
                            <a href="/updates">PlaceHolder</a></span>
                    </li>
                    <li>
                        <span>
                            <a href="/apps">Aplikacje</a>
                        </span>
                    </li>
                </ul>
            </section>
        )
    }
}
