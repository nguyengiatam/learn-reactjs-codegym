import { Component } from 'react';
import { Input } from './Input';


export class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value }
    }
    handleClick(event) {
        event.preventDefault();
        <Input value={this.state.value} />;
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.value}</button>
        )
    }
}