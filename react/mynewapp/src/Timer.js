import React, {Component} from 'react';

export default class Timer extends Component {

    render(){
        return (
            <div style={{display: 'none'}}></div>
        )
    }

    componentDidMount() {
        setInterval(this.props.onInterval, this.props.interval)
    }

}