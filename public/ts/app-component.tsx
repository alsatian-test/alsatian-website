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
                  <button type="button">Github</button><button type="button">Get started</button>
               </section>
               <section className="container">
                  <section>
                     <h2>Why Alsatian?</h2>
                     <p>Points to be made in columns</p>
                  </section>
                  <h2>Quick start</h2>
                  <h3>1) Install Node.js</h3>
                  <p>If you have it already then congratulations, you can move straight to step 2. Otherwise <a>link to installing node.js</a>. Quick bit of info about creating a new node project.</p>
                  <h3>Install TypeScript</h3>
                  <h3>2) Install Alsatian</h3>
                  <pre>npm install alsatian --save-dev</pre>
                  <h3>3) Write your first test</h3>
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
                  <h3>4) Run your first test</h3>
                  <p>Add the following test script to your package.json</p>
                  <pre>alsatian "wherever/you/saved/the/test.js"</pre>
                  <p>Alternatively you can run Alsatian through the CLI, but don't forget to install it globally first!</p>
                  <pre>npm install alsatian -g</pre>
                  <h3>5) Celebrate</h3>
                  <p>Many congrats, now you can head on over to the tutorial</p>
               </section>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
