import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "red",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(
              this,
              this.props.todoProp.id
            )}
          />{" "}
          {""}
          {this.props.todoProp.title}
        </p>
      </div>
    );
  }
}
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
