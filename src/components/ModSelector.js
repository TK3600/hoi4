import React, { Component } from "react";

export default class ModSelector extends Component {
  render() {
    let {changeMod} = this.props;
    return <div className="mod-selector">
      <span>Switch mod:</span>
      <button className="btn btn-primary" onClick={() => changeMod("vanilla")}>Vanilla (1.5.4)</button>
      <button className="btn btn-primary" onClick={() => changeMod("kaiserreich")}>Kaiserreich (0.8.3)</button>
      <button className="btn btn-primary" onClick={() => changeMod("millennium_dawn")}>Millennium Dawn (0.3.0)</button>
    </div>
  }
}