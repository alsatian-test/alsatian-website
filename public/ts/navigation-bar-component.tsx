import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import MenuComponent from "./menu-component";
import { Link } from "react-router";

export default class NavigationBarComponent extends React.Component<any, any> {

   public constructor() {
      super();
      this.state = {
         isMenuOpen: false
      };
   }

   render() {
      return   <nav className="navigation-bar" onBlur={this.closeMenu.bind(this)}>
                  <div className="container">
                     <Link to="/">
                        <h1>Alsatian</h1>
                     </Link>
                     <a href="https://www.github.com/alsatian-test/alsatian" className="icon-link">
                        <img src="/images/github-sillhouette.svg"/>
                     </a>
                     <a href="https://www.npmjs.com/package/alsatian" className="icon-link">
                        <img src="/images/npm-logo.svg"/>
                     </a>
                  </div>
                  <button id="menu-button" onClick={this.toggleMenu.bind(this)}>
                    <svg width="38" height="38" viewBox="0 0 38 38">
                        <style>
                            { "path { stroke: white; stroke-width: 6px }" }
                        </style>
                        <path d="M0 3l38 0"/>
                        <path d="M0 18l38 0"/>
                        <path d="M0 32l38 0"/>
                    </svg>
                  </button>
                  <MenuComponent open={this.state.isMenuOpen}></MenuComponent>
               </nav>;
   }

   toggleMenu() {
      this.setState({
         isMenuOpen: !this.state.isMenuOpen
      });
   }

   closeMenu() {
      this.setState({
         isMenuOpen: false
      });
   }
}
