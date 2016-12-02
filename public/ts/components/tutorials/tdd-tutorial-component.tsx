import * as React from "react";

export default class TddTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   public static get defaultProps() {
      return { title: "TDD" };
   }

   render() {
      return   <div>
                  <h2>Why TDD</h2>
                  <p>The most compeling reason for TDD is that it ensures you write code that meets requirements which is after all what your favourite Project Manager, Account Manager or Business Analyst wants - so let's make them happy</p>
                  <p>If we compare writing unit tests in the traditional way to TDD we can see this clearly.</p>
                  <h3>Writing unit tests retrospectively</h3>
                  <p>The process is very simple:</p>
                  <ol>
                        <li>Business gives developer requirements</li>
                        <li>Developer writes code from requirements</li>
                        <li>Developer writes tests for the code</li>
                  </ol>
                  <p>Everything's great right?! Well sure, but there's a tiny change you can make to improve this (as with everything of course!).</p>
                  <h3>Writing unit tests with TDD</h3>
                  <p>The process is again very simple and in fact looks pretty identical with one important small difference</p>                  
                  <ol>
                        <li>Business gives developer requirements</li>
                        <li>Developer writes tests that meet requirements</li>
                        <li>Developer writes code that passes tests</li>
                  </ol>
                  <p>So what's the big deal right? All we've done is swapped our process around. Let's look at the differences</p>
                  <p>I write tests from the code - the tests prove that the code does what we think it should.</p>
                  <p>I write tests from the requirements - the tests prove that the requirements are met.</p>
                  <p>This subtle difference makes the tests vastly more useful as they are proving something that we want, rather than what we know is there.</p>
                  <p>Other benefits include, finding holes in requirements more frequently and earlier.</p>
                  <h1><span>Red</span> <span>Green</span> <span>R</span><span>e</span><span>f</span><span>a</span><span>c</span><span>t</span><span>o</span><span>r</span></h1>
                  <p>It's this simple mantra that ensures we write code that meets requirements <strong>and</strong> is reliable.</p>
               </div>;
      }
}
