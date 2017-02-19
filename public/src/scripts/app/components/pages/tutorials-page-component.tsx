import * as React from "react";

export default class TutorialsPageComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return   <div>
                  <section className="billboard findbettername">
                     <div className="container">
                        <h1>{this.props.children.props.title}</h1>
                     </div>
                  </section>
                  <section className="container">
                     {this.props.children}
                  </section>
               </div>;
      }
}
