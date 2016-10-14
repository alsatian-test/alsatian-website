import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";

export default class MenuComponent extends React.Component<any, any> {

   public constructor () {
      super();
   }

   render() {
      return   <nav className={ this.props.open ? "navigation-menu open": "navigation-menu"}>
                  <ul className="menu-items">
                     <li className="menu-item">
                        <a href="/get-started">
                           <div>Get started</div>
                        </a>
                     </li>
                     <li className="menu-item">
                        <a href="/tutorials">
                           <div>Tutorials</div>
                        </a>
                     </li>
                     <li className="menu-item">
                        <a href="/blog">
                           <div>Blog</div>
                        </a>
                     </li>
                     <li className="menu-item">
                        <a href="/documentation">
                           <div>Documentation</div>
                        </a>
                     </li>
                  </ul>
               </nav>;
   }
}
