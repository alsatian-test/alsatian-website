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
                     {/* COMMENTED OUT WHILST WORKING WITH MVP
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
                     </li>*/}
                     <li className="menu-item">
                        <a href="https://github.com/alsatian-test/alsatian/wiki">
                           <div>Documentation</div>
                        </a>
                     </li>
                     <li className="menu-item">
                        <Link to="/about">
                           <div>About</div>
                        </Link>
                     </li>
                  </ul>
               </nav>;
   }
}
