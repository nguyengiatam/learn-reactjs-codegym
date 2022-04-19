import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    componentWillRecieveProps(){
        alert('run event input value');
        this.setState({value: this.state.value.toString() + this.props.value});
    }

    componentWillUpdate(){
        alert('run componentWillUpdate');
    }

    componentDidUpdate(){
        alert('run componentDidUpdate');
    }

    render() {
        alert('run render')
        return (
            <input value={this.state.value}/>
        )
    }
}