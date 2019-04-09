import React, { Component } from 'react';


class Day7 extends Component {

    constructor(){
        super();
        this.state = {
            init: 'init',
            hello: 'hello',
            select: 'Orange'
        }

    }

    render() {
        return (
            <div>
                <input name="init" type="text" value={this.state.init.toUpperCase()} onChange={this.handleChange}/>
                <textarea name="hello" value={this.state.hello} onChange={this.handleChange}></textarea>
                <select name="select" value={this.state.select} onChange={this.handleChange}>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Orange">Orange</option>
                </select>
            </div>
        );
    }

    handleChange = (e) => {
        console.log(e.target.value);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state);
    }

}

export default Day7