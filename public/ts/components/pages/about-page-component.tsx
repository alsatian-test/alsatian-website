import * as React from "react";

export default class AboutPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>About</h1>
                        <p>Alsatian is different</p>
                     </div>
                  </section>
                  <section className="container">
                     <h2>What is Alsatian?</h2>
                     <p>Alsatian is a test framework committed to making testing awesome! With excellent readability and features to make your tests the best!</p>
                     <h2>Acknowledgements</h2>
                     <p>Alsatian is free and open source and couldn't survive without the wonderful people who provide freebees for the Open Source community! We use the following services and are proud to:</p>
                     <ul>
                        <li>GitHub</li>
                        <li>NPM</li>
                        <li>Travis CI</li>
                     </ul>
                     <p>Furthermore, we couldn't be where we are without community support. Whether that be <a href="https://github.com/alsatian-test/alsatian/graphs/contributors">contributors</a> or people raising issues, starring the repository or just using Alsatian - we love you all.</p>
                     <p>Icons on this site have been provided by...</p>
                  </section>
               </div>;
      }
}
