import * as React from "react";

export default class TutorialsPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>Tutorials</h1>
                     </div>
                  </section>
                  <section className="container">
                     <ul>
                        <li>
                           <h2>Tutorial one</h2>
                        </li>
                        <li>
                           <h2>Tutorial two</h2>
                        </li>
                        <li>
                           <h2>Tutorial three</h2>
                        </li>
                     </ul>
                  </section>
               </div>;
      }
}
