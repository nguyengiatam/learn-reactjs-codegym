import { Work } from "./components/work";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: [],
      workName: "",
      workTimeStart: "",
      workTimeEnd: "",
    };
    this.inputNameValue = this.inputNameValue.bind(this);
    this.inputTimeStart = this.inputTimeStart.bind(this);
    this.inputTimeEnd = this.inputTimeEnd.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeWork = this.removeWork.bind(this);
    this.updateWork = this.updateWork.bind(this);
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

  removeWork(id){
    let newWorkList = this.state.workList.filter(work => work.id !== id);
    this.setState({ workList: [...newWorkList] });
    console.log(newWorkList);
  }

  updateWork(obj){
    let newWorkList = []
    for (const val of this.state.workList) {
      if(val.id === obj.id){
        console.log({...val, ...obj});
        newWorkList.push({...val, ...obj})
      } else {
        newWorkList.push(val)
      }
    }
    this.setState({workList: [...newWorkList]})
  }

  addWork() {
    const newWork = {
      id: App.id,
      name: this.state.workName,
      timeStart: this.state.workTimeStart,
      timeEnd: this.state.workTimeEnd,
      status: 0,
      removeWork: this.removeWork,
      updateWork: this.updateWork
    };
    this.setState({
      workList: [...this.state.workList, newWork],
      workTimeStart: "",
      workTimeEnd: "",
    });
    App.id++;
  }

  render() {
    const {workList} = this.state
    return (
      <div className="App">
        <div
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
            style={{ margin: "10px" }}
          >
            <button
              className="btn btn-primary"
              style={{ width: "10rem" }}
              onClick={this.addWork}
            >
              Thêm công việc
            </button>
          </div>
        </div>
        <div className='work-list'>
          {workList.map((work) => (
            <Work value={work} key={work.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
