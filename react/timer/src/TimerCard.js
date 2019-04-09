import React, { Component } from 'react';
import './App.css';


class TimerCard extends Component{

    constructor(){
        super();
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        };
        this.countUp = this.countUp.bind(this);
        this.startTimer = this.startTimer.bind(this);

    }

    render(){
        return(
            <div className="timerCard">
                <div>
                    <div>Card Title</div>
                    <div>Project description</div>
                </div>
                <div className="timer" > {this.state.hours}: {this.state.minutes}: {this.state.seconds}</div>
                <div>
                    <button>edit</button>
                    <button>delete</button>
                </div>
                <div>
                    <button
                        onClick={this.startTimer}
                    >Start/Stop</button>
                </div>
            </div>
        )
    }

    countUp(){
        if(this.state.seconds !== 59){
            this.setState({seconds: (this.state.seconds + 1)});
        }
        else if(this.state.minutes !== 59) {
            this.setState({seconds: 0, minutes: (this.state.minutes + 1)})
        }
        else{
            this.setState({seconds: 0, minutes: 0, hours: (this.state.hours + 1)})
        }

    }

    startTimer () {
        setInterval(this.countUp, 1000)
    }

}

export default TimerCard;