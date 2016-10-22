import * as React from "react";

export default class TddTutorialComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   public static get defaultProps() {
      return { title: "TDD" }
   }

   render() {
      return   <div>
               </div>;
      }
}
