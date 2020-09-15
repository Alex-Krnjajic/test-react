import React, { Component } from "react";
import Todos from "./Todos";
import "./App.css";

class App extends Component {
  markComplete = (id) => {
    this.setState({
      Todos: this.state.Todos.map((Todo) => {
        if (Todo.id === id) {
          Todo.completed = !Todo.completed;
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
          Todos={this.state.Todos}
          markComplete={this.markComplete}
        ></Todos>
      </div>
    );
  }
}

export default App;
