import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.value});
    }

    render() {
        return (
            <input type="text" value={this.state.value} className="text-end" style={{width: "20.5vw"}}/>
        )
    }
}