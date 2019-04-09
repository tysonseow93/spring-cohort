import React, { Component } from 'react';
import TimerToggle from './TimerToggle';
import './App.css';

class TimerList extends Component{

    render(){

        return(
            <div className="timerList">
                <TimerToggle />
            </div>
        )
    }

}

export default TimerList;