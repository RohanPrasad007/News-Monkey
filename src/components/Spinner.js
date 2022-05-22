import React, { Component } from "react";
import loader from "../assets/loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={loader} alt="loading" />
      </div>
    );
  }
}
