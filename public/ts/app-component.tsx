import * as React from "react";
import * as ReactDOM from "react-dom";

export default class AppComponent extends React.Component<any, any> {

   public constructor() {
      super();

      // React docs say to use getInitialState but this is not being called
      // so work around to set it in the constructor
      // setState does not work either as the Component is not ready at this stage
      this.state = { testCode: "test code", response: {} };
   }

   /* React does not seem to call this - problemo perhaps?
   getInitialState() {
     return { testCode: "test code" };
  }*/

   submitTests() {
      let httpRequest = new XMLHttpRequest();

      httpRequest.open("POST", "/api/test");

      httpRequest.onreadystatechange = (event: ProgressEvent) => {
         if (httpRequest.readyState === httpRequest.DONE) {
            this.setState({ response: httpRequest.response });
         }
      };

      httpRequest.send(JSON.stringify({ testFixture: this.state.testCode }));
   }

   onTestCodeChange(event: KeyboardEvent) {
      this.setState({ testCode: (event.target as HTMLTextAreaElement).value });
   }

   render() {
      return <div>
               <textarea onChange={this.onTestCodeChange.bind(this)} value={this.state.testCode} />
               <button onClick={this.submitTests.bind(this)}>Test</button>
               <div>{this.state.testCode}</div>
               <div>{JSON.stringify(this.state.response)}</div>
             </div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
