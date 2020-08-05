import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
//import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        return (
            <header>


                <div id="slide-out" class="side-nav sn-bg-4 mdb-sidenav fixed" >
                    <ul class="custom-scrollbar ps ps--active-y" >
                        <li class="logo-sn d-block waves-effect">
                            <div class="text-center">
                                <a class="pl-0" href="/"><img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo" /></a>
                            </div>
                        </li>


                        <li>
                            <form class="search-form" onkeypress="return event.keyCode != 13;" role="search" method="GET" autocomplete="off">
                                <div class="form-group md-form mt-0 d-block waves-light waves-effect waves-light">
                                    <input type="text" class="form-control pb-1 pt-2 mb-0" name="mdw_serach" placeholder="Search" id="mdb_main_search" />
                                    <label for="mdb_main_search" class="sr-only active">Search</label>
                                </div>
                                <div class="dropdown-wrapper"></div>
                            </form>
                        </li>


                        <li>
                            <ul id="side-menu" class="collapsible collapsible-accordion"><li id="menu-item-118678" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-118678"><a class="collapsible-header waves-effect" id="link-menu-item-118678" href="https://mdbootstrap.com/pricing/jquery/pro/"><i class="far fa-gem"></i>MDB Pro</a></li>
                                <li id="menu-item-88068" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-88068"><a class="collapsible-header waves-effect" id="link-menu-item-88068" href="https://mdbootstrap.com/pricing/"><i class="fas fa-gem"></i> Products</a></li>
                                <li id="menu-item-59439" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59439"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-download"></i>Getting Started<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-59452" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home  menu-item-59452"><a class="collapsible-header waves-effect" id="link-menu-item-59452" href="https://mdbootstrap.com/">Home page</a></li>
                                        <li id="menu-item-81400" class="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor  menu-item-81400"><a class="collapsible-header waves-effect" id="link-menu-item-81400" href="https://mdbootstrap.com/docs/jquery/">About MDB</a></li>
                                        <li id="menu-item-44015" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44015"><a class="collapsible-header waves-effect" id="link-menu-item-44015" href="https://mdbootstrap.com/docs/jquery/getting-started/download/">Download</a></li>
                                        <li id="menu-item-59453" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59453"><a class="collapsible-header waves-effect" id="link-menu-item-59453" href="https://mdbootstrap.com/education/bootstrap/quick-start/">Quick start</a></li>
                                        <li id="menu-item-102460" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-102460"><a class="collapsible-header waves-effect" id="link-menu-item-102460" href="https://mdbootstrap.com/docs/jquery/getting-started/installation-guide/">Installation guide</a></li>
                                        <li id="menu-item-111193" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-111193"><a class="collapsible-header waves-effect" id="link-menu-item-111193" href="https://mdbootstrap.com/docs/jquery/getting-started/styles-customization/">Styles customization</a></li>
                                        <li id="menu-item-59445" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59445"><a class="collapsible-header waves-effect" id="link-menu-item-59445" href="https://mdbootstrap.com/education/bootstrap/">Full tutorial</a></li>
                                        <li id="menu-item-116589" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-116589"><a class="collapsible-header waves-effect" id="link-menu-item-116589" href="https://mdbootstrap.com/docs/jquery/getting-started/roadmap/">Roadmap</a></li>
                                        <li id="menu-item-87546" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-87546"><a class="collapsible-header waves-effect" id="link-menu-item-87546" href="https://mdbootstrap.com/cli/">MDB CLI</a></li>
                                        <li id="menu-item-59446" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59446"><a class="collapsible-header waves-effect" id="link-menu-item-59446" href="https://mdbootstrap.com/education/bootstrap/gulp-installation/">Gulp</a></li>
                                        <li id="menu-item-83784" class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-83784"><a class="collapsible-header waves-effect" id="link-menu-item-83784" href="https://mdbootstrap.com/articles/jquery/md-bootstrap-webpack-tutorial/">Webpack</a></li>
                                        <li id="menu-item-81523" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-81523"><a class="collapsible-header waves-effect" id="link-menu-item-81523" href="https://mdbootstrap.com/docs/angular/">MDB Angular</a></li>
                                        <li id="menu-item-81524" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-81524"><a class="collapsible-header waves-effect" id="link-menu-item-81524" href="https://mdbootstrap.com/docs/react/">MDB React</a></li>
                                        <li id="menu-item-81525" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-81525"><a class="collapsible-header waves-effect" id="link-menu-item-81525" href="https://mdbootstrap.com/docs/vue/">MDB Vue</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43620" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43620"><a class="collapsible-header waves-effect arrow-r"><i class="fas  fa-th-large"></i>Layout<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44240" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44240"><a class="collapsible-header waves-effect" id="link-menu-item-44240" href="https://mdbootstrap.com/docs/jquery/layout/overview/">Layout overview</a></li>
                                        <li id="menu-item-44241" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44241"><a class="collapsible-header waves-effect" id="link-menu-item-44241" href="https://mdbootstrap.com/docs/jquery/layout/grid-usage/">Grid usage</a></li>
                                        <li id="menu-item-44242" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44242"><a class="collapsible-header waves-effect" id="link-menu-item-44242" href="https://mdbootstrap.com/docs/jquery/layout/grid-examples/">Grid examples</a></li>
                                        <li id="menu-item-44243" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44243"><a class="collapsible-header waves-effect" id="link-menu-item-44243" href="https://mdbootstrap.com/docs/jquery/layout/media-object/">Media object</a></li>
                                        <li id="menu-item-59009" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59009"><a class="collapsible-header waves-effect" id="link-menu-item-59009" href="https://mdbootstrap.com/docs/jquery/layout/media-queries/">Media queries</a></li>
                                        <li id="menu-item-44245" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44245"><a class="collapsible-header waves-effect" id="link-menu-item-44245" href="https://mdbootstrap.com/docs/jquery/layout/utilities/">Utilities for layout</a></li>
                                        <li id="menu-item-84711" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-84711"><a class="collapsible-header waves-effect" id="link-menu-item-84711" href="https://mdbootstrap.com/docs/jquery/layout/bootstrap-masonry/">Masonry</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43621" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43621"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-object-ungroup"></i>Utilities<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44246" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44246"><a class="collapsible-header waves-effect" id="link-menu-item-44246" href="https://mdbootstrap.com/docs/jquery/utilities/borders/">Borders</a></li>
                                        <li id="menu-item-44247" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44247"><a class="collapsible-header waves-effect" id="link-menu-item-44247" href="https://mdbootstrap.com/docs/jquery/utilities/clearfix/">Clearfix</a></li>
                                        <li id="menu-item-44248" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44248"><a class="collapsible-header waves-effect" id="link-menu-item-44248" href="https://mdbootstrap.com/docs/jquery/utilities/close-icon/">Close icon</a></li>
                                        <li id="menu-item-44249" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44249"><a class="collapsible-header waves-effect" id="link-menu-item-44249" href="https://mdbootstrap.com/docs/jquery/utilities/display/">Display</a></li>
                                        <li id="menu-item-44250" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44250"><a class="collapsible-header waves-effect" id="link-menu-item-44250" href="https://mdbootstrap.com/docs/jquery/utilities/embeds/">Embeds</a></li>
                                        <li id="menu-item-44251" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44251"><a class="collapsible-header waves-effect" id="link-menu-item-44251" href="https://mdbootstrap.com/docs/jquery/utilities/float/">Float</a></li>
                                        <li id="menu-item-44252" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44252"><a class="collapsible-header waves-effect" id="link-menu-item-44252" href="https://mdbootstrap.com/docs/jquery/utilities/flexbox/">Flexbox</a></li>
                                        <li id="menu-item-83980" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-83980"><a class="collapsible-header waves-effect" id="link-menu-item-83980" href="https://mdbootstrap.com/docs/jquery/utilities/horizontal-align/">Horizontal align</a></li>
                                        <li id="menu-item-44253" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44253"><a class="collapsible-header waves-effect" id="link-menu-item-44253" href="https://mdbootstrap.com/docs/jquery/utilities/image-replacement/">Image replacement</a></li>
                                        <li id="menu-item-84319" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-84319"><a class="collapsible-header waves-effect" id="link-menu-item-84319" href="https://mdbootstrap.com/docs/jquery/utilities/overflow/">Overflow</a></li>
                                        <li id="menu-item-44254" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44254"><a class="collapsible-header waves-effect" id="link-menu-item-44254" href="https://mdbootstrap.com/docs/jquery/utilities/position/">Position</a></li>
                                        <li id="menu-item-44255" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44255"><a class="collapsible-header waves-effect" id="link-menu-item-44255" href="https://mdbootstrap.com/docs/jquery/utilities/screenreaders/">Screenreaders</a></li>
                                        <li id="menu-item-44256" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44256"><a class="collapsible-header waves-effect" id="link-menu-item-44256" href="https://mdbootstrap.com/docs/jquery/utilities/sizing/">Sizing</a></li>
                                        <li id="menu-item-44257" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44257"><a class="collapsible-header waves-effect" id="link-menu-item-44257" href="https://mdbootstrap.com/docs/jquery/utilities/spacing/">Spacing</a></li>
                                        <li id="menu-item-85526" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-85526"><a class="collapsible-header waves-effect" id="link-menu-item-85526" href="https://mdbootstrap.com/docs/jquery/utilities/stretched-link/">Stretched link</a></li>
                                        <li id="menu-item-44258" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44258"><a class="collapsible-header waves-effect" id="link-menu-item-44258" href="https://mdbootstrap.com/docs/jquery/utilities/text/">Text</a></li>
                                        <li id="menu-item-44259" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44259"><a class="collapsible-header waves-effect" id="link-menu-item-44259" href="https://mdbootstrap.com/docs/jquery/utilities/vertical-align/">Vertical align</a></li>
                                        <li id="menu-item-44260" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44260"><a class="collapsible-header waves-effect" id="link-menu-item-44260" href="https://mdbootstrap.com/docs/jquery/utilities/visibility/">Visibility</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43622" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43622"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-indent"></i>Content<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44262" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44262"><a class="collapsible-header waves-effect" id="link-menu-item-44262" href="https://mdbootstrap.com/docs/jquery/content/code/">Code</a></li>
                                        <li id="menu-item-44265" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44265"><a class="collapsible-header waves-effect" id="link-menu-item-44265" href="https://mdbootstrap.com/docs/jquery/content/figures/">Figures</a></li>
                                        <li id="menu-item-87391" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-87391"><a class="collapsible-header waves-effect" id="link-menu-item-87391" href="https://mdbootstrap.com/docs/jquery/content/flag/">Flags</a></li>
                                        <li id="menu-item-44266" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44266"><a class="collapsible-header waves-effect" id="link-menu-item-44266" href="https://mdbootstrap.com/docs/jquery/content/icons-usage/">Icons usage</a></li>
                                        <li id="menu-item-44267" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44267"><a class="collapsible-header waves-effect" id="link-menu-item-44267" href="https://mdbootstrap.com/docs/jquery/content/icons-list/">Icons list</a></li>
                                        <li id="menu-item-44263" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44263"><a class="collapsible-header waves-effect" id="link-menu-item-44263" href="https://mdbootstrap.com/docs/jquery/content/images/">Images</a></li>
                                        <li id="menu-item-44261" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44261"><a class="collapsible-header waves-effect" id="link-menu-item-44261" href="https://mdbootstrap.com/docs/jquery/content/typography/">Typography</a></li>
                                        <li id="menu-item-85577" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-85577"><a class="collapsible-header waves-effect" id="link-menu-item-85577" href="https://mdbootstrap.com/docs/jquery/content/responsive-font-size/">Responsive Font Size</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43623" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43623"><a class="collapsible-header waves-effect arrow-r"><i class="fab fa-css3"></i>CSS<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-51837" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-51837"><a class="collapsible-header waves-effect" id="link-menu-item-51837" href="https://mdbootstrap.com/docs/jquery/css/demo/">Demo</a></li>
                                        <li id="menu-item-44277" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44277"><a class="collapsible-header waves-effect" id="link-menu-item-44277" href="https://mdbootstrap.com/docs/jquery/css/animations/">Animations</a></li>
                                        <li id="menu-item-59019" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59019"><a class="collapsible-header waves-effect" id="link-menu-item-59019" href="https://mdbootstrap.com/docs/jquery/css/background-image/">Background Image</a></li>
                                        <li id="menu-item-44271" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44271"><a class="collapsible-header waves-effect" id="link-menu-item-44271" href="https://mdbootstrap.com/docs/jquery/css/colors/">Colors</a></li>
                                        <li id="menu-item-79414" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-79414"><a class="collapsible-header waves-effect" id="link-menu-item-79414" href="https://mdbootstrap.com/docs/jquery/css/color-combination/">Color combination</a></li>
                                        <li id="menu-item-79437" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-79437"><a class="collapsible-header waves-effect" id="link-menu-item-79437" href="https://mdbootstrap.com/docs/jquery/css/text-color/">Text Color</a></li>
                                        <li id="menu-item-59017" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59017"><a class="collapsible-header waves-effect" id="link-menu-item-59017" href="https://mdbootstrap.com/docs/jquery/css/gradients/">Gradients</a></li>
                                        <li id="menu-item-44273" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44273"><a class="collapsible-header waves-effect" id="link-menu-item-44273" href="https://mdbootstrap.com/docs/jquery/css/hover-effects/">Hover effects</a></li>
                                        <li id="menu-item-44272" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44272"><a class="collapsible-header waves-effect" id="link-menu-item-44272" href="https://mdbootstrap.com/docs/jquery/css/masks/">Masks</a></li>
                                        <li id="menu-item-44274" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44274"><a class="collapsible-header waves-effect" id="link-menu-item-44274" href="https://mdbootstrap.com/docs/jquery/css/parallax/">Parallax</a></li>
                                        <li id="menu-item-44275" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44275"><a class="collapsible-header waves-effect" id="link-menu-item-44275" href="https://mdbootstrap.com/docs/jquery/css/shadows/">Shadows</a></li>
                                        <li id="menu-item-44276" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44276"><a class="collapsible-header waves-effect" id="link-menu-item-44276" href="https://mdbootstrap.com/docs/jquery/css/skins/">Skins</a></li>
                                        <li id="menu-item-57464" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-57464"><a class="collapsible-header waves-effect" id="link-menu-item-57464" href="https://mdbootstrap.com/docs/jquery/css/variables/">Variables</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43624" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43624"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-cubes"></i>Components<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-51836" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-51836"><a class="collapsible-header waves-effect" id="link-menu-item-51836" href="https://mdbootstrap.com/docs/jquery/components/demo/">Demo</a></li>
                                        <li id="menu-item-43990" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-43990"><a class="collapsible-header waves-effect" id="link-menu-item-43990" href="https://mdbootstrap.com/docs/jquery/components/alerts/">Alerts</a></li>
                                        <li id="menu-item-44023" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44023"><a class="collapsible-header waves-effect" id="link-menu-item-44023" href="https://mdbootstrap.com/docs/jquery/components/buttons/">Buttons</a></li>
                                        <li id="menu-item-59049" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59049"><a class="collapsible-header waves-effect" id="link-menu-item-59049" href="https://mdbootstrap.com/docs/jquery/components/stepper/">Stepper</a></li>
                                        <li id="menu-item-44044" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44044"><a class="collapsible-header waves-effect" id="link-menu-item-44044" href="https://mdbootstrap.com/docs/jquery/components/tabs/">Tabs</a></li>
                                        <li id="menu-item-44054" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44054"><a class="collapsible-header waves-effect" id="link-menu-item-44054" href="https://mdbootstrap.com/docs/jquery/components/badges/">Labels and Badges</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-43625" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43625"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-code"></i>JavaScript<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-59040" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59040"><a class="collapsible-header waves-effect" id="link-menu-item-59040" href="https://mdbootstrap.com/docs/jquery/javascript/accordion/">Accordion</a></li>
                                        <li id="menu-item-43991" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-43991"><a class="collapsible-header waves-effect" id="link-menu-item-43991" href="https://mdbootstrap.com/docs/jquery/javascript/carousel/">Carousel</a></li>
                                        <li id="menu-item-59043" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59043"><a class="collapsible-header waves-effect" id="link-menu-item-59043" href="https://mdbootstrap.com/docs/jquery/javascript/waves-effect/">Waves effects</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-59008" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-59008 active"><a class="collapsible-header waves-effect arrow-r active"><i class="fas fa-bars"></i> Navigation<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body" > <ul class="sub-menu">
                                        <li id="menu-item-44244" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44244"><a class="collapsible-header waves-effect" id="link-menu-item-44244" href="https://mdbootstrap.com/docs/jquery/navigation/compositions/">Compositions</a></li>
                                        <li id="menu-item-59006" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59006"><a class="collapsible-header waves-effect" id="link-menu-item-59006" href="https://mdbootstrap.com/docs/jquery/navigation/navs/">Navs</a></li>
                                        <li id="menu-item-44071" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-43913 current_page_item  menu-item-44071"><a class="collapsible-header waves-effect" id="link-menu-item-44071" href="https://mdbootstrap.com/docs/jquery/navigation/navbar/">Navbar</a></li>
                                        <li id="menu-item-44001" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44001"><a class="collapsible-header waves-effect" id="link-menu-item-44001" href="https://mdbootstrap.com/docs/jquery/navigation/scrollspy/">ScrollSpy</a></li>
                                        <li id="menu-item-119055" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-119055"><a class="collapsible-header waves-effect" id="link-menu-item-119055" href="https://mdbootstrap.com/docs/jquery/navigation/sidenav/">SideNav</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-59025" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59025"><a class="collapsible-header waves-effect arrow-r"><i class="fas  fa-edit"></i> Forms<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44070" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44070"><a class="collapsible-header waves-effect" id="link-menu-item-44070" href="https://mdbootstrap.com/docs/jquery/forms/basic/">Basic examples</a></li>
                                        <li id="menu-item-118072" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-118072"><a class="collapsible-header waves-effect" id="link-menu-item-118072" href="https://mdbootstrap.com/docs/jquery/forms/date-picker/">Date Picker</a></li>
                                        <li id="menu-item-80923" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-80923"><a class="collapsible-header waves-effect" id="link-menu-item-80923" href="https://mdbootstrap.com/plugins/jquery/file-upload/">Drag and drop</a></li>
                                        <li id="menu-item-116970" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-116970"><a class="collapsible-header waves-effect" id="link-menu-item-116970" href="https://mdbootstrap.com/docs/jquery/forms/time-picker/">Time Picker</a></li>
                                        <li id="menu-item-59924" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59924"><a class="collapsible-header waves-effect" id="link-menu-item-59924" href="https://mdbootstrap.com/docs/jquery/forms/validation/">Validation</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-59010" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59010"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-table"></i> Tables<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44268" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44268"><a class="collapsible-header waves-effect" id="link-menu-item-44268" href="https://mdbootstrap.com/docs/jquery/tables/basic/">Basic examples</a></li>
                                        <li id="menu-item-60882" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-60882"><a class="collapsible-header waves-effect" id="link-menu-item-60882" href="https://mdbootstrap.com/docs/jquery/tables/additional/">Additional examples</a></li>
                                        <li id="menu-item-116960" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-116960"><a class="collapsible-header waves-effect" id="link-menu-item-116960" href="https://mdbootstrap.com/docs/jquery/tables/datatables/">Datatables</a></li>
                                        <li id="menu-item-59012" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59012"><a class="collapsible-header waves-effect" id="link-menu-item-59012" href="https://mdbootstrap.com/docs/jquery/tables/search/">Search</a></li>
                                        <li id="menu-item-59011" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59011"><a class="collapsible-header waves-effect" id="link-menu-item-59011" href="https://mdbootstrap.com/docs/jquery/tables/sort/">Sort</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-59044" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-59044"><a class="collapsible-header waves-effect arrow-r"><i class="fas  fa-window-restore"></i>Modals<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-44393" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-44393"><a class="collapsible-header waves-effect" id="link-menu-item-44393" href="https://mdbootstrap.com/docs/jquery/modals/basic/">Basic examples</a></li>
                                        <li id="menu-item-59045" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-59045"><a class="collapsible-header waves-effect" id="link-menu-item-59045" href="https://mdbootstrap.com/docs/jquery/modals/customization/">Modal styles</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-91745" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-91745"><a class="collapsible-header waves-effect" id="link-menu-item-91745" href="https://mdbootstrap.com/docs/jquery/design-blocks/"><i class="fas fa-th"></i>Design Blocks</a></li>
                                <li id="menu-item-43629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43629"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-book"></i>Tutorials<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-83951" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-83951"><a class="collapsible-header waves-effect" id="link-menu-item-83951" href="https://mdbootstrap.com/education/">Basics</a></li>
                                        <li id="menu-item-85131" class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-85131"><a class="collapsible-header waves-effect" id="link-menu-item-85131" href="https://mdbootstrap.com/articles/">Miscellaneous</a></li>
                                    </ul></div>
                                </li>
                                <li id="menu-item-77919" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-77919"><a class="collapsible-header waves-effect" id="link-menu-item-77919" href="https://mdbootstrap.com/plugins/jquery/"><i class="fas fa-plus-square"></i>Plugins &amp; Addons</a></li>
                                <li id="menu-item-118651" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-118651"><a class="collapsible-header waves-effect" id="link-menu-item-118651" href="https://mdbootstrap.com/templates/"><i class="fas fa-image"></i>Free templates</a></li>
                                <li id="menu-item-118703" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-118703"><a class="collapsible-header waves-effect" id="link-menu-item-118703" href="https://mdbootstrap.com/expert-kits/"><i class="fas fa-certificate"></i> Expert Kits <span class="ml-1 badge badge-warning">New</span></a></li>
                                <li id="menu-item-43632" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-43632"><a class="collapsible-header waves-effect arrow-r"><i class="fas fa-puzzle-piece"></i>Tools &amp; Resources<i class="fa fa-angle-down rotate-icon"></i></a>
                                    <div class="collapsible-body"> <ul class="sub-menu">
                                        <li id="menu-item-85135" class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-85135"><a class="collapsible-header waves-effect" id="link-menu-item-85135" href="https://mdbootstrap.com/support/">Support</a></li>
                                        <li id="menu-item-80425" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-80425"><a class="collapsible-header waves-effect" id="link-menu-item-80425" href="https://mdbootstrap.com/snippets/">Editor &amp; snippets</a></li>
                                        <li id="menu-item-83072" class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-83072"><a class="collapsible-header waves-effect" id="link-menu-item-83072" href="https://mdbootstrap.com/articles/">Articles</a></li>
                                        <li id="menu-item-80426" class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-80426"><a class="collapsible-header waves-effect" id="link-menu-item-80426" href="https://mdbootstrap.com/publications/">Publications &amp; reports</a></li>
                                        <li id="menu-item-85133" class="menu-item menu-item-type-custom menu-item-object-custom  menu-item-85133"><a class="collapsible-header waves-effect" id="link-menu-item-85133" href="https://mdbootstrap.com/news/frontend/">Frontend news</a></li>
                                    </ul></div>
                                </li>
                            </ul>    </li>

                            </ul>
                </div>




            </header>);
    }
    }