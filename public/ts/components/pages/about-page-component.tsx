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
                        <p>This will have info about Alsatian</p>
                     </div>
                  </section>
               </div>;
      }
}
