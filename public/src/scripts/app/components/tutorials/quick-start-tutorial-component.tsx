import * as React from "react";
import { Link } from "react-router";
import CodeBlock from "../elements/code-block.component";
import InstructionStepComponent from "../elements/instruction-step.component";

export default class QuickStartTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   public static get defaultProps() {
      return { title: "Quick Start" };
   }

   render() {
      return   <div>
                  <p>Below we've made some assumptions that you have Node.js and TypeScript installed and are familiar with creating projects for them.{/* If you've not then you'll probably need a bit more help but fear not, help is at hand!*/}</p>  
                  {/* TODO: Build out full getting started
                  <div className="center-contents">
                        <Link to="/tutorials/get-started">
                              <button id="no-assumptions-button" type="button">Make no assumptions</button>
                        </Link>
                  </div>*/}
                  <ol id="quick-start-steps">
                     <InstructionStepComponent title="Install Alsatian">
                        <p>Good news, Alsatian is on NPM! So this step is super easy! Simply put the below into you're favourite CLI.</p>
                        <CodeBlock language="shell">npm install alsatian --save-dev</CodeBlock>
                     </InstructionStepComponent>
                     <InstructionStepComponent title="Write your first test">
                        <p>Simply create a spec file paste this code and save it.</p>
                        <CodeBlock language="typescript" showLineNumber>
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
                        <CodeBlock language="shell">alsatian "wherever/you/saved/the/test.js"</CodeBlock>
                        <p>Alternatively you can run Alsatian through the CLI, but don't forget to install it globally first!</p>
                        <CodeBlock language="shell">npm install alsatian -g</CodeBlock>
                     </InstructionStepComponent>
                     <InstructionStepComponent title="Celebrate">
                        <p>Many congrats, now you can write some great tests for your awesome code!{/* head on over to the TDD tutorial*/}</p>
                     </InstructionStepComponent>
                  </ol>
                  { /* TODO: Create TDD Tutorial *
                  <div className="center-contents">
                        <Link to="/tutorials/tdd">
                        <button id="continue-journey-button" type="button">Continue your journey</button>
                        </Link>
                  </div>*/}
               </div>;
      }
}
