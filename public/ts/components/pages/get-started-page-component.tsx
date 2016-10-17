import * as React from "react";

export default class GetStartedPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>Get started</h1>
                     </div>
                  </section>
                  <section className="container">
                     <h2>Getting your setup awesome</h2>
                  </section>
                  <section className="container">
                     <h2>Writing tests</h2>
                  </section>
                  <section className="container">
                     <h2>Coverage, TAP Reporters, Debugging, End to End Testing</h2>
                  </section>
                  <section className="container">
                     <h2>Next steps and where to find them</h2>
                  </section>
               </div>;
      }
}
