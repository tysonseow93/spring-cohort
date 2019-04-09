import React, { Component } from 'react';
import TimerList from './TimerList';
import TimerAdd from './TimerAdd';
import './App.css';


class TimerDashboard extends Component{

    render(){

        return(
            <div className="timerDashboard">
                <TimerList />
                <TimerAdd />
            </div>
        )

    }

}

export default TimerDashboard