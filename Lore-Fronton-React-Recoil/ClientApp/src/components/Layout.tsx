import React, { Component } from 'react';
//import { Container } from 'bootstrap-';
import { TopMenu } from './Menu/TopMenu';
import { Menu } from './Menu/Menu';

export default class Layout extends Component {
    static displayName = Layout.name;



    forceUpdate: any;
    props: any;
    state: any;
    refs: any;
    context: any;
    setState: any;


  render () {
    return (
        <div>
            <TopMenu />
            <Menu />
            <div className="float-right col-10 mx-auto">
          {this.props.children}
        </div>
      </div>
    );
  }
}
