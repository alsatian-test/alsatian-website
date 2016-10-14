import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";

export default class NavigationBarComponent extends React.Component<any, any> {

   render() {
      return   <nav>
                  <div className="container">
                     <h1>Alsatian</h1>
                     <a href="https://github.com/alsatian-test/alsatian">Github</a>
                  </div>
                  <button id="menu-button">Menu</button>
               </nav>;
   }
}
