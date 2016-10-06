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
                  <a href="https://github.com/alsatian-test/alsatian">Github</a>
               </nav>
               <div class="billboard findbettername">
                  <p>Alsatian helps you test atomically</p>
               </div>
               <section>
                  <h2>Quick start</h2>
                  <pre>npm install alsatian --save-dev</pre>
                  <h2>Using the CLI?</h2>
                  <p>You can use Alsatian straight in your CLI, but don't forget to install it globally!</p>
                  <pre>npm install alsatian -g</pre>
               </section>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
