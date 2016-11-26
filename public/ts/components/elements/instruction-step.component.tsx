import * as React from "react";

export default class InstructionStepComponent extends React.Component<any, any> {

   public constructor() {
       super();

      this.state = { _transparent: true };
   }

   private _transparent = true;
   private _something: HTMLElement;

   public componentDidMount() {
      addEventListener("DOMContentLoaded", this._checkIsVisible.bind(this), false);
      addEventListener("load", this._checkIsVisible.bind(this), false);
      addEventListener("scroll", this._checkIsVisible.bind(this), false);
      addEventListener("resize", this._checkIsVisible.bind(this), false);
   }

   private _checkIsVisible(event: Event) {
    if (!this.state._transparent) {
      return;
    }
    if (!this._something) {
      return;
    }

    let rect = this._something.getBoundingClientRect();

    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top + ((rect.bottom - rect.top) / 2) <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    ) {
      this.setState({ _transparent: false});
    }
  }

   render() {
      return <li data-transparent={this.state._transparent} ref={(c) => this._something = c}>
                <h3>{this.props.title}</h3>
                <hr></hr>
                {this.props.children}
             </li>;
   }
}
