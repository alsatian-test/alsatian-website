import * as React from "react";
import { Link } from "react-router";
import QuickStartTutorialComponent from "../tutorials/quick-start-tutorial-component";

export default class HomePageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return <div>
               <section className="billboard findbettername">
                  <div className="container">
                     <div className="mascot">
                        <img src="/images/mascot-main.png" />
                     </div>
                     <div className="main-info">
                        <h1>Alsatian</h1>
                        <p>Alsatian helps you test atomically</p>
                        <Link to="/tutorials/get-started">
                           <button type="button">Get started</button>
                        </Link>
                        <Link to="/changelog">
                           <button type="button">v 1.0.0-beta-10</button>
                        </Link>
                     </div>
                  </div>
               </section>
               <section className="container">
                  <section>
                     <h2>Why Alsatian?</h2>
                     <p>Great question, well like any good dog Alsatian has been built on three strong values:</p>
                     <div id="reasons-to-use">
                        <div className="reason-to-use">
                           <h3>Smart and Fast</h3>
                           <p>Test Case decorator, some stuff about functional cocverage, quick to write some bad ass tests. Not to mention it runs dead fast.</p>
                        </div>
                        <div className="reason-to-use">
                           <h3>Robust and Loyal</h3>
                           <p>Literally thousands of tests, CI process etc. Active on GitHub things get done son</p>
                        </div>
                        <div className="reason-to-use">
                           <h3>Helpful and Playful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc. Supported by easy to read docs</p>
                        </div>
                     </div>
                  </section>
                  <h2>Quick Start</h2>
                  <QuickStartTutorialComponent />
               </section>
             </div>;
   }
}
