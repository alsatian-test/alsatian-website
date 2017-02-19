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
                        <li><a href="https://github.com">GitHub</a></li>
                        <li><a href="https://www.npmjs.com">NPM</a></li>
                        <li><a href="https://travis-ci.org">Travis CI</a></li>
                        <li><a href="https://www.bithound.io">Bithound</a></li>
                        <li><a href="https://coveralls.io">Coveralls</a></li>
                        <li><a href="https://codeclimate.com">Code Climate</a></li>
                     </ul>
                     <p>Furthermore, we couldn't be where we are without community support. Whether that be <a href="https://github.com/alsatian-test/alsatian/graphs/contributors">contributors</a> or people raising issues, starring the repository or just using Alsatian - we love you all.</p>
                     <p>Icons on this site have been provided by <a href="https://thenounproject.com/">The Noun Project</a></p>
                  </section>
               </div>;
      }
}
