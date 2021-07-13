
import "./style.css";
import React from "react";
import Board from "../../Components/Board/Board";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Board />
      </div>
    )
  }
}