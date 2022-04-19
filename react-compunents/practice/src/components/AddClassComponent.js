import { Component } from 'react';

export class AddClassComponent extends Component {
    render() {
        return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>
    }
}