import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="div-center vh-100 bg-dark " style={{ padding: 200 }}>
        <h1 style={{ color: "white" }}> ERROR 404 </h1>
        <br />
        <h2 style={{ color: "white" }}>NOT FOUND </h2>
      </div>
    );
  }
}
