import * as React from "react";
import { Link } from "react-router";
import CodeBlock from "../elements/code-block.component";
import InstructionStepComponent from "../elements/instruction-step.component";

export default class QuickStartTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   public static get defaultProps() {
      return { title: "Quick Start" }
   }

   render() {
      return   <div>
                  <ol id="quick-start-steps">
                     <InstructionStepComponent title="Install Alsatian">
                        <pre><code className="powershell">npm install alsatian --save-dev</code></pre>
                     </InstructionStepComponent>
                     <InstructionStepComponent title="Write your first test">
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
                     </InstructionStepComponent>
                     <InstructionStepComponent title="Run your first test">
                        <p>Add the following test script to your package.json</p>
                        <pre>alsatian "wherever/you/saved/the/test.js"</pre>
                        <p>Alternatively you can run Alsatian through the CLI, but don't forget to install it globally first!</p>
                        <pre>npm install alsatian -g</pre>
                     </InstructionStepComponent>
                     <InstructionStepComponent title="Celebrate">
                        <p>Many congrats, now you can head on over to the tutorial</p>
                     </InstructionStepComponent>
                  </ol>
                  <Link to="/tutorials/tdd">
                     <button type="button">Continue your journey</button>
                  </Link>
               </div>;
      }
}
