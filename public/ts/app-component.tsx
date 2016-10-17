import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import NavigationBarComponent from "./navigation-bar-component";
import GetStartedPageComponent from "./components/pages/get-started-page-component";
import HomePageComponent from "./components/pages/home-page-component";

Redux.createStore

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

class AppRouter  extends React.Component<any, any> {
   render() {
      return <Router history={browserHistory}>
               <Route path="/" component={AppComponent}>
                  <IndexRoute component={HomePageComponent} />
                  <Route path="get-started" component={GetStartedPageComponent} />
                  <Route path="*" component={HomePageComponent} />
               </Route>
            </Router>
   }
}

ReactDOM.render(

  <AppRouter />,
 document.getElementById("app")
);
