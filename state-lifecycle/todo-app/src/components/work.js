import { Component } from 'react';
import moment from 'moment';

export class Work extends Component {

    // colorStatus = {
    //     INIT: 'YellowGreen',
    //     RUNNING: '#c0c404',

    // }

    constructor(props) {
        super(props);
        this.state = {
            id: props.value.id,
            name: props.value.name,
            timeStart: props.value.timeStart,
            timeEnd: props.value.timeEnd,
            status: 0,
            textStatus: 'Khởi tạo',
            colorStatus: 'YellowGreen',
            texButton: "Bắt đầu",
            colorButton: "#43b6eb",
            colorTextButton: "white",
            removeWork: props.value.removeWork,
            updateWork: props.value.updateWork,
        }
    }


    nextStatus() {
        let nextStatus = this.state.status + 1
        let newValue = {}
        switch (nextStatus) {
            case 1:
                newValue = {
                    status: nextStatus,
                    timeStart: moment().format('DD/MM/YYYY HH:mm:ss'),
                    textStatus: "Đang thực hiện",
                    colorStatus: '#c0c404',
                    colorButton: '#18df6b',
                    texButton: "Hoàn thành"
                }
                break;
            case 2:
                newValue = {
                    status: nextStatus,
                    timeEnd: moment().format('DD/MM/YYYY HH:mm:ss'),
                    textStatus: "Đã hoàn thành",
                    colorStatus: '#04c434',
                    colorButton: 'red',
                    texButton: "Xóa"
                }
                break;
            case 3:
                this.state.removeWork(this.state.id)
                return
            default:
                break
        }
        this.setState({
            ...this.state,
            ...newValue
        })
    }

    render() {
        return (
            <div className="card work shadow" key={this.state.id} style={{ margin: "10px", padding: "10px", width: "28rem" }}>
                <p> <span className="fw-bold">Tên công việc: </span><span>{this.state.name}</span></p>
                <p> <span className="fw-bold">Thời gian bắt đầu: </span> <span>{this.state.timeStart}</span> </p>
                <p> <span className="fw-bold">Thời gian kết thúc: </span> <span>{this.state.timeEnd}</span></p>
                <p> <span className="fw-bold">Trạng thái: </span><span style={{ color: this.state.colorStatus }}>{this.state.textStatus}</span></p>
                <div className="d-flex justify-content-center">
                    <button className="btn w-50" style={{ background: this.state.colorButton, color: this.state.colorTextButton }} onClick={this.nextStatus.bind(this)}>{this.state.texButton}</button>
                </div>
            </div>
        )
    }
}