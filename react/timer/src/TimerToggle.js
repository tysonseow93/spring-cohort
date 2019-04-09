import React, { Component } from 'react';
import TimerCard from './TimerCard';
import TimerForm from './TimerForm';
import './App.css';

class TimerToggle extends Component{

    constructor(){
        super();
        this.state = {
            isBeingEdit: false
        }
    }


    render(){
        if(this.state.isBeingEdit !== true){
            return(
                <div className="timerToggle">
                    <TimerCard />
                </div>
            )
        }else{
            return(
                <TimerForm />
            )
        }
    }

}

export default TimerToggle;