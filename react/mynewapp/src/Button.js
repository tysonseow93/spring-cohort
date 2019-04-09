import React, { Component } from 'react';
import App from "./App";
import './App.css';

const MyComponents = {
    DatePicker: function DatePicker(props) {
        return <div style={props.css}>{props.children}Imagine a {props.type} datepicker here.</div>;
    }
};

function BlueBirthdayDatePicker(props) {
    const cssProps = {
        color: "blue",
        fontSize: "25px"
    };
    return <MyComponents.DatePicker css={cssProps} type="birthday">{props.children}</MyComponents.DatePicker>
}

function RedHolidayDatePicker() {
    const cssProps = {
        color: "red"
    };
    return <MyComponents.DatePicker css={cssProps} type="holiday"/>
}

function NumberDescriber(props) {
    if (props.number === null) {return <div>No Prop</div>;}
    let description = null;
    if (props.number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings(props) {
    return (
        <Repeat numTimes={props.number}>
            {(index) => <div key={index}>This is item {index + 1} in the list</div>}
        </Repeat>
    );
}

function friday(){
    return 6;
}



class Button extends Component {

    constructor() {
        super();
        this.state = {
            show: true
        };
        this.toggleColor = this.toggleColor.bind(this);
    }



    render() {
        return (
            <div>
                <BlueBirthdayDatePicker>
                    <NumberDescriber number={5}/>
                </BlueBirthdayDatePicker><br/>
                <RedHolidayDatePicker /><br/>
                <NumberDescriber number={13 + 1} /><br/>
                <ListOfTenThings number={friday()}/><br/>
                <button onClick={this.toggleColor}>Toggle Blue Date</button>
                <div>
                    {this.state.show && <BlueBirthdayDatePicker />}
                </div>


            </div>

        );
    }

    toggleColor() {
        this.setState({
            show: !this.state.show
        });
    }

}



export default Button;
