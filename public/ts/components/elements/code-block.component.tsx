import * as React from "react";
import "prismjs";
import "prismjs.line-numbers";

export default class CodeBlock extends React.Component<any, any> {

   private _language: string = "typescript";

   private _buildContent(): any {
      return { __html: Prism.highlight(this.props.children, (Prism.languages as any)["javascript"])};
   }

   render() {
      return <pre className="line-numbers">
         <code className={"language-" + this._language} dangerouslySetInnerHTML={this._buildContent()}>

               </code>
             </pre>;
   }
}
