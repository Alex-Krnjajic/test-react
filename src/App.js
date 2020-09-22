import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./About";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          Todos: [...this.state.Todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ Todos: [...this.state.Todos, res.data] }));
  };

  state = {
    Todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ Todos: res.data }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.Todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                ></Todos>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
