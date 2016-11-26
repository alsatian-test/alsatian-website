import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Link } from "react-router";

export default class MenuComponent extends React.Component<any, any> {

   public constructor () {
      super();
   }

   render() {
      return   <nav className={ this.props.open ? "navigation-menu open" : "navigation-menu" }>
                  <ul className="menu-items">
                     <li className="menu-item">
                        <Link to="/tutorials/get-started">
                           <div>Get started</div>
                        </Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/tutorials">
                           <div>Tutorials</div>
                        </Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/blog">
                           <div>Blog</div>
                        </Link>
                     </li>
                     <li className="menu-item">
                        <Link to="/documentation">
                           <div>Documentation</div>
                        </Link>
                     </li>
                  </ul>
               </nav>;
   }
}
