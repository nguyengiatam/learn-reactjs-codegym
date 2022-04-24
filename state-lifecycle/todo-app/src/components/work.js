import {Component} from 'react';

export class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.value.id,
            name: props.value.name,
            timeStart: props.value.timeStart,
            timeEnd: props.value.timeEnd,
            status: 0,
            button: "Bắt đầu"
        }
    }

    render() {
        return (
            <div className="card" key={this.state.id}>
                <p> Tên công việc: {this.state.name} </p>
                <p> Thời gian bắt đầu: {this.state.timeStart} </p>
                <p> Thời gian kết thúc: {this.state.timeEnd} </p>
                <button className="btn btn-primary">{this.state.button}</button>
            </div>
        )
    }
}