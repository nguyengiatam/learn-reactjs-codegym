import { Component } from 'react';
import '../App.css';
export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
        this.callback = this.props.callback
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(){
        return false
    }

    handleClick(event) {
        event.preventDefault();
        this.callback(this.state.value)
    }

    render() {
        return (
            <button className="btn btn-info input-number" onClick={this.handleClick} style={{width: "5vw", margin:"2px"}}>{this.state.value}</button>
        )
    }
}