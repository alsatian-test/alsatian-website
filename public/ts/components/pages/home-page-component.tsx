import * as React from "react";
import { Link } from "react-router";
import QuickStartTutorialComponent from "../tutorials/quick-start-tutorial-component";

export default class HomePageComponent extends React.Component<any, any> {

   public constructor() {
      super();

      setTimeout(() => {

      }, 1000);
   }

   render() {
      return <div>
               <section className="billboard findbettername">
                  <div className="container">
                     <div className="mascot">
                        <img src="/images/mascot-main.png" />
                     </div>
                     <div className="main-info">
                        <img id="alsatian-logo" src="/images/alsatian-logo.png" />
                        <p>Alsatian helps you test atomically</p>
                        {/* TODO: Build full getting started tutorial
                        <Link to="/tutorials/get-started">
                           <button type="button">Get started</button>
                        </Link>*/}
                     </div>
                  </div>
               </section>
               <section className="container">
                  <section>
                     <h2>Why Alsatian?</h2>
                     <p>Great question, well like any good dog Alsatian has been built on six strong values:</p>
                     <div id="reasons-to-use">
                        <div className="reason-to-use smart">
                           <div className="reason-icon">
                              <img src="/images/brain.svg"/>
                           </div>
                           <h3>Smart</h3>
                           <p>Test Case decorator, some stuff about functional cocverage, quick to write some bad ass tests. Not to mention it runs dead fast.</p>
                        </div>
                        <div className="reason-to-use fast">
                           <div className="reason-icon">
                              <img src="/images/lightning-bolt.svg"/>
                           </div>
                           <h3>Fast</h3>
                           <p>Test Case decorator, some stuff about functional cocverage, quick to write some bad ass tests. Not to mention it runs dead fast.</p>
                        </div>
                        <div className="reason-to-use robust">
                           <div className="reason-icon">
                              <img src="/images/boxing-glove.svg"/>
                           </div>
                           <h3>Robust</h3>
                           <p>Literally thousands of tests, CI process etc. Active on GitHub things get done son</p>
                        </div>
                        <div className="reason-to-use helpful">
                           <div className="reason-icon">
                              <img src="/images/ladder.svg"/>
                           </div>
                           <h3>Helpful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc. Supported by easy to read docs</p>
                        </div>
                        <div className="reason-to-use playful">
                           <div className="reason-icon">
                              <img src="/images/rollerskate.svg"/>
                           </div>
                           <h3>Playful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc. Supported by easy to read docs</p>
                        </div>
                        <div className="reason-to-use loyal">
                           <div className="reason-icon">
                              <img src="/images/heart.svg"/>
                           </div>
                           <h3>Loyal</h3>
                           <p>Literally thousands of tests, CI process etc. Active on GitHub things get done son</p>
                        </div>
                     </div>
                  </section>
                  <h2>Quick Start</h2>
                  <QuickStartTutorialComponent />
               </section>
             </div>;
   }
}
