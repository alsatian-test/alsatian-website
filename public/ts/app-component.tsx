import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";

Redux.createStore

export default class AppComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return <div>
               <nav>
                  <div className="container">
                     <h1>Alsatian</h1>
                     <a href="https://github.com/alsatian-test/alsatian">Github</a>
                  </div>
               </nav>
               <section className="billboard findbettername">
                  <h1>Alsatian</h1>
                  <p>Alsatian helps you test atomically</p>
                  <a href="https://github.com/alsatian-test/alsatian">
                     <button type="button">Github</button>
                  </a>
                  <button type="button">Get started</button>
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
                           <p>Literally thousands of tests, CI process etc.</p>
                        </div>
                        <div className="reason-to-use">
                           <h3>Helpful and Playful</h3>
                           <p>Get stuck into TDD, Alsatian makes it less of a drag and helps you with messages you can understand to help you fix stuff, type safety etc.</p>
                        </div>
                     </div>
                  </section>
                  <h2>Quick start</h2>
                  <ol>
                     <li>
                        <h3>Install Node.js</h3>
                        <p>If you have it already then congratulations, you can move straight to step 2. Otherwise <a>link to installing node.js</a>. Quick bit of info about creating a new node project.</p>
                     </li>
                     <li>
                        <h3>Install TypeScript</h3>
                     </li>
                     <li>
                        <h3>Install Alsatian</h3>
                        <pre>npm install alsatian --save-dev</pre>
                     </li>
                     <li>
                        <h3>Write your first test</h3>
                        <p>Simply create a spec file paste this code and save it.</p>
                        <pre>
                           {`
                           import { Test, Expect } from "alsatian";
                           import * as Alsatian from "alsatian";

                           export class AlsatianTests {

                              @Test("make alsatian check that it is there")
                              public ensureAlsatianExists() {
                                 Expect(alsatian).toBeDefined();
                              }
                           }`.replace(/       /g, "")}
                        </pre>
                     </li>
                     <li>
                        <h3>Run your first test</h3>
                        <p>Add the following test script to your package.json</p>
                        <pre>alsatian "wherever/you/saved/the/test.js"</pre>
                        <p>Alternatively you can run Alsatian through the CLI, but don't forget to install it globally first!</p>
                        <pre>npm install alsatian -g</pre>
                     </li>
                     <li>
                        <h3>Celebrate</h3>
                        <p>Many congrats, now you can head on over to the tutorial</p>
                     </li>
                  </ol>
                  <button type="button">Continue your journey</button>
               </section>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
