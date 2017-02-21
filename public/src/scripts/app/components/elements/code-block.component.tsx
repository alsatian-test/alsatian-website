import * as React from "react";
import "prismjs";
import "../../../../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers";

export default class CodeBlock extends React.Component<any, any> {

   public constructor(props: any) {
       super(props);
    this.state = {
        code: this.props.children
    };
   }

   private get _preClassName() {
       return this.props.showLineNumbers ? "line-numbers " : "" + this._languageClassName;
   }

   private get _languageClassName() {
       return this.props.language ? "language-" + this.props.language : "";
   }

   private _buildContent(): any {
      return { __html: Prism.highlight(this.state.code, (Prism.languages as any)["javascript"])};
   }

   render() {
      return <pre className={this._preClassName}>
                <code className={this._languageClassName}
                      dangerouslySetInnerHTML={this._buildContent()}></code>
             </pre>;
   }
}
