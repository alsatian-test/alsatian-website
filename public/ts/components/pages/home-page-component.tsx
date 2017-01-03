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
                           <p>Brainy syntax allows you to write great tests, effectively without loads of bloat.</p>
                        </div>
                        <div className="reason-to-use fast">
                           <div className="reason-icon">
                              <img src="/images/lightning-bolt.svg"/>
                           </div>
                           <h3>Fast</h3>
                           <p>Tests are fast to write and run.</p>
                        </div>
                        <div className="reason-to-use robust">
                           <div className="reason-icon">
                              <img src="/images/boxing-glove.svg"/>
                           </div>
                           <h3>Robust</h3>
                           <p>Thousands of tests and a strong CI process ensure it's always in good health.</p>
                        </div>
                        <div className="reason-to-use helpful">
                           <div className="reason-icon">
                              <img src="/images/ladder.svg"/>
                           </div>
                           <h3>Helpful</h3>
                           <p>Intuitive with good supporting documentation and intellisense.</p>
                        </div>
                        <div className="reason-to-use playful">
                           <div className="reason-icon">
                              <img src="/images/rollerskate.svg"/>
                           </div>
                           <h3>Playful</h3>
                           <p>Explore and write tests how you want to write them!</p>
                        </div>
                        <div className="reason-to-use loyal">
                           <div className="reason-icon">
                              <img src="/images/heart.svg"/>
                           </div>
                           <h3>Loyal</h3>
                           <p>Active contributors on GitHub willing to help you reach testing Nirvana.</p>
                        </div>
                     </div>
                  </section>
                  <h2>Quick Start</h2>
                  <QuickStartTutorialComponent />
               </section>
             </div>;
   }
}
