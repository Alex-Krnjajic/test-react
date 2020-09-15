import React, { Component } from "react";
import Todos from "./Todos";
import "./App.css";

class App extends Component {
  markComplete = (id) => {
    console.log("delete todo:" + id);

    this.setState({
      Todos: this.state.Todos.map((Todo) => {
        if (Todo.id === id) {
          Todo.completed = !Todo.completed;
        }

        return Todo;
      }),
    });
  };
  delTodo = (id) => {
    this.setState({
      Todos: this.state.Todos.map((Todo) => {
        if (Todo.id === id) {
        }
        return Todo;
      }),
    });
  };

  state = {
    Todos: [
      {
        id: 1,
        title: "Take trash",
        completed: false,
      },
      {
        id: 2,
        title: "Take food",
        completed: false,
      },
      {
        id: 3,
        title: "Take dog",
        completed: false,
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.Todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        ></Todos>
      </div>
    );
  }
}

export default App;
