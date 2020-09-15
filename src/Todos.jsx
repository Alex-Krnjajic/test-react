import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props.Todos);
    const Todos = this.props.Todos;
    return (
      <div>
        {Todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markComplete={this.props.markComplete}
            />
          );
        })}
      </div>
    );
  }
}

Todos.propTypes = {
  todo: PropTypes.array.isRequired,
};

export default Todos;
