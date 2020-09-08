import React, { Component } from "react";
//Input : liked : boolean
//Output: onClick

class Like extends Component {
  getFontAwesomeClass = () => {
    return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
  };

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={this.props.onClick}
      ></i>
    );
  }
}

export default Like;
