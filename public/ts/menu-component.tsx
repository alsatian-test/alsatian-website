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
                     <a href="/get-started">
                        <li>Get started</li>
                     </a>
                     <a href="/tutorials">
                        <li>Tutorials</li>
                     </a>
                     <a href="/blog">
                        <li>Blog</li>
                     </a>
                     <a href="/documentation">
                        <li>Documentation</li>
                     </a>
                  </ul>
               </nav>;
   }
}
