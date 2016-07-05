import * as React from "react";

export default class AppComponent extends React.Component<any, any> {
   render() {
      return <div>Hello, World</div>;
   }
}

ReactDOM.render(
 <AppComponent />,
 document.getElementById('example')
);
