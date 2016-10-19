import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import AppComponent from "./app-component";
import NavigationBarComponent from "./navigation-bar-component";
import GetStartedPageComponent from "./components/pages/get-started-page-component";
import HomePageComponent from "./components/pages/home-page-component";
import NotFoundPageComponent from "./components/pages/not-found-page-component";
import TutorialsPageComponent from "./components/pages/tutorials-page-component";

export default class AppRouter extends React.Component<any, any> {
   render() {
      return <Router history={browserHistory}>
               <Route path="/" component={AppComponent}>
                  <IndexRoute component={HomePageComponent} />
                  <Route path="get-started" component={GetStartedPageComponent} />
                  <Route path="tutorials" component={TutorialsPageComponent} />
                  <Route path="*" component={NotFoundPageComponent} />
               </Route>
            </Router>
   }
}

ReactDOM.render(
   <AppRouter />,
   document.getElementById("app")
);
