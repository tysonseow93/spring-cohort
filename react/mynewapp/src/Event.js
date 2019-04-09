import React, { Component } from 'react';
import './App.css';


class Event extends Component{

    handleClick() {
        console.log("Button clicked!");
    }

    handleChange(e) {
        console.log(`Input text field has changed! New value: ${e.target}`);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <input type="text" onChange={this.handleChange}/>
            </div>
        );
    }

}

export default Event