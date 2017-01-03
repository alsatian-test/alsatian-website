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
                        <p id="badges">
                          <a href="https://www.npmjs.com/package/alsatian">
                              <img src="https://img.shields.io/npm/v/alsatian.svg" alt="NPM Version" />
                          </a>
                          <a href="https://www.github.com/alsatian-test/alsatian/blob/master/LICENSE">
                              <img src="https://img.shields.io/github/license/alsatian-test/alsatian.svg" alt="License" />
                          </a>
                          <a href="https://travis-ci.org/alsatian-test/alsatian">
                              <img src="https://travis-ci.org/alsatian-test/alsatian.svg?branch=master" alt="Build Status" />
                          </a>
                          <a href="https://codeclimate.com/github/alsatian-test/alsatian">
                              <img src="https://codeclimate.com/github/alsatian-test/alsatian/badges/gpa.svg" alt="Code Climate" />
                          </a>
                          <a href="https://coveralls.io/github/alsatian-test/alsatian?branch=master">
                              <img src="https://coveralls.io/repos/github/alsatian-test/alsatian/badge.svg?branch=master" alt="Coverage Status" />
                          </a>
                          <a href="https://codeclimate.com/github/alsatian-test/alsatian">
                              <img src="https://codeclimate.com/github/alsatian-test/alsatian/badges/issue_count.svg" alt="Code Climate Issue Count" />
                          </a>
                          <a href="https://www.bithound.io/github/alsatian-test/alsatian">
                              <img src="https://www.bithound.io/github/alsatian-test/alsatian/badges/code.svg" alt="bitHound Code Rating" />
                          </a>
                          <a href="https://www.bithound.io/github/alsatian-test/alsatian/master/dependencies/npm">
                              <img src="https://www.bithound.io/github/alsatian-test/alsatian/badges/dependencies.svg" alt="bitHound Dependencies Rating" />
                          </a>
                          <a href="https://snyk.io/test/github/alsatian-test/alsatian">
                              <img src="https://snyk.io/test/github/alsatian-test/alsatian/badge.svg" alt="Known Vulnerabilities" />
                          </a>
                      </p>
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
