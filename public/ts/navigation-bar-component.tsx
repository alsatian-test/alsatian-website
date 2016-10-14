import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import MenuComponent from "./menu-component";

export default class NavigationBarComponent extends React.Component<any, any> {

   public constructor() {
      super();
      this.state = {
         isMenuOpen: false
      }
   }

   render() {
      return   <nav className="navigation-bar">
                  <div className="container">
                     <h1>Alsatian</h1>
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
}
