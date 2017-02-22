import * as React from "react";
import "prismjs";
import "../../../../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers";
import "../../../../../../node_modules/prismjs/components/prism-typescript";
import "../../../../../../node_modules/prismjs/components/prism-powershell";

export default class CodeBlock extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = {
            code: this.props.children
        };
    }

    private _codeElement: HTMLElement;

    public componentDidMount() {
        if (this._codeElement) {
            Prism.hooks.run("complete", {
                code: this.state.code,
                element: this._codeElement
            });
        }
    }

    private get _preClassName() {
        return (this.props.showLineNumbers ? "line-numbers " : "") + this._languageClassName;
    }

    private get _languageClassName() {
        return this.props.language ? "language-" + this.props.language : "";
    }

    private _buildContent(): any {
        return { __html: Prism.highlight(this.state.code, (Prism.languages as any)[this.props.language])};
    }

    render() {
        return  <pre className={this._preClassName}>
                    <code ref={(codeElement) => this._codeElement = codeElement }
                        className={this._languageClassName}
                        dangerouslySetInnerHTML={this._buildContent()}></code>
                </pre>;
    }
}
