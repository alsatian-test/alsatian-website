import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";

export default class MenuComponent extends React.Component<any, any> {

   public constructor () {
      super();
   }

   render() {
      return   <nav className={ this.props.open ? "navigation-menu open": "navigation-menu"}>
                  <ul>
                     <li>One</li>
                     <li>Two</li>
                     <li>Three</li>
                  </ul>
               </nav>;
   }
}
