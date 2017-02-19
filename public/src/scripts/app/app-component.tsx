import * as React from "react";
import NavigationBarComponent from "./navigation-bar-component";

export default class AppComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return <div>
               <NavigationBarComponent />
               {this.props.children}
             </div>;
   }
}
