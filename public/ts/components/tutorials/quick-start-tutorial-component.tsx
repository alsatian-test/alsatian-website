import * as React from "react";
import { Link } from "react-router";
import CodeBlock from "../elements/code-block.component";

export default class QuickStartTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();

      this.state = { _transparent: true };
   }

   private _transparent = true;
   private _something: HTMLElement;
   
   public componentDidMount() {
      addEventListener('DOMContentLoaded', this._checkIsVisible.bind(this), false);
      addEventListener('load', this._checkIsVisible.bind(this), false);
      addEventListener('scroll', this._checkIsVisible.bind(this), false);
      addEventListener('resize', this._checkIsVisible.bind(this), false);
   }
   
   private _checkIsVisible(event: Event) {
    if (!this.state._transparent) {
      return;
    }
    if (!this._something) {
      return;
    }

    let rect = this._something.getBoundingClientRect();

    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top + ((rect.bottom - rect.top) / 2) <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    ) {
      this.setState({ _transparent: false});

      //this._filterSkills();
    }
  }

   public static get defaultProps() {
      return { title: "Quick Start" }
   }

   render() {
      return   <div>
                  <ol id="quick-start-steps">
                     <li>
                        <h3>Install Alsatian</h3>
                        <pre><code className="powershell">npm install alsatian --save-dev</code></pre>
                     </li>
                     <li data-transparent={this.state._transparent} ref={(c) => this._something = c}>
                        <h3>Write your first test</h3>
                        <hr></hr>
                        <p>Simply create a spec file paste this code and save it.</p>
                        <CodeBlock>
                           {
                          `import { Test, Expect } from "alsatian";
                           import * as Alsatian from "alsatian";

                           export class AlsatianTests {

                              @Test("make alsatian check that it is there")
                              public ensureAlsatianExists() {
                                 Expect(alsatian).toBeDefined();
                              }
                           }`.replace(/         /g, "")}
                           </CodeBlock>
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
