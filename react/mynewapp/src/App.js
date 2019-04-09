import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./Timer";

class App extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.thingToDo = this.thingToDo.bind(this);
    }

  render() {
    return (
      <div className="App">
          <Timer onInterval={this.thingToDo} interval={1000}/>
      </div>
    );
  }

    thingToDo() {
        if(this.state.counter % 2 === 0){
             console.log('tick');
             console.log(++this.state.counter);
        }else{
            console.log('tock');
            console.log(++this.state.counter);
        }
    }
}

export default App;
