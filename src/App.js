import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import './style.css';

class App extends React.Component {
  render(){
    return(
      <div >
        <u><h1 >TODO-LIST</h1></u>
        <Todo></Todo>
      </div>
    )
  }
}

export default App;
