import {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

export class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {info: props.value}
    }

    render() {
        return (
            <div className="row">
                <div className="col border border-success">{this.state.info.id}</div>
                <div className="col border border-success">{this.state.info.name}</div>
                <div className="col border border-success">{this.state.info.age}</div>
                <div className="col border border-success">{this.state.info.address}</div>
            </div>
        )
    }
}