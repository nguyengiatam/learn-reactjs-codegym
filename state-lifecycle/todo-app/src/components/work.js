import {Component} from 'react';

export class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            timeStart: props.timeStart,
            timeEnd: props.timeEnd,
            button: "Bắt đầu"
        }
    }

    render() {
        return (
            <div className="card">
                <p> Tên công việc: {this.state.name} </p>
                <p> Thời gian bắt đầu: {this.state.timeStart} </p>
                <p> Thời gian kết thúc: {this.state.timeEnd} </p>
                <button className="btn btn-primary">{this.state.button}</button>
            </div>
        )
    }
}