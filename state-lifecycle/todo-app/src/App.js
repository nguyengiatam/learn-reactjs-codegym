import { Work } from "./components/work";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: [{id: 0, name: '', timeStart: '', timeEnd: ''}],
      workName: "",
      workTimeStart: "",
      workTimeEnd: "",
    };
    this.inputNameValue = this.inputNameValue.bind(this);
    this.inputTimeStart = this.inputTimeStart.bind(this);
    this.inputTimeEnd = this.inputTimeEnd.bind(this);
    this.addWork = this.addWork.bind(this);
  }
  

  static id = 0;

  inputNameValue(event) {
    console.log(event.target.value);
    this.setState({ workName: event.target.value });
  }

  inputTimeStart(event) {
    console.log(event.target.value);
    this.setState({ workTimeStart: event.target.value });
  }

  inputTimeEnd(event) {
    console.log(event.target.value);
    this.setState({ workTimeEnd: event.target.value });
  }

  addWork() {
    App.id++;
    const newWork = {
      id: App.id,
      name: this.state.workName,
      timeStart: this.state.workTimeStart,
      timeEnd: this.state.workTimeEnd,
      status: 0,
    };
    this.setState({
      workList: [...this.state.workList, newWork],
      workTimeStart: "",
      workTimeEnd: "",
    });
  }

  // static getDerivedStateFromProps(nextProps, preState) {
  //   console.log(nextProps.list, preState.list);
  //   if (nextProps.list && preState.list && nextProps.list.length !== preState.list.length) {
  //     return { list: nextProps.list }
  //   }
  //   return null
  // }

  render() {
    const {workList} = this.state
    return (
      <div className="App">
        <form
          className="input-value d-flex flex-column container "
          style={{ width: "40rem" }}
        >
          <div
            className="d-flex justify-content-center"
            style={{ margin: "5px" }}
          >
            <label htmlFor="input-work-name" className="w-25">
              Tên công việc:
            </label>
            <input
              type="text"
              id="input-work-name"
              className="input-group d-block w-50"
              placeholder="Nhập tên công việc"
              onChange={this.inputNameValue.bind(this)}
            />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ margin: "5px" }}
          >
            <label htmlFor="input-time-start" className="w-25">
              Dự kiến bắt đầu
            </label>
            <input
              type="time"
              id="input-time-start"
              className="input-group d-block w-50"
              placeholder="Nhập thời gian bắt đầu dự kiến"
              onChange={this.inputTimeStart}
            />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ margin: "5px" }}
          >
            <label htmlFor="input-time-end" className="w-25">
              Dự kiến kết thúc
            </label>
            <input
              type="time"
              id="input-time-end"
              className="input-group d-block w-50"
              placeholder="Nhập thời gian kết thúc dự kiến"
              onChange={this.inputTimeEnd}
            />
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ margin: "10px" }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "10rem" }}
              onClick={this.addWork}
            >
              Thêm công việc
            </button>
          </div>
        </form>
        <div>
          <Work value={this.state.workList[App.id]} />
          {/* {workList.map((work) => (
            <Work value={work} />
          ))} */}
        </div>
      </div>
    );
  }
}

export default App;
