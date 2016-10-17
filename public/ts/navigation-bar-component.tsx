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
      }
   }

   render() {
      return   <nav className="navigation-bar" onBlur={this.closeMenu.bind(this)}>
                  <div className="container">
                     <Link to="/">
                        <h1>Alsatian</h1>
                     </Link>
                     <a href="https://github.com/alsatian-test/alsatian">Github</a>
                  </div>
                  <button id="menu-button" onClick={this.toggleMenu.bind(this)}>Menu</button>
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
