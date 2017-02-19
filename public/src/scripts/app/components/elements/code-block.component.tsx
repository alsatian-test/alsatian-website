import * as React from "react";
import "prismjs";
import "prismjs.line-numbers";

export default class CodeBlock extends React.Component<any, any> {

   private _buildContent(): any {
      return { __html: Prism.highlight(this.props.children, (Prism.languages as any)["javascript"])};
   }

   render() {
      return <pre className={ this.props.showLineNumber ? "line-numbers" : "" }>
                <code className={this.props.language ? "language-" + this.props.language : ""} dangerouslySetInnerHTML={this._buildContent()}>

                </code>
             </pre>;
   }
}
