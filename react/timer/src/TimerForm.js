import React, { Component } from 'react';
import './App.css';

class TimerForm extends Component{

    render(){

        return(
            <form className="timerForm">
                <div><label>Title</label></div>
                <div><input type="text" /></div>
                <div><label>Project</label></div>
                <div><input type="text" /></div>
                <button>Submit</button>
                <button>Cancel</button>
            </form>
        )

    }

}

export default TimerForm;