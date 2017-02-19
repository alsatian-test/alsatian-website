import * as React from "react";

export default class BlogPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>Blog</h1>
                        <p>This will link to Medium articles</p>
                     </div>
                  </section>
               </div>;
      }
}
