import * as React from "react";

export default class NotFoundPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>Gadzooks!</h1>
                        <p>We couldn't find the thing you were looking for! Try the menu</p>
                     </div>
                  </section>
               </div>;
      }
}
