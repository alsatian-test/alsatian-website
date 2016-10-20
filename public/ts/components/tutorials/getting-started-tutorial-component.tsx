import * as React from "react";
import { Link } from "react-router";

export default class GetStartedTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <h2>Quick start</h2>
                  <ol id="quick-start-steps">
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
                           }`.replace(/         /g, "")}
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
                  <Link to="/tutorials/tdd">
                     <button type="button">Continue your journey</button>
                  </Link>
               </div>;
      }
}
