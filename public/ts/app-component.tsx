import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import NavigationBarComponent from "./navigation-bar-component";
import HomePageComponent from "./components/pages/home-page-component";

Redux.createStore

export default class AppComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return <div>
               <NavigationBarComponent></NavigationBarComponent>
               <HomePageComponent></HomePageComponent>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
