import React, { Component } from 'react';
import TimerForm from './TimerForm';
import './App.css';

class TimerAdd extends Component{

    render(){

        return(
            <div className="timerAdd">
                <button>Add</button>
                <TimerForm />
            </div>
        )

    }

}

export default TimerAdd;