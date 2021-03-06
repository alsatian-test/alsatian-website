import * as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import AppComponent from "./app-component";
import HomePageComponent from "./components/pages/home-page-component";
import NotFoundPageComponent from "./components/pages/not-found-page-component";
import TutorialsPageComponent from "./components/pages/tutorials-page-component";
import BlogPageComponent from "./components/pages/blog-page-component";
import AboutPageComponent from "./components/pages/about-page-component";
import DocumentationPageComponent from "./components/pages/documentation-page-component";
import GetStartedTutorialComponent from "./components/tutorials/getting-started-tutorial-component";
import TddTutorialComponent from "./components/tutorials/tdd-tutorial-component";


export default class AppRouter extends React.Component<any, any> {
   render() {
      return <Router history={browserHistory}>
               <Route path="/" component={AppComponent}>
                  <IndexRoute component={HomePageComponent} />
                  <Route path="about" component={AboutPageComponent} />
                  <Route path="blog" component={BlogPageComponent} />
                  <Route path="documentation" component={DocumentationPageComponent} />
                  <Route path="tutorials/" component={TutorialsPageComponent}>
                     <Route path="get-started" component={GetStartedTutorialComponent} />
                     <Route path="tdd" component={TddTutorialComponent} />
                  </Route>
                  <Route path="*" component={NotFoundPageComponent} />
               </Route>
            </Router>;
   }
}
