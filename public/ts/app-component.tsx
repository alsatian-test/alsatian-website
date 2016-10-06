import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";

Redux.createStore

export default class AppComponent extends React.Component<any, any> {

   public constructor() {
      super();
   }

   render() {
      return <div>
               <nav>
                  <h1>Alsatian</h1>
               </nav>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
