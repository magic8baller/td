import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TodoInput />
          </div>
          <div className="row">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
