import * as React from "react";
import * as ReactDOM from "react-dom";

export default class AppComponent extends React.Component<any, any> {
   render() {
      return <div>Hello, World</div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById("app")
);
