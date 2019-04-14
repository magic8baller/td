import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
// import './App.css';
import uuid from 'uuid';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'make perjexxx'
      },
      {
        id: 1,
        title: 'move it'
      }
    ],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    const { item: title, id, items } = this.state;
    e.preventDefault();
    const newTodo = {
      id,
      title
    };

    const updatedItems = [...this.state.items, newTodo];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    }, () => console.log(this.state));
  };

  clearList = (e) => {
    console.log('clear list');
  };
  handleDelete = (id) => {
    console.log(`handle delete on ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit on ${id}`);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.handleEdit}
              />

              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
