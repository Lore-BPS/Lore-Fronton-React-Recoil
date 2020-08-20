import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    static displayName = Footer.name;
    
    render () {
      return (
        <footer id="footer">
            <br />by Maciej Jarzębkowski  <br /> @2020, GNU GPL v3
        </footer>
      );
    }
  }
  